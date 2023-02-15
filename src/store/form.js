

const state = {
    data:1
};

const getters={
    counter(state) {
      return state.data
    }
  };

const mutations= {
    INCREMENT(state) {
        console.log('inside mutation')
      state.data=state.data + 1
      console.log(state.data)
    },

    DECREMENT(state) {
        console.log('inside mutation  DECREMENT')
        state.data=state.data - 1
        console.log("decrement " + " " + state.data)
    },
  };

const actions = {
    increment(context) {
        console.log('iside action')
        context.commit('INCREMENT')
     },
     decrement(context) {
        console.log('iside action decrement')
        context.commit('DECREMENT')
     }
 
};
export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};
