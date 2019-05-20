<!-- celebreties you have seen and celebs you want to see is displayed here, products -->
<template>
    <ul>
        <li v-for="celeb in celebs" :key="celeb._id">  
          <p>{{celeb.name}}</p>
          <a href="#" class="btn" @click="removeCeleb(celeb._id)">Remove celebreties</a>
        </li>
    </ul>
</template>

<script>
//import viewCeleb from '@/components/viewCeleb';

export default {
  beforeMount(){
    this.$store.dispatch('getCelebs');

  },
  methods: {
    // async seeCeleb(){
     // this.$store.dispatch('celeb');
      // console.log(seeCeleb);
  removeCeleb (id) {
      this.$store.dispatch('removeCeleb', id)
    }
  },
  computed: {
     celebs (){
      return this.$store.state.celebs; 
    }
  }  
}
</script>






<style>

p{
  color:black;
}

</style>
