<template>
  <div>
    <div class="grid md:grid-cols-2">
      <div class="h-full"><OasisTitle /></div>

      <div class="pb-5">
        <div class="p-10 relative">
          <router-link to="/">
            <div class="back-button flex mt-4 absolute">
              <img src="../assets/backIcon.png" />
              <button class="ml-3 text-slate-400 font-semibold" >Back</button>
            </div>
          </router-link>

          <div class="float-right mt-5">
            <p class="text-slate-300">STEP 0{{ getvalue }}/03</p>
            <P class="text-slate-400 font-semibold">Personal Info.</P>
          </div>
        </div>

        <section class="body-content-from">
          <div class="p-10">
            <h1 class="font-bold text-2xl">Register Individual Account!</h1>
            <p class="text-slate-400 mt-2">
              For the purpose of industry regulation, your details are required.
            </p>
          </div>

          <!-- form -->
          <section class="p-20 pt-0 pl-10 pb-2">
            <el-form
              :label-position="labelPosition"
              label-width="100px"
              :model="formLabelAlign"
            >
              <el-form-item label="Your fullname">
                <el-input
                  v-model="formLabelAlign.fullname"
                  placeholder="Invictus Innocent"
                  class=" "
                ></el-input>
              </el-form-item>

              <el-form-item label="Email address">
                <el-input
                  v-model="formLabelAlign.email"
                  placeholder="Enter email address"
                  class=" "
                ></el-input>
              </el-form-item>

              <el-form-item label="Create password">
                <el-input
                  v-model="formLabelAlign.password"
                  placeholder="Enter email address"
                  class=" "
                ></el-input>
              </el-form-item>

              <el-checkbox v-model="checked" class="pb-2"
                >I agree to terms & conditions</el-checkbox
              >

              <!-- <router-link to="/compeletProfile">  </router-link> -->
                <el-button type="primary"  @click="onSubmit" class="w-full">
                  Register Account
                </el-button>
            
            </el-form>

            <p class="text-slate-400 text-center">Or</p>
            <el-button class="w-full">Register with Google</el-button>
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
      labelPosition: "top",
      formLabelAlign: {
        fullname: "",
        email: "",
        password: "",
        checked: true,
      },
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
    ...mapActions("form", ["increment",'updateForm']),

    onSubmit() {
      console.log("form1");
      this.increment();
    
    //  console.log('form objet enter')
    //  console.log(this.formLabelAlign)

     
     console.log('trying to dispatch obj  mapaction 1ST FORM');
     this.updateForm(this.formLabelAlign);
    },

   
  },
};
</script>

<style scoped>
.body-content-from {
  margin-left: 10%;
  margin-top: 5%;
}
.back-button :hover {
  color: rgb(22, 71, 205);
}
</style>
