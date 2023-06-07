<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-blue-10">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Electronic Device Repair System </q-toolbar-title>

        <q-icon name="construction" size="2rem" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item-label header> Essential Links </q-item-label>
          <div v-if="notRegis">
            <EssentialLink
              v-for="link in unregisessentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </div>
          <div v-else-if="isUser">
            <EssentialLink
              v-for="link in useressentialLinks"
              :key="link.title"
              v-bind="link"
              :user="isUser"
              :tech="isTech"
              :admin="isAdmin"
            />
          </div>
          <div v-else-if="isTech">
            <EssentialLink
              v-for="link in techessentialLinks"
              :key="link.title"
              v-bind="link"
              :user="isUser"
              :tech="isTech"
              :admin="isAdmin"
            />
          </div>
          <div v-else-if="isAdmin">
            <EssentialLink
              v-for="link in adminessentialLinks"
              :key="link.title"
              v-bind="link"
              :user="isUser"
              :tech="isTech"
              :admin="isAdmin"
            />
          </div>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-blue-creative-gradient-decoration-image_11175.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="getIcon" />
          </q-avatar>
          <div class="text-weight-bold">Welcome {{ getUsername }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { userDBStore } from "../stores/Userdb";
import { techDBStore } from "../stores/techdb";
import { adminStore } from "../stores/AdminStore";
import { useLoginUserStore } from "../stores/loginUserStore.js";


const unregislinksList = [
  // {
  //   title: "Request",
  //   caption: "Fill in your request form",
  //   icon: "description",
  //   link: "/request",
  // },
  {
    title: "Register",
    caption: "Register to track your request",
    icon: "app_registration",
    link: "/register",
  },
  {
    title: "User Login",
    caption: "Login to the system",
    icon: "login",
    link: "/",
  },
  {
    title: "Tech Login",
    caption: "Login to the system",
    icon: "bolt",
    link: "/tech/login",
  },
  {
    title: "Admin Login",
    caption: "Login to the system",
    icon: "admin_panel_settings",
    link: "/admin/login",
  },
];

const userlinksList = [
  {
    title: "Request",
    caption: "Fill in your request form",
    icon: "description",
    link: "/user/request",
  },
  {
    title: "Check Status",
    caption: "Check your status",
    icon: "app_registration",
    link: "/user/status",
  },
  {
    title: "Logout",
    caption: "Login to the system",
    icon: "logout",
    link: "/",
  },
];

const techlinksList = [
  {
    title: "Dashboard",
    caption: "Your Dashboard",
    icon: "description",
    link: "/tech",
  },
  {
    title: "Manage Request",
    caption: "Manage your requests",
    icon: "app_registration",
    link: "/tech/mng",
  },
  {
    title: "Logout",
    caption: "Login to the system",
    icon: "logout",
    link: "/",
  },
];

const adminlinksList = [
  {
    title: "Dashboard",
    caption: "Your Dashboard",
    icon: "description",
    link: "/admin",
  },
  {
    title: "Manage Tech/Device",
    caption: "Manage your Tech/Device",
    icon: "construction",
    link: "/admin/mng",
  },
  {
    title: "Manage Request",
    caption: "Manage your requests",
    icon: "app_registration",
    link: "/admin/request",
  },
  {
    title: "Logout",
    caption: "Login to the system",
    icon: "logout",
    link: "/",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      unregisessentialLinks: unregislinksList,
      useressentialLinks: userlinksList,
      techessentialLinks: techlinksList,
      adminessentialLinks: adminlinksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      userName: "Annonymous",

      userdb: userDBStore(),
      techdb: techDBStore(),
      admin: adminStore(),
      storeLogUser: useLoginUserStore(),
    };
  },
  methods: {
    adminLogout() {
      admin.alladmin[0].isLogin = false;
    },
  },
  computed: {
    notRegis() {
      let isnotRegis = false;
      if (!this.isAdmin && !this.isUser && !this.isTech) {
        isnotRegis = true;
      }
      return isnotRegis;
    },
    isUser() {
      let isUser = false;
      // this.userdb.alluser.forEach((element) => {
      //   if (element.isLogin == true) {
      //     isUser = true;
      //   }
      // });
      if(this.storeLogUser.getUserType == 'user') isUser = true
      
      
      return isUser;
    },
    isTech() {
      let isTech = false;
      if(this.storeLogUser.getUserType == 'technician') isTech = true
      return isTech;
    },
    isAdmin() {
      let isAdmin = false;
      if(this.storeLogUser.getUserType == 'admin') isAdmin = true
      return isAdmin;
    },
    getUsername() {
      let name = "Annonymous";
      if (this.isAdmin) {
        name = "admin";
      } else if (this.isUser) {
        name = this.storeLogUser.fullname
      } else if (this.isTech) {
        name = this.storeLogUser.fullname
      }
      return name;
    },
    getIcon() {
      let icon = "https://cdn-icons-png.flaticon.com/512/848/848006.png";
      if (this.isAdmin) {
        icon = "https://cdn-icons-png.flaticon.com/512/6024/6024190.png";
      } else if (this.isTech) {
        icon = "https://cdn-icons-png.flaticon.com/512/1154/1154992.png";
      }
      return icon;
    },
  },
});
</script>
