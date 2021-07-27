import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countries: ['ハンバーガー', 'てりやきバーガー', 'ポテト']
    },
    getters,
    mutations,
    actions
});