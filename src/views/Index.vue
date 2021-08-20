<template>
    <div class="flex w-auto h-5 rounded-br-xl rounded-bl-xl px-4 py-7 bg-blue-400 ">
    <div class="inline-flex content-center"> 
        <a href="/items"><div class="bg-blue-500 px-4 py-3 text-center text-sm font-semibold rounded-xl text-white hover:bg-blue-700">
            Module Item
        </div>
        </a>
        
        <a href="/customers">
        <div class="bg-blue-500 mx-2 px-4 py-3 text-center text-sm font-semibold rounded-xl text-white hover:bg-blue-700">
            Module Customer
        </div>
        </a>
        <a href="/sales">
        <div class="bg-blue-500 mx-2  px-4 py-3 text-center text-sm font-semibold rounded-xl text-white hover:bg-blue-700">
            Module Sales
        </div>
        </a>
    </div>
    </div>
    <h3 >Inventory Penjualan </h3>
</template>

<script>
export default {
}
</script>
<style scoped>
h3 {
  margin: 40px 30rem ;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>