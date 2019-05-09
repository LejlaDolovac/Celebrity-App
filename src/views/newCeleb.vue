 <!-- Here you add a celeb -->

<template>
  <main id="NewCeleb">
    <h2>Please add a new celebretie that you want to see</h2>
    <form action="">
      <input class="addName" type="text" name="name"> <br>
      <a href="#" class="btn" @click="createCeleb">Add celebreties</a>
      </form> 
     
  </main>
</template>



<script>
export default {
  name: 'NewCeleb',
  data (){
    return {
      newCeleb: {
        name: " ",
      }
    }
  },
  methods: { // creates the new celebretie
    async createCeleb(){
      this.$store.dispatch('celeb');
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
  border: 1px solid black;
  border-radius: 999rem;
  height: 40px;
  
  
}

h2{
  font-size: 1rem;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color:blueviolet;
}
</style>

