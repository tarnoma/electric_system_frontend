<template>
  <div style="text-align: center">
    <h2 style="margin-bottom: 0px">Check Status</h2>
  </div>
  <div class="q-pa-md">
    <q-table
      title="Request status"
      :rows="rows"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-btn
              v-if="props.row.status == 'Pending'"
              color="negative"
              label="pending"
              text-color="white"
            />
            <q-btn
              v-else-if="props.row.status == 'In-process'"
              color="yellow-8"
              label="in-process"
              text-color="white"
            />
            <q-btn
              v-if="props.row.status == 'Finished'"
              color="positive"
              label="finished"
              text-color="white"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { requestDBStore } from "../stores/RequestStore";
import { userDBStore } from "../stores/Userdb";
import { useLoginUserStore } from "../stores/loginUserStore";

export default {
  name: "TechList",
  data() {
    return {
      requestdb: requestDBStore(),
      userdb: userDBStore(),
      columns: [
        {
          name: "id",
          required: true,
          label: "Request ID",
          align: "left",
          field: (row) => row.name,
          field: "id",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "requestDate",
          align: "center",
          label: "Date",
          field: "requestDate",
        },
        { name: "name", label: "Device Name", field: "name" },
        { name: "brandName", label: "Device Brand", field: "brandName" },
        { name: "price", label: "Price charged", field: "price" },
        { name: "status", label: "Status", field: "status" },
      ],
      storeLogUser: useLoginUserStore(),
      rows: []
    };
  },
  methods: {
    
    async getData() {
      if(this.storeLogUser.getAcessToken == ""){
        Notify.create({
            type: "negative",
            message: "Please login before using the system",
          });
        this.$router.push('/')
      }
      await this.$api.get("/auth/request/get/" + this.storeLogUser.getUserId)
      .then((res)=>{
        if(res.status == 200){
          this.rows = res.data
        }
      }) 
      .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    // getData() {
    //   const row = [];
    //   this.requestdb.allrequest.forEach((element, index) => {
    //     if (!element.available && element.username == this.getUsername) {
    //       row.push({
    //         id: this.requestdb.allrequest[index].id,
    //         date: this.requestdb.allrequest[index].date,
    //         devicename: this.requestdb.allrequest[index].devicename,
    //         devicebrand: this.requestdb.allrequest[index].devicebrand,
    //         price: this.requestdb.allrequest[index].price,
    //         status: this.requestdb.allrequest[index].status,
    //       });
    //     }
    //   });
    //   return row;
    // },
    // getUsername() {
    //   let name = "";
    //   this.userdb.alluser.forEach((element) => {
    //     if (element.isLogin == true) {
    //       name = element.username;
    //     }
    //   });
    //   console.log(name);
    //   return name;
    // },
  },
  async mounted() {
    await this.getData();
    // this.dataReady = true;
  },
};
</script>

<style></style>
