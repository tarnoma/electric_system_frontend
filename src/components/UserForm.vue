<template>
  <q-page>
    <div class="flex justify-center">
      <q-card class="my-card bg-grey-1 q-px-md q-py-md" style="width: 40rem">
        <div class="flex flex-center">
          <q-icon name="account_circle" color="grey-6" size="4rem" />
        </div>
        <q-card-section>
          <q-form
            @submit.prevent="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            ref="myRegisterForm"
          >
            <div>
              <q-select
                v-model="deviceName"
                :options="nameOptions"
                label="Device Name"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required',
                ]"
              />
            </div>
            <div>
              <q-select
                v-model="deviceBrand"
                :options="brandOptions"
                label="Device Brand"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required',
                ]"
              />
            </div>
            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { emailValidate, requiredValidate } from "../util/validation";
import { DeviceStore } from "../stores/DeviceStore";
import { BrandStore } from "../stores/BrandStore";
import { userDBStore } from "../stores/Userdb";
import { useLoginUserStore } from "../stores/loginUserStore";
// import { techDBStore } from "../stores/techdb";
import { requestDBStore } from "../stores/RequestStore";

import { Notify } from "quasar";


export default defineComponent({
  name: "HomePage",
  data() {
    return {
      isShowIcon: true,
      deviceStore: DeviceStore(),
      deviceName: "",
      brandStore: BrandStore(),
      deviceBrand: "",
      userdb: userDBStore(),
      // techdb: techDBStore(),
      requestdb: requestDBStore(),
      storeLogUser: useLoginUserStore(),
      deviceId: 0,
      brandId: 0,

      nameOptions: [],
      brandOptions: []
    };
  },
  methods: {
    emailValidate,
    requiredValidate,
    onReset() {
      this.deviceName = "";
      this.deviceBrand = "";
    },
    async onSubmit() {
      let userId = this.storeLogUser.userid;
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${year}-${month}-${day}`;

      await this.$api.get("/auth/device/getId/" + this.deviceName)
      .then((res)=>{
        
        if(res.status == 200){
          this.deviceId = res.data.id;
        }
      })
      .catch((err) => {
          console.log(err);
        });
      await this.$api.get("/auth/brand/getId/" + this.deviceBrand)
      .then((res)=>{
        if(res.status == 200){
          this.brandId = res.data.id;
        }
      })
      .catch((err) => {
          console.log(err);
        });
      
      const data = {
        user_id: userId,
        device_id: this.deviceId,
        brand_id: this.brandId,
        requestDate: currentDate
      }

      this.$api.post("/auth/request/create", data)
      .then((res)=>{
        if(res.status == 200){
          Notify.create({
            type: "positive",
            message: "Created request",
          });
          this.$router.push("/user/status")
        }
      }).catch((err)=>{
        console.log(err)
      })
      
    },
    getDevices() {
      if(this.storeLogUser.getAcessToken == ""){
        Notify.create({
            type: "negative",
            message: "Please login before using the system",
          });
          this.$router.push('/')
      }
      this.$api
        .get("/auth/device/getallVis")
        .then((res) => {
          if (res.status == 200) {
             res.data.forEach((key)=>{
              this.nameOptions.push(key.name)
             })
          }
          
        })
        .catch((err) => {
          Notify.create({
            type: "negative",
            message: "Unauthorized",
          });
          console.log(err)
          this.storeLogUser.clearStorage();
          this.$router.push("/");
        });
    },
    getBrands() {
      this.$api
        .get("/auth/brand/getallVis")
        .then((res) => {
          if (res.status == 200) {
            // console.log(res.data)
             res.data.forEach((key)=>{
              this.brandOptions.push(key.brandName)
             })
          }
          
        })
        .catch((err) => {
          Notify.create({
            type: "negative",
            message: "Unauthorized",
          });
          console.log(err)
          this.storeLogUser.clearStorage();
          this.$router.push("/");
        });
    },
  },
  computed: {
    
    getUsername() {
      let name = "";
      this.userdb.alluser.forEach((element) => {
        if (element.isLogin == true) {
          name = element.username;
        }
      });
      console.log(name);
      return name;
    },
  },
  async mounted() {
    await this.getDevices();
    await this.getBrands();
    // this.dataReady = true;
  },
});
</script>
