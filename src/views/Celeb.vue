<!-- celebreties you have seen and celebs you want to see is displayed here -->

<template>
  <article class="kandis">
     <h3> I want to see </h3>
    <aside class="name"> {{want.name}}</aside>
    <h3> Have seen </h3>
    <aside class="have-seen">{{seen.name}}</aside>
    <img alt="" src="">
  </article>
</template>

<script>
// @ is an alias to /src
 // import  from '@/components/.vue'

export default {
  name: 'kandis',
  components: {
  }
}
</script>
