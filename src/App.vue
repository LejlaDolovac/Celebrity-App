<template>
  <div id="app">
     <h3>Star Crush</h3>
     <img> <!-- add an image -->
    <div id="nav">
      <router-link to="/newCeleb">Add celebreties</router-link> |
      <router-link to="/">Have seen</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount(){
    this.$store.dispatch('getCelebs'); // dispatch action in   store
  }
}
</script>


<style>
body{
    background-color:bisque;


}
#app {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;  
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: blueviolet;
}

#nav a.router-link-exact-active {
  text-decoration: none;
  color: blueviolet;
}
</style>
