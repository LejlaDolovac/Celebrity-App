<template>
  <div id="app">
    <div id="nav">
      <router-link to="/addCeleb">Add celebreties</router-link> |
      <router-link to="/">Have seen</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeMount(){
    this.$store.dispatch('getCelebs'); // dispatch action in   store
  },
  methods: {
    removeCeleb (id) {
      this.$store.dispatch('removeCeleb', id)
    }
  }
}
</script>


<style>
body{
    background-color: lightblue;


}
#app {
  font-family: Chalkduster, fantasy;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;  
  font-size: 1rem;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: darkblue;
}

#nav a.router-link-exact-active {
  text-decoration: none;
  color: darkblue;
}
</style>
