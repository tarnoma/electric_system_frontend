<template>
  <div style="text-align: center">
    <h2 style="margin-bottom: 0px">Manage Technicians</h2>
  </div>
  <TechList />

  <!-- {{ JSON.stringify(getData) }} -->

  <div style="text-align: center">
    <h2 style="margin-bottom: 0px">Manage Device Types</h2>
  </div>
  <TypeList />

  <div style="text-align: center">
    <h2 style="margin-bottom: 0px">Manage Device Brands</h2>
  </div>
  <BrandList />
</template>

<script>
import TechList from "../components/TechList.vue";
import TypeList from "../components/TypeList.vue";
import BrandList from "../components/BrandList.vue";
export default {
  name: "AdminMng",
  components: { TechList, TypeList, BrandList },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
