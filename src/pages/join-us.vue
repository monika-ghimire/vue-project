

<template>

    <div >
         <div class="grid md:grid-cols-2">
            <div><OasisTitle/> </div>

            <div class="p-20 pb-0 pt-5">
                <div class="float-right pb-20"><p class="text-slate-400">
                    Already have an account?
                    <span class="text-blue-600 font-semibold cursor-pointer">Sign In</span> 
                  </p>
                </div>

                <section class="content-body mt-20 pb-0 p-10">
                    <h2 class="text-2xl font-semibold">Join Us!</h2>
                    <p class="text-slate-400 mt-4" >To begin this journey, tell us what type of account you’d be opening.</p>
                </section>

                <section class="p-10">
                    <div class="p-4 relative  hover:border border-blue-600 flex bg-blue-50 cursor-pointer">
                        <div class="p-1">
                            <img src="../assets/Polygon 1.png"  class=''/>
                            <img src="../assets/user.png" class="user-icon"/>
                        </div>

                        <div class="mt-2 ml-2">
                            <h3 class="font-semibold">Individual</h3>
                            <p class="text-slate-400 text-xs">Personal account to manage all you activities.</p>
                        </div>

                        <div class="mt-6 ml-20  " >
                            <router-link to="/stepForm"> <img src="../assets/UnionIcon.png"  /></router-link> 

                        </div>
                    </div>
                </section>


                <section class="p-10">
                    <div class="p-4 relative hover:border border-blue-600  flex  shadow-2xl cursor-pointer">
                        <div class="p-1">
                            <img src="../assets/Polygon 2.png"  class=''/>
                            <img src="../assets/briefcase.png" class="user-icon"/>
                        </div>

                        <div class="mt-2 ml-2">
                            <h3 class="font-semibold">Business</h3>
                            <p class="text-slate-400 text-xs">Own or belong to a company, this is for you.</p>
                        </div>

                        <!-- <div class="mt-6 ml-20">
                            <img src="../assets/UnionIcon.png"/>
                        </div> -->
                    </div>

                </section>

            </div>

         </div>
    </div>
    
</template>

<script>
import OasisTitle from '../components/oasis-title.vue';
 
 export default{
   components :{
   OasisTitle
 }
 }
</script>

<style scoped>
.user-icon{
    position: absolute;
    top: 39%;
    left: 8%;

}

</style>