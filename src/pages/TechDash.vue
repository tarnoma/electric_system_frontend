<template>
  <q-page padding>
    <div style="text-align: center">
      <h2>Dashboard</h2>
    </div>
    <div class="flex justify-evenly" style="margin-bottom: 2rem">
      <q-card dark bordered class="bg-blue-10 my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">Total In-process</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ totalInProcess }}
          </h4>
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-blue-8 my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">Total Finished</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ totalFinished }}
          </h4>
        </q-card-section>
      </q-card>
    </div>
    <div class="flex justify-evenly" style="margin-bottom: 2rem">
      <q-card dark bordered class="bg-blue-10 my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">In-process Today</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ todayInProcess }}
          </h4>
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-blue-8 my-card" style="width: 18rem">
        <q-card-section style="text-align: center">
          <div class="text-h4">Finished Today</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section style="text-align: center">
          <h4>
            {{ todayFinished }}
          </h4>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { requestDBStore } from "../stores/RequestStore";
import { techDBStore } from "../stores/techdb";
import { useLoginUserStore } from "../stores/loginUserStore";

export default {
  name: "TechDash",
  data() {
    return {
      requestdb: requestDBStore(),
      techdb: techDBStore(),
      totalInProcess: 0,
      totalFinished: 0,
      todayInProcess: 0,
      todayFinished: 0,
      storeLogUser: useLoginUserStore(),

    };
  },
  methods: {
    async getData(){
      await this.$api.get("/auth/request/getTechDash/" + this.storeLogUser.getUserId)
      .then((res)=>{
        if(res.status == 200){
          let data = [...res.data]
          this.totalInProcess = data[0].totalInProcess
          this.totalFinished = data[0].totalFinished
          this.todayInProcess = data[0].todayInProcess
          this.todayFinished = data[0].todayFinished
        }
      }) 
      .catch((err) => {
          console.log(err);
        });
    }
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style></style>
