 <!-- Here you add a celeb -->

<template>
  <main id="NewCeleb">
    <h2>Please add a new celebretie that you want to see</h2>
    <form action="#">
      <input class="addName" type="text" v-model="name"> <br>
      <a href="#" class="btn" @click="createCeleb">Add celebreties</a>
      </form> 

      <viewCeleb>
        
      </viewCeleb>

  </main>
</template>



<script>
import viewCeleb from '@/views/viewCeleb';
import axios from 'axios';

export default {
  name: 'NewCeleb',
  components: {
    viewCeleb
  },
  data (){
    return {
      name: null,
      celebList: [],
      newCeleb: {
        name: " ",
      }
    }
  },
  methods: { // creates the new celebrite
    async createCeleb(){
      axios.post('http://localhost:3000/products', {
          name: this.name
      })
      .then(() => {
          this.$emit('update-list')
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
  
}
</script>

<style>

.addName{
width: 15rem;
height: 1rem;
border: 1px solid black;
border-radius: 999rem;
text-decoration: none;
margin: 1.5rem;
}

.btn{
  text-decoration: none;
  height: 30px;
  border: 2px solid black;
  border-radius: 999rem;
  height: 40px;
  color: blue;
  
  
  
}

h2{
  font-size: 1rem;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color:blueviolet;
}

</style>

