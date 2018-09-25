import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const instance = axios.create({
  // baseURL: 'http://matlaspisa.isti.cnr.it:5005/api',
  baseURL: 'http://localhost:5000/api',
});

function prepareRequestParameters(obj) {
  const params = new URLSearchParams();
  Object.keys(obj).forEach((k) => {
    params.append(k, obj[k]);
  });

  return params;
}

export default new Vuex.Store({
  state: {
    data: 'test',
    kMeansSimulation: {},
  },
  mutations: {
    kMeansSimulation(state, payload) {
      state.kMeansSimulation = payload;
    },
  },
  getters: {
    kMeansSimulation(state) {
      return state.kMeansSimulation;
    },
    aprioriSimulation(/* state */) {
      const ad = {
        data: [
          ['C', 'D', 'E', 'F'],
          ['D', 'F'],
          ['B', 'F'],
          ['A', 'B'],
          ['B', 'D'],
          ['B', 'C', 'D', 'E'],
          ['C', 'E'],
          ['B', 'C', 'D'],
          ['A', 'C', 'D'],
          ['A', 'D', 'E', 'F'],
        ],
        min_supp: 0.3,
        min_conf: 0.8,
        itemsets: [
          [
            [['A'], 0.3, ''],
            [['B'], 0.5, ''],
            [['C'], 0.5, ''],
            [['D'], 0.7, ''],
            [['E'], 0.4, ''],
            [['F'], 0.4, ''],
          ], [
            [['A', 'B'], 0.1, 'X'],
            [['A', 'C'], 0.1, 'X'],
            [['A', 'D'], 0.2, 'X'],
            [['A', 'E'], 0.1, 'X'],
            [['A', 'F'], 0.1, 'X'],
            [['B', 'C'], 0.2, 'X'],
            [['B', 'D'], 0.3, ''],
            [['B', 'E'], 0.1, 'X'],
            [['B', 'F'], 0.1, 'X'],
            [['C', 'D'], 0.4, ''],
            [['C', 'E'], 0.3, ''],
            [['C', 'F'], 0.1, 'X'],
            [['D', 'E'], 0.3, ''],
            [['D', 'F'], 0.3, ''],
            [['E', 'F'], 0.2, 'X'],
          ], [
            [['C', 'D', 'E'], 0.2, 'X'],
          ],
        ],
        rules: [[['B'], ['D'], 0.6, 'X', null],
          [['C'], ['D'], 0.8, '', 1.142857142857143],
          [['C'], ['E'], 0.6, 'X', null],
          [['D'], ['B'], 0.42857142857142855, 'X', null],
          [['D'], ['C'], 0.5714285714285714, 'X', null],
          [['D'], ['E'], 0.42857142857142855, 'X', null],
          [['D'], ['F'], 0.42857142857142855, 'X', null],
          [['E'], ['C'], 0.75, 'X', null],
          [['E'], ['D'], 0.75, 'X', null],
          [['F'], ['D'], 0.75, 'X', null],
        ],
      };
      const items = {};
      ad.data.forEach(b => b.forEach((i) => {
        items[i] = 1;
      }));
      ad.items = items;
      return ad;
    },
  },
  actions: {
    loadKMeansExperiment(context, payload) {
      const params = prepareRequestParameters(payload);
      console.log('params', payload);
      instance.post('KmeansExperiment', params)
        .then((response) => {
          console.log(response);
          context.commit('kMeansSimulation', response.data);
        });
    },
  },
});
