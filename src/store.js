/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    image: {
      width: 0,
      height: 0,
      source: '',
    },
    filters: [
      {
        index: '',
        name: 'brightness',
        min: 50,
        max: 150,
        current: 100,
        suffix: '%',
      },
      {
        index: '',
        name: 'contrast',
        min: 0,
        max: 250,
        current: 100,
        suffix: '%',
      },
      {
        index: '',
        name: 'greyscale',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
      {
        index: '',
        name: 'hue-rotate',
        min: 0,
        max: 360,
        current: 0,
        suffix: 'deg',
      },
      {
        index: '',
        name: 'invert',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
      {
        index: '',
        name: 'saturate',
        min: 0,
        max: 250,
        current: 100,
        suffix: '%',
      },
      {
        index: '',
        name: 'sepia',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
    ],
  },
  getters: {
    getImage: state => state.image,
    getImageSource: state => state.image.source,
    getFilters: state => state.filters,
    getFilter: state => index => state.filters[index],
  },
  mutations: {
    setImageSource_MUTA(state, payload) {
      state.image.source = payload;
    },

    setFilterValue_MUTA(state, payload) {
      state.filters[payload.index].index = payload.index;
      state.filters[payload.index].current = payload.filterNewValue;
    },

    setImageSize_MUTA(state, payload) {
      state.image.width = payload.width;
      state.image.height = payload.height;
    },
  },
  actions: {
    // payload = imageSource
    setImageSource_STORE(context, payload) {
      context.commit('setImageSource_MUTA', payload);
    },

    setFilterValue_STORE(context, payload) {
      context.commit('setFilterValue_MUTA', payload);
    },

    setImageSize_STORE(context, payload) {
      context.commit('setImageSize_MUTA', payload);
    },
  },
});

export default store;
