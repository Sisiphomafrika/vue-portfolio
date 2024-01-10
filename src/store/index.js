import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    ResumeData: [],
    ProjectData: [],
    testimonialData: [],
  },
  getters: {
  },
  mutations: {
    testimonialData(state, data) {
      state.testimonialData = data;
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('http://localhost:3030/data') 
        .then(response => {
          console.log(response);
          commit('testimonialData', response.data[2]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
  modules: {
  },
});