

const state = {
    data:1,
    formValue:[]
      
    
};

const getters={
    counter(state) {
      return state.data
    },
    showFormValue(state){
      console.log(" inside getter state formValue")
      console.log(state.formValue)
      return state.formValue
    },

  };

const mutations= {
  setFormData (state,data) {
    console.log('inside mutations updateForm')
    state.formValue=data
    console.log("the value inside the state is :");
    console.log(state.formValue)
  },

    INCREMENT(state) {
        console.log('inside mutation')
      state.data=state.data + 1
      
    },

    DECREMENT(state) {
       
        state.data=state.data - 1
      
    },
  };

const actions = {

  updateForm (context,data) {
    console.log('inside action   updateForm')
    console.log(data);
    context.commit('setFormData',data)
  },
    increment(context) {
      
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
