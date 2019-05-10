<!-- celebreties you have seen and celebs you want to see is displayed here, products -->

<template>
  <article class="kandis">
     <h3> I want to see </h3>
    <aside class="name"> {{seen.name}}</aside>
    <h3> Have seen </h3>
    <aside class="have-seen">{{seen.name}}</aside>
    <img alt="" src="">

    <div class="see-button">
        <a href="#" class="see-btn" @click="seeCeleb"> See my celebrity</a>
    </div>
  </article>
  
</template>

<script>
// @ is an alias to /src
 // import  from '@/components/.vue'

export default {
  name: 'kandis',
  components: {
  },
  methods: {
     async seeCeleb(){
      this.$store.dispatch('celeb');
      console.log(seeCeleb);

    }
  },
  computed: {
    celeb(){
      return this.$store.state.celeb; 
    }
  }
}
</script>

<style>

.kandis{
  background: orange;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
}






</style>
