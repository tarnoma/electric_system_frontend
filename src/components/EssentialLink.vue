<template>
  <div v-if="title != 'Logout'">
    <q-item clickable tag="a" target="_self" :href="link">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
  <div v-else>
    <q-item tag="a" target="_self" :href="link">
      <q-item-section v-if="icon" avatar>
        <q-btn color="primary" icon="logout" @click="onClick" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { userDBStore } from "../stores/Userdb";
import { techDBStore } from "../stores/techdb";
import { adminStore } from "../stores/AdminStore";
import { useLoginUserStore } from "../stores/loginUserStore.js";


export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    user: {
      type: Boolean,
    },
    tech: {
      type: Boolean,
    },
    admin: {
      type: Boolean,
    },
  },
  data() {
    return {
      userdb: userDBStore(),
      techdb: techDBStore(),
      admindb: adminStore(),
      storeLogUser: useLoginUserStore(),
    };
  },
  methods: {
    onClick() {
      // if (this.admin) {
      //   this.admindb.alladmin[0].isLogin = false;
      // } else if (this.user) {
      //   this.userdb.alluser.forEach((element) => {
      //     if (element.isLogin == true) {
      //       element.isLogin = false;
      //     }
      //   });
      // } else if (this.tech) {
      //   this.techdb.alltech.forEach((element) => {
      //     if (element.isLogin == true) {
      //       element.isLogin = false;
      //     }
      //   });
      // }
      this.storeLogUser.clearStorage();
    },
  },
});
</script>
