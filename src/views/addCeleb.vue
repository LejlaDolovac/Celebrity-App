<!-- Here you add a celeb -->

<template>
  <main id="addCeleb">
    <h2>Please add a new celebretie that you want to see</h2>
    <form action="#">
      <input class="addName" type="text" v-model="name"> <br>
      <a href="#" class="btn" @click="createCeleb">Add celebreties</a>
      </form> 

      <viewCeleb />

  </main>
</template>



<script>
import viewCeleb from '@/components/viewCeleb';
import axios from 'axios';

export default {
  name: 'addCeleb',
  components: {
    viewCeleb
  },
  data (){
    return {
      name: null,
      celebList: [],
      addCeleb: {
        name: " ",
      }
    }
  },
  methods: { 
    // creates the new celebrite
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
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Apple Chancery, cursive;
  font-style: italic;
  font-variant: small-caps;
  font-size: 1rem;


}

.btn{
  text-decoration: none;
  height: 30px;
  border: 2px solid black;
  border-radius: 999rem;
  height: 40px;
  color: darkblue; 
  background-color: white;
}

h2{
  font-size: 1rem;
  font-family:Chalkduster, fantasy;
  color:darkblue;
}

</style>

