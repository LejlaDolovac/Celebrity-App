// this is the list

<template>
    <ul class="checkboxes">
        <li  v-for="celeb in celebList" v-bind:key="celeb._id">  
                 {{celeb.name}} <input type="checkbox">
 
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
#checkboxes ul {
  margin: 0;
  list-style: none;
  float: left;
}

li{
  text-decoration: none;
}

</style>
