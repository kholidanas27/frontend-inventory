<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA Items</h4>
                        <hr>
                        <router-link :to="{path: '/items/create'}" class="btn btn-md btn-primary">TAMBAH DATA ITEMS</router-link>
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="bg-gray-300">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Item</th>
                                    <th scope="col">Unit</th>
                                    <th scope="col">Stok</th>
                                    <th scope="col">Harga Satuan</th>
                                    <th scope="col">Gambar</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in items" :key="index">
                                    <td width="50" class="text-center">{{ index + 1 }}</td>
                                    <td>{{ item.nama_item }}</td>
                                    <td>{{ item.unit }}</td>
                                    <td>{{ item.stok }}</td>
                                    <td>{{ item.harga_satuan }}</td>
                                    <td>{{ item.gambar }}</td>
                                    <td class="text-center">
                                        <router-link :to="{path: '/items/edit/:id_item', params:{id: items.id }}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click.prevent="itemsDelete('items/{id}')" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let items = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/items')
            .then(response => {
              
              //assign state posts with response data
              items.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })
        })

        function itemsDelete(id) {
            
            //delete data post by ID
            axios.delete(`http://localhost:8000/api/items/${id}`)
            .then(() => {
                
            //splice posts 
            items.value.splice(items.value.indexOf(id), 1);

            }).catch(error => {
                console.log(error.response.data)
            })

        }


        //return
        return {
            items,
            itemsDelete
        }

    }
    

}
</script>