<template>
  <q-page padding>
    <div style="text-align: center">
      <h2>Dashboard</h2>
    </div>
    <div class="flex justify-evenly" style="margin-bottom: 2rem">
      <q-card dark bordered class="bg-blue-10 my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">Total requests</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ totalRequest }}
          </h4>
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-blue-8 my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">Requests today</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ requestToday }}
          </h4>
        </q-card-section>
      </q-card>
    </div>
    <div class="flex justify-evenly">
      <q-card dark bordered class="bg-negative my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">Pending</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ pending }}
          </h4>
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-yellow-8 my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">In-process</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ inProcess }}
          </h4>
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-positive my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">Finished</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ finished }}
          </h4>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { techDBStore } from "../stores/techdb";
import { userDBStore } from "../stores/Userdb";
import { requestDBStore } from "../stores/RequestStore";
export default {
  name: "AdminDash",
  data() {
    return {
      techDB: techDBStore(),
      userdb: userDBStore(),
      requestdb: requestDBStore(),
      totalRequest: 0,
      requestToday: 0,
      pending: 0,
      inProcess: "",
      finished: ""
    };
  },
  methods: {
    async getData(){
      await this.$api.get("/auth/request/getAdDash/")
      .then((res)=>{
        if(res.status == 200){
          let data = [...res.data]
          this.totalRequest = data[0].totalRequest
          this.requestToday = data[0].requestToday
          this.pending = data[0].pending
          this.inProcess = data[0].in_process
          this.finished = data[0].finished
        }
      }) 
      .catch((err) => {
          console.log(err);
        });
    }
  },
  computed: {
    
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style></style>
