/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imageSource: '',
    filters: [
      {
        name: 'brightness',
        min: 50,
        max: 150,
        current: 100,
        suffix: '%',
      },
      {
        name: 'contrast',
        min: 0,
        max: 250,
        current: 100,
        suffix: '%',
      },
      {
        name: 'greyscale',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
      {
        name: 'hue-rotate',
        min: 0,
        max: 360,
        current: 0,
        suffix: 'deg',
      },
      {
        name: 'invert',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
      {
        name: 'saturate',
        min: 0,
        max: 250,
        current: 100,
        suffix: '%',
      },
      {
        name: 'sepia',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
    ],
  },
  getters: {
    getImage: state => state.imageSource,
    getFilters: state => state.filters,
  },
  mutations: {
    setImageSource_MUTA(state, payload) {
      state.imageSource = payload;
    },
  },
  actions: {
    // payload = imageSource
    setImageSource_STORE(context, payload) {
      context.commit('setImageSource_MUTA', payload);
    },
  },
});

export default store;
