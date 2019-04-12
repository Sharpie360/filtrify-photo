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
      filterString: '',
      customImageName: '',
      selectedFormat: 'image/png',
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
        name: 'grayscale',
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
    getCustomName: state => state.image.customImageName,
    getSelectedFormat: state => state.image.selectedFormat,
  },
  mutations: {
    setImageSource_MUTA({ image }, payload) {
      image.source = payload;
    },

    setFilterValue_MUTA({ filters }, { index, filterNewValue }) {
      filters[index].index = index;
      filters[index].current = filterNewValue;
    },

    setImageSize_MUTA({ image }, { width, height }) {
      image.width = width;
      image.height = height;
    },

    // payload === value
    setCustomImageName_MUTA({ image }, payload) {
      image.customImageName = payload;
    },

    // payload === filterString
    setFilterString_MUTA({ image }, payload) {
      image.filterString = payload;
    },

    // payload === file format
    setImageFormat_MUTA({ image }, payload) {
      image.selectedFormat = payload;
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

    setFilterString_STORE({ commit }, payload) {
      commit('setFilterString_MUTA', payload);
    },
  },
});

export default store;
