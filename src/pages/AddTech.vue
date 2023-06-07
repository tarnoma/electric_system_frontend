<template>
  <q-page>
    <div style="text-align: center">
      <h1>Add a Technician</h1>
    </div>
    <div class="flex justify-center">
      <q-card class="my-card bg-grey-1 q-px-md q-py-md" style="width: 40rem">
        <div class="flex flex-center">
          <q-icon name="construction" color="grey-6" size="4rem" />
        </div>
        <q-card-section>
          <q-form
            @submit.prevent="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <div>
              <q-input
                v-model="fullname"
                type="text"
                label="Technician's Fullname"
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
                label="Technician's Email"
                lazy-rules
                :rules="[emailValidate, requiredValidate]"
              />
            </div>
            <div>
              <q-input
                v-model="username"
                type="text"
                label="Technician's username"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required',
                ]"
                style="margin-bottom: 0.9em"
              />
              <text-caption
                style="font-size: 0.9em"
                v-if="usernameCaption.show"
                :class="[
                  usernameCaption.showClass ? 'text-positive' : 'text-negative',
                ]"
              >
                <q-icon :name="usernameCaption.icon" size="1.5em" />
                {{ usernameCaption.msg }}
              </text-caption>
            </div>
            <div>
              <q-input
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="Technician's Password"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length >= 6) || 'Must be at least 6 characters',
                ]"
              >
                <template #append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div>
              <q-btn label="Submit" type="submit" color="blue-10" />
              <q-btn
                label="Reset"
                type="reset"
                color="blue-10"
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
import { emailValidate, requiredValidate } from "../util/validation";
import { techDBStore } from "../stores/techdb";
export default {
  name: "RegisterPage",
  data() {
    return {
      fullname: "",
      email: "",
      username: "",
      password: "",
      isPwd: true,
      usernameCaption: {
        show: false,
        showClass: false,
        icon: null,
        msg: null,
      },
      dialog: {
        icon: "",
        msg: "",
        btnType: "",
        iconColor: "",
      },
      techdb: techDBStore(), // need change
    };
  },
  methods: {
    emailValidate,
    requiredValidate,
    resetUserCaption() {
      this.usernameCaption.show = false;
      this.usernameCaption.showClass = false;
      this.usernameCaption.icon = null;
      this.usernameCaption.msg = null;
    },
    onSubmit() {
      if(!this.usernameCaption.showClass){
        Notify.create({
        type: "negative",
        message: "Username is already taken",
      });
      return;
      }
      const data = {
        fullname: this.fullname,
        email: this.email,
        username: this.username,
        password: this.password,
      };
      this.$api
        .post("/auth/tech/signup", data)
        .then((res) => {
          if (res.status == 200) {
            console.log(res)
          }
        })
        .catch((err) => {
          console.log(err);
        });
        this.$router.push('/admin/mng')
    },
    onReset() {
      this.fullname = null;
      this.email = null;
      this.username = null;
      this.password = null;
      this.isPwd = true;
      this.resetUserCaption();
    },
    usernameValidate() {
      if (this.username) {
        this.$api
          .get("/auth/" + this.username)
          .then((response) => {
            // console.log(response.data)
            if (response.data.valid) {
              this.usernameCaption.show = true;
              this.usernameCaption.showClass = true;
              this.usernameCaption.icon = "check_circle_outline";
              this.usernameCaption.msg = "This username is Available.";
            } else {
              this.usernameCaption.show = true;
              this.usernameCaption.showClass = false;
              this.usernameCaption.icon = "highlight_off";
              this.usernameCaption.msg = "This username is NOT Available.";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.resetUserCaption();
      }
    },
  },
  watch: {
    username() {
      this.usernameValidate();
    },
  },
};
</script>

<style></style>
