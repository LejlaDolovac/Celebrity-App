// this is the list

<template>
    <ul class="box">
        <li  v-for="celeb in celebList" v-bind:key="celeb._id">  
                 {{celeb.name}} 
 
        </li>
    </ul>
</template>


<script>
import axios from 'axios';

export default {
  data (){
    return {
      celebList: [],
    }
  },
  mounted() {
    this.$parent.$on('update-list', () => {
          console.log('It works!');
          axios.get('http://localhost:3000/products')
            .then((response) => {
            this.celebList = response.data.products
            })
            .catch((error) => {
                console.log(error);
            });
      }
    )
  },




}
</script>


<style>
#box ul {
  margin: 0;
  float: left;
  list-style-type: none;  

}

li{
  text-decoration: none;
  list-style-type: none;  

}

</style>
