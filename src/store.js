import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    newCeleb: [],
    celeb: []
  },
  mutations: {
    seeCeleb(state, celeb){
      console.log(celeb);
       state.celeb = celeb;
    },
    setCelebs(state, celeb){
      state.celeb = celeb;
    }
    

  },
  // get celebs from orders
  actions: {
      async getCelebs(ctx){
           
        let celebs = await axios.get('http://localhost:3000/products');
        console.log(celebs);
        ctx.commit('setCelebs', celebs.data);

       }
  }

}); 
