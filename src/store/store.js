import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: 'test',
  },
  mutations: {},
  getters: {
    clusteringSimulation(/* state */) {
      return {
        data: [[1, 3],
          [1, 7],
          [0, 9],
          [9, 4],
          [7, 8],
          [6, 1],
          [0, 4],
          [6, 0],
          [6, 2],
          [1, 5]],
        iterations: [{
          centers: [[1, 7], [1, 5]],
          labels: [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
        },
        {
          centers: [[2.6666666666666665, 8.0],
            [4.142857142857143, 2.7142857142857144]],
          labels: [1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
        },
        {
          centers: [[2.25, 7.25], [4.666666666666667, 2.3333333333333335]],
          labels: [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        },
        {
          centers: [[1.8, 6.6], [5.6, 2.0]],
          labels: [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        },
        {
          centers: [[1.6666666666666667, 6.0], [6.75, 1.75]],
          labels: [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        }],
      };
    },
    aprioriSimulation(/* state */) {
      return {
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
    },
  },
  actions: {},
});
