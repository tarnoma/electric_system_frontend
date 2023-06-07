<template>
  <q-page>
    <div style="text-align: center">
      <h1>Make a Request</h1>
    </div>
    <UserForm />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { emailValidate, requiredValidate } from "../util/validation";
import { DeviceStore } from "../stores/DeviceStore";
import { BrandStore } from "../stores/BrandStore";
import { userDBStore } from "../stores/Userdb";
import { techDBStore } from "../stores/techdb";
import { useLoginUserStore } from "../stores/loginUserStore.js";
import UserForm from "../components/UserForm.vue";

export default defineComponent({
  name: "HomePage",
  components: { UserForm },
  data() {
    return {
      fullname: "",
      email: "",
      details: "",
      isShowIcon: true,
      deviceStore: DeviceStore(),
      deviceName: "",
      brandStore: BrandStore(),
      deviceBrand: "",
      userdb: userDBStore(),
      techdb: techDBStore(),
      date: "",
    };
  },
  methods: {
    emailValidate,
    requiredValidate,
    // onSubmit() {
    //     const data = {
    //       fullname: this.fullname,
    //       email: this.email,
    //       details: this.details,
    //     };
    //   this.RequestStore.fullname = this.fullname;
    //   this.RequestStore.email = this.email;
    //   this.RequestStore.details = this.details;
    // },
  },
  computed: {
    getDevices() {
      const options = [];
      this.deviceStore.allDevice.forEach((element) => {
        if (element.visibility) {
          options.push(element.name);
        }
      });
      return options;
    },
    getBrands() {
      const options = [];
      this.brandStore.allBrand.forEach((element) => {
        if (element.visibility) {
          options.push(element.name);
        }
      });
      return options;
    },
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
});
</script>
