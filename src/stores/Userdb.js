import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const userDBStore = defineStore("userDB", {
  state: () => ({
    alluser: [
      {
        id: useStorage("user1id", "1"),
        fullname: useStorage("user1fullname", "Shunya"),
        email: useStorage("user1email", "s@g.com"),
        username: useStorage("user1username", "shun"),
        userType: useStorage("user1userType", "user"),
        password: useStorage("user1password", "123456"),
        accessToken: useStorage("user1accessToken", ""),
        available: useStorage("user1value", false),
        isLogin: useStorage("user1isLogin", false),
      },
      {
        id: useStorage("user2id", "2"),
        fullname: useStorage("user2fullname", "Yasu"),
        email: useStorage("user2email", "y@g.com"),
        username: useStorage("user2username", "kasu"),
        userType: useStorage("user2userType", "user"),
        password: useStorage("user2password", "123456"),
        accessToken: useStorage("user2accessToken", ""),
        available: useStorage("user2value", false),
        isLogin: useStorage("user2isLogin", false),
      },
      {
        id: useStorage("user3id", "3"),
        fullname: useStorage("user3fullname", "Vipop"),
        email: useStorage("user3email", "v@g.com"),
        username: useStorage("user3username", "Op"),
        userType: useStorage("user3userType", "user"),
        password: useStorage("user3password", "123456"),
        accessToken: useStorage("user3accessToken", ""),
        available: useStorage("user3value", false),
        isLogin: useStorage("user3isLogin", false),
      },
      {
        id: useStorage("user4id", "4"),
        fullname: useStorage("user4fullname", "Phubodee"),
        email: useStorage("user4email", "p@g.com"),
        username: useStorage("user4username", "Phu"),
        userType: useStorage("user4userType", "user"),
        password: useStorage("user4password", "123456"),
        accessToken: useStorage("user4accessToken", ""),
        available: useStorage("user4value", false),
        isLogin: useStorage("user4isLogin", false),
      },
      {
        id: useStorage("user5id", "5"),
        fullname: useStorage("user5fullname", ""),
        email: useStorage("user5email", ""),
        username: useStorage("user5username", ""),
        userType: useStorage("user5userType", ""),
        password: useStorage("user5password", ""),
        accessToken: useStorage("user5accessToken", ""),
        available: useStorage("user5value", true),
        isLogin: useStorage("user5isLogin", false),
      },
    ],
  }),
  getters: {},
  actions: {},
});
