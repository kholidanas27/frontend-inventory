<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>Edit Items</h4>
                        <hr>
                        <form @submit.prevent="update">
                            <div class="form-group">
                                <div class="form-group">
                                <label for="nama_item" class="font-semibold">Nama Item</label>
                                <input type="text" class="form-control" v-model="items.nama_item" placeholder="Masukkan Nama Item">
                                <!-- validation -->
                                <div v-if="validation.nama_item" class="mt-2 alert alert-danger">
                                    {{ validation.nama_item[0] }}
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="unit" class="font-weight-bold">Unit</label>
                                <input type="text" class="form-control" v-model="items.unit" placeholder="Masukkan Nama Item">
                                <!-- validation -->
                                <div v-if="validation.unit" class="mt-2 alert alert-danger">
                                    {{ validation.unit[0] }}
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="stok" class="font-weight-bold">Stok</label>
                                <input type="text" class="form-control" v-model="items.stok" placeholder="Masukkan Nama Item">
                                <!-- validation -->
                                <div v-if="validation.stok" class="mt-2 alert alert-danger">
                                    {{ validation.stok[0] }}
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="harga_satuan" class="font-weight-bold">Harga Satuan</label>
                                <input type="text" class="form-control" v-model="items.harga_satuan" placeholder="Masukkan Nama Item">
                                <!-- validation -->
                                <div v-if="validation.harga_satuan" class="mt-2 alert alert-danger">
                                    {{ validation.harga_satuan[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="gambar" class="font-weight-bold">Gambar</label>
                                <textarea class="form-control" rows="4" v-model="items.gambar" placeholder="Masukkan Konten Post"></textarea>
                                <!-- validation -->
                                <div v-if="validation.gambar" class="mt-2 alert alert-danger">
                                    {{ validation.gambar[0] }}
                                </div>
                            </div>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const items = reactive({
            nama_item: '',
            unit: '',
            stok: '',
            harga_satuan: '',
            gambar: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get(`http://localhost:8000/api/items/${route.params.id}`)
            .then(response => {
              
              //assign state posts with response data
              items.nama_item    = response.data.data.nama_item  
              items.unit  = response.data.data.unit
              items.stok  = response.data.data.stok
              items.harga_satuan  = response.data.data.harga_satuan
              items.gambar  = response.data.data.gambar  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let nama_item = items.nama_item
            let unit = items.unit
            let stok = items.stok
            let harga_satuan = items.harga_satuan
            let gambar = items.gambar

            axios.put(`http://localhost:8000/api/items/${route.params.id}`, {
                nama_item: nama_item,
                unit: unit,
                stok: stok,
                harga_satuan: harga_satuan,
                gambar: gambar
            }).then(() => {

                //redirect ke post index
                router.push({
                    path: 'items.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            items,
            validation,
            router,
            update
        }

    }

}
</script>
