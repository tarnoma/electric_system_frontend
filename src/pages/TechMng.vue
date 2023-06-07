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
      <template v-slot:body-cell-price="props">
        <q-td :props="props">
          <q-input
            v-model="props.row.price"
            type="number"
            label="Price Charged"
          >
            <template v-slot:after>
              <q-btn
                round
                dense
                flat
                icon="send"
                color="blue-10"
                @click="updatePrice(props.row.id, props.row.price)"
              />
            </template>
          </q-input>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { requestDBStore } from "../stores/RequestStore";
import { userDBStore } from "../stores/Userdb";
import { techDBStore } from "../stores/techdb";
import { useLoginUserStore } from "../stores/loginUserStore";
export default {
  name: "TechList",
  data() {
    return {
      requestdb: requestDBStore(),
      userdb: userDBStore(),
      techdb: techDBStore(),
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
        {
          name: "finishDate",
          align: "center",
          label: "Date Finished",
          field: "finishDate",
        },
        { name: "name", label: "Device Name", field: "name" },
        { name: "brandName", label: "Device Brand", field: "brandName" },
        { name: "price", label: "Price charged", field: "price" },
        { name: "status", label: "Status", field: "status" },
      ],
      rows: [],
      storeLogUser: useLoginUserStore(),
    };
  },
  methods: {
    updatePrice(requestId, price) {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${year}-${month}-${day}`;

      const data = {
        price: price,
        finishDate: currentDate
      }
      this.$api.put("/auth/request/finish/"+ requestId, data)
      .then((res)=>{
        if(res.status == 200){
          console.log(res)
          this.getData()
        }
      }) 
      .catch((err) => {
          console.log(err);
        });

    },
    getData() {
      this.$api.get("/auth/request/getTech/"+ this.storeLogUser.getUserId)
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
    getTechname() {
      let name = "";
      this.techdb.alltech.forEach((element) => {
        if (element.isLogin == true) {
          name = element.fullname;
        }
      });
      console.log(name);
      return name;
    },
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style></style>
