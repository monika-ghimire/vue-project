import Vue from "vue";
import Vuex, { Store } from "vuex";

import form from "./store/form";

Vue.use(Vuex);

export default new Store({
    modules :{
        form
    }
})