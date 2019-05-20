import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    newCeleb: [],
    celeb: [],
    celebList: [],
    celebs: []
  },
  mutations: {
    seeCeleb(state, celeb){
      console.log(celeb);
       state.celeb = celeb;
    },
    setCelebs(state, celebs){
      state.celebs = celebs;
    }
    

  },
  // get celebs from orders
  actions: {
      async getCelebs(ctx){
           
        let celebs = await axios.get('http://localhost:3000/products');
        console.log(celebs);
        ctx.commit('setCelebs', celebs.data.products);  // sets the celeb

      },
      /* remove celeb */
      async removeCeleb(ctx, id){
        axios.delete('http://localhost:3000/products/', {
            data: {id:id}
        })
        .then(() => {
          // uppdatera din lista
        })
        .catch((error) => {
          console.log(error);
        });
      },
  }
})
