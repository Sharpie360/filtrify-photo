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
        index: 0,
        name: 'brightness',
        min: 50,
        max: 150,
        current: 100,
        suffix: '%',
      },
      {
        index: 1,
        name: 'contrast',
        min: 0,
        max: 250,
        current: 100,
        suffix: '%',
      },
      {
        index: 2,
        name: 'grayscale',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
      {
        index: 3,
        name: 'hue-rotate',
        min: 0,
        max: 360,
        current: 0,
        suffix: 'deg',
      },
      {
        index: 4,
        name: 'invert',
        min: 0,
        max: 100,
        current: 0,
        suffix: '%',
      },
      {
        index: 5,
        name: 'saturate',
        min: 0,
        max: 250,
        current: 100,
        suffix: '%',
      },
      {
        index: 6,
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

    setFilterValue_MUTA(state, { index, filterNewValue }) {
      Vue.set(state.filters, index, { ...state.filters[index], index, current: filterNewValue });
      // state.filters[index].index = index;
      // state.filters[index].current = filterNewValue;
    },

    setImageSize_MUTA(state, payload) {
      state.image.width = payload.width;
      state.image.height = payload.height;
    },
  },
  actions: {
    // payload = imageSource
    setImageSource_STORE({ commit }, payload) {
      commit('setImageSource_MUTA', payload);
    },

    setFilterValue_STORE({ commit }, payload) {
      commit('setFilterValue_MUTA', payload);
    },

    setImageSize_STORE({ commit }, payload) {
      commit('setImageSize_MUTA', payload);
    },
  },
});

export default store;
