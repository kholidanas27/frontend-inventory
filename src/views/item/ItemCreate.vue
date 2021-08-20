<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>Tambah Data Items</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="nama_item" class="font-semibold">Nama Item</label>
                                <input type="text" class="form-control" v-model="items.nama_item" placeholder="Masukkan Nama Item">
                                <!-- validation -->
                                <div v-if="validation.nama_item" class="mt-2 alert alert-danger">
                                    {{ validation.nama_item[0] }}
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="unit" class="font-semibold">Unit</label>
                                <select class="form-select" v-model="items.unit" placeholder="Masukkan Nama Unit" aria-label="Default select example">
                                <option>Kg</option>
                                <option>Pcs</option>
                                </select>
                                <!-- validation -->
                                <div v-if="validation.unit" class="mt-2 alert alert-danger">
                                    {{ validation.unit[0] }}
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="stok" class="font-semibold">Stok</label>
                                <input type="text" class="form-control" v-model="items.stok" placeholder="Masukkan Stok Items">
                                <!-- validation -->
                                <div v-if="validation.stok" class="mt-2 alert alert-danger">
                                    {{ validation.stok[0] }}
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="harga_satuan" class="font-semibold">Harga Satuan</label>
                                <input type="text" class="form-control" v-model="items.harga_satuan" placeholder="Masukkan Harga Satuan">
                                <!-- validation -->
                                <div v-if="validation.harga_satuan" class="mt-2 alert alert-danger">
                                    {{ validation.harga_satuan[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="gambar" class="font-semibold">Gambar</label>
                                <textarea class="form-control" rows="4" v-model="items.gambar" placeholder="Masukkan Gambar"></textarea>
                                <!-- validation -->
                                <div v-if="validation.gambar" class="mt-2 alert alert-danger">
                                    {{ validation.gambar[0] }}
                                </div>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
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

        //method store
        function store() {

            let nama_item = items.nama_item
            let unit = items.unit
            let stok = items.stok
            let harga_satuan = items.harga_satuan
            let gambar = items.gambar

            axios.post('http://localhost:8000/api/items', {
                nama_item: nama_item,
                unit: unit,
                stok: stok,
                harga_satuan: harga_satuan,
                gambar: gambar
            }).then(() => {

                //redirect ke post index
                router.push({
                    path: '/items'
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
            store
        }

    }

}
</script>