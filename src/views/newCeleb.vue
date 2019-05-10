 <!-- Here you add a celeb -->

<template>
  <main id="NewCeleb">
    <h2>Please add a new celebretie that you want to see</h2>
    <form action="#">
      <input class="addName" type="text" v-model="filter" name="name"> <br>
      <a href="#" class="btn" @click="createCeleb">Add celebreties</a>
      </form> 
      <tbody>
          <tr v-for="(NewCeleb, index) in NewCeleb" :key="index">
              <td>{{ want.name }}</td>
          </tr>
      </tbody>
     
  </main>
</template>



<script>
import Celeb from '@/views/Celeb';



export default {
  name: 'NewCeleb',
  data (){
    return {
      filter: null,
      newCeleb: {
        name: " ",
      }
    }
  },
  methods: { // creates the new celebrite
    async createCeleb(){
      this.$store.dispatch('celeb');
      this.$router.push('/celeb');
        console.log(createCeleb);


    }
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

