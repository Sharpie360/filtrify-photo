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
      customImageName: '',
      filterString: '',
    },
    filterData: {
      _id: 0,
      name: 'Default Filter Set',
      filters: [
        {
          index: '',
          name: 'brightness',
          min: 50,
          max: 150,
          current: 100,
          default: 100,
          suffix: '%',
        },
        {
          index: '',
          name: 'contrast',
          min: 0,
          max: 250,
          current: 100,
          default: 100,
          suffix: '%',
        },
        {
          index: '',
          name: 'grayscale',
          min: 0,
          max: 100,
          current: 0,
          default: 0,
          suffix: '%',
        },
        {
          index: '',
          name: 'hue-rotate',
          min: 0,
          max: 360,
          current: 0,
          default: 0,
          suffix: 'deg',
        },
        {
          index: '',
          name: 'invert',
          min: 0,
          max: 100,
          current: 0,
          default: 0,
          suffix: '%',
        },
        {
          index: '',
          name: 'saturate',
          min: 0,
          max: 250,
          current: 100,
          default: 100,
          suffix: '%',
        },
        {
          index: '',
          name: 'sepia',
          min: 0,
          max: 100,
          current: 0,
          default: 0,
          suffix: '%',
        },
      ],
    },
  },
  getters: {
    getImage: state => state.image,
    getImageSource: state => state.image.source,
    getFilterData: state => state.filterData,
    getCustomName: state => state.image.customImageName,
  },
  mutations: {
    setImageSource_MUTA(state, payload) {
      state.image.source = payload;
    },

    setFilterValue_MUTA(state, payload) {
      state.filterData.filters[payload.index].index = payload.index;
      state.filterData.filters[payload.index].current = payload.filterNewValue;
    },

    setImageSize_MUTA(state, payload) {
      state.image.width = payload.width;
      state.image.height = payload.height;
    },

    // payload === value
    setCustomImageName_MUTA(state, payload) {
      state.image.customImageName = payload;
    },

    // payload === filterDatatring
    setFilterString_MUTA(state, payload) {
      state.image.filterString = payload;
    },

    resetFilters_MUTA(state) {
      state.filterData.filters.forEach((filter) => {
        filter.current = filter.default;
      });
    },

    // payload === index
    resetFilter_MUTA(state, payload) {
      state.filterData.filters[payload].current = state.filterData.filters[payload].default;
    },

    // payload === loadedFilterData
    loadRemoteFilterData_MUTA(state, payload) {
      state.filterData = payload;
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

    resetFilters_STORE({ commit }) {
      commit('resetFilters_MUTA');
    },

    resetFilter_STORE({ commit }, payload) {
      commit('resetFilter_MUTA', payload);
    },

    loadRemoteFilterData_STORE({ commit }, payload) {
      commit('loadRemoteFilterData_MUTA', payload);
    },
  },
});

export default store;
