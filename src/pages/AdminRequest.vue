<template>
  <div style="text-align: center">
    <h2 style="margin-bottom: 0px">Manage Request</h2>
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
      <template v-slot:body-cell-technician="props">
        <q-td :props="props">
          <div>
            <q-btn round color="blue-10" icon="edit">
              <q-popup-edit
                title="Add Technician"
              >
                <q-select
                  v-model="selectedTech"
                  :options="technician"
                  label="Technician Name"
                >
                  <template v-slot:after>
                    <q-btn
                      round
                      dense
                      flat
                      icon="send"
                      color="blue-10"
                      @click="changeStatus(props.row.id,selectedTech)"
                    />
                  </template>
                </q-select>
              </q-popup-edit>
            </q-btn>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { requestDBStore } from "../stores/RequestStore";
import { userDBStore } from "../stores/Userdb";
import { techDBStore } from "../stores/techdb";
import { Notify } from "quasar";
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
          // format: (val) => ${val},
          sortable: true,
        },
        { name: "username", label: "User Name", field: "username" },
        {
          name: "requestDate",
          align: "center",
          label: "Request date",
          field: "requestDate",
        },
        { name: "name", label: "Device Name", field: "name" },
        { name: "brandName", label: "Device Brand", field: "brandName" },
        { name: "status", label: "Status", field: "status" },
        { name: "technician", label: "Technician", field: "technician" },
      ],
      rows:[],
      technician: [],
      selectedTech: "",
    };
  },
  methods: {
    changeStatus(requestId, techName) {
      console.log(requestId, techName);
      const data = {
        fullname: techName
      }
      this.$api
        .put("/auth/request/update/" + requestId, data)
        .then((res) => {
          if (res.status == 200) {
            Notify.create({
              type: "positive",
              message: "Added tech to request ID: " + requestId,
            });
            this.getData();
            this.selectedTech = ""
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getData() {
      this.$api.get("/auth/request/getAll/")
      .then((res)=>{
        if(res.status == 200){
          this.rows = res.data
        }
      }) 
      .catch((err) => {
          console.log(err);
        });
    },
     getTech() {
      this.$api
        .get("/auth/tech/getall")
        .then((res) => {
          if (res.status == 200) {
            res.data.forEach((key)=>{
              this.technician.push(key.fullname)
             })
             console.log(this.technician);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
  },
  async mounted() {
    await this.getData();
    await this.getTech();
  },
};
</script>

<style></style>
