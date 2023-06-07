<template>
  <q-page>
    <div style="text-align: center">
      <h1>Welcomeee</h1>
    </div>
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
              <q-input
                v-model="fullname"
                type="text"
                label="Your Fullname"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required',
                ]"
              />
            </div>
            <div>
              <q-input
                v-model="email"
                type="text"
                label="Your Email"
                lazy-rules
                :rules="[emailValidate, requiredValidate]"
              />
            </div>

            <q-select
              v-model="deviceName"
              :options="getDevices"
              label="Device Name"
            />
            <q-select
              v-model="deviceBrand"
              :options="getBrands"
              label="Device Brand"
            />
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

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      fullname: "",
      email: "",
      deviceStore: DeviceStore(),
      deviceName: "",
      brandStore: BrandStore(),
      deviceBrand: "",
    };
  },
  methods: {
    emailValidate,
    requiredValidate,
    onSubmit() {},
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
  },
});
</script>
