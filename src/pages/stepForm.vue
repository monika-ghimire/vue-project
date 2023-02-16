
<template>
  
  <div>
   
          <div v-if="getvalue===1">
            <registerAccount />
          </div>
          <div v-if="getvalue===2">
          <CompleteProfile/>
          </div>
          <div v-if="getvalue===3">
          <VeriFicationForm/>
          </div>

          <div>
            
          </div>

   </div>


</template>


<script>
import registerAccount from '../components/register-account.vue';
import CompleteProfile from '../components/complete-profile.vue';
import { mapGetters } from "vuex";
import VeriFicationForm from '@/components/VeriFication-Form.vue';

export default{
    components: { registerAccount, CompleteProfile, VeriFicationForm },  

   

        computed: {
    ...mapGetters({
      getvalue: "form/counter",
    }),
  },
  
    
  
}

</script>


<style scoped>

</style>