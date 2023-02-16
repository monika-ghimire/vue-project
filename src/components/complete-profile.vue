<template>
    <div>
      <div class="grid md:grid-cols-2">
        <div class="h-full"><OasisTitle /></div>
  
        <div class=" pb-5">
          <div class="p-10 relative">
              <!-- <router-link to="/registerAccount">  </router-link>  -->
            <div class=" back-button flex mt-4 absolute">
              <img src="../assets/backIcon.png" />
              <button class="ml-3 text-slate-400 font-semibold" @click="goBackPage">Back</button>
            </div>
         
  
            <div class="float-right mt-5">
              <p class="text-slate-300">STEP 0{{ getvalue }}/03</p>
              <P class="text-slate-400 font-semibold">Residency Info.</P>
            </div>
          </div>
  
          <section class="body-content-from">
            <div class="p-10">
              <h1 class="font-bold text-2xl">Complete Your Profile!</h1>
              <p class="text-slate-400 mt-2">
                For the purpose of industry regulation, your details are required.
              </p>
            </div>
  
            <!-- form -->
            <section  class="p-20 pt-0 pl-10 pb-2">
              <el-form
             
                :label-position="labelPosition"
                label-width="100px"
                :model="formLabelAlign">
  
                <el-form-item label="Phone number">
                  <el-input v-model="formLabelAlign.number" placeholder="Please enter phone number" class=" "></el-input>
                </el-form-item>
  
                <el-form-item label="Your address">
                  <el-input v-model="formLabelAlign.address" placeholder="Please enter address" class=" "></el-input>
                </el-form-item>
  
                <el-form-item label="Country of residence">
                  <el-input v-model="formLabelAlign.country_residence" placeholder="Please select" class=" "></el-input>
                </el-form-item>
   
                <!-- <router-link to="/verification">  </router-link> -->
                <el-button type="primary" @click="onSubmit" class=" w-full">Save & Continue</el-button>
              
                <div class="mt-6 flex ml-20">
                    <img  src="../assets/lock.jpg" class="ml-10 "/>
                    <p class="text-center text-slate-400 ml-5 ">Your Info is safely secured</p>
                </div>
              </el-form>
  
            </section>
           
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import OasisTitle from "../components/oasis-title.vue";
  import { mapActions, mapGetters } from "vuex";
  
  export default {
      data() {
        return {
          labelPosition: 'top',
          formLabelAlign: {
            number: '',
            address:'',
            country_residence:'',
         
          }
  
        };
      },
    components: {
      OasisTitle,
    },
  
 
    computed: {
    ...mapGetters({
      getvalue: "form/counter",
      // getFormValue:'form/showFormValue'
    }),
  },

  methods: {
    ...mapActions("form", ["increment","decrement",'updateForm']),

    // async loadData() {
    //   await this.increment();
     
    // },
    // async loadDataBack() {
    //   await ;
    // },

    onSubmit() {
    
      console.log('form2');
      this.increment();
      

      console.log('form objet enter SECOND')
     console.log(this.formLabelAlign)

     
     console.log('trying to dispatch obj  mapaction SECONDFORM');
     this.updateForm(this.formLabelAlign);
    },

     goBackPage(){
      
        this.decrement()
      
      
    }
  },
//   mounted() {
//     this.loadData();
//   },

  };
  </script>
  
  <style scoped>
  .body-content-from {
    margin-left: 10%;
    margin-top: 5%;
  }
  .back-button :hover{
      color: rgb(22, 71, 205);
  
  }
  </style>
  