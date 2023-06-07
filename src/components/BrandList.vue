<template>
  <div class="q-pa-md">
    <q-table
      title="Brands"
      :rows="rows"
      :columns="columns"
      row-key="id"
      style="margin-bottom: 1rem"
    >
      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <div>
            <q-btn
              round
              color="blue-10"
              icon="delete"
              @click="onDelete(props.row.id)"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-visibility="props">
        <q-td :props="props">
          <div>
            <q-icon
              size="2rem"
              color="blue-10"
              :name="props.row.visibility ? 'visibility' : 'visibility_off'"
              class="cursor-pointer"
              @click="toggleVis(props.row.id)"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-edit="props">
        <q-td :props="props">
          <div>
            <q-btn round color="blue-10" icon="edit">
              <q-popup-edit title="Update Info" v-model="props.row.id">
                <q-form @submit="onSubmit(props.row.id ,props.row.brandName)" class="q-gutter-md">
                  <div>
                    <q-input
                      type="string"
                      v-model="props.row.brandName"
                      dense
                      autofocus
                      hint="Brand name"
                      lazy-rules
                      :rules="[
                        (val) => (val && val.length > 0) || 'Field is required',
                      ]"
                    />
                  </div>
                  <div style="text-align: center">
                    <q-btn label="Submit" type="submit" color="primary" />
                  </div>
                </q-form>
              </q-popup-edit>
            </q-btn>
          </div>
        </q-td>
      </template>
    </q-table>
    <q-form
      @submit="createOnSubmit"
      @reset="onReset"
      class="q-gutter-md flex flex-center"
      ref = "brandForm"
    >
      <q-input filled v-model="brandName" label="Brand Name" />
      <div>
        <q-btn
          icon="factory"
          label="Add new Brand"
          type="submit"
          color="blue-10"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="blue-10"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { BrandStore } from "../stores/BrandStore";
import { Notify } from "quasar";

export default {
  name: "TechList",
  data() {
    return {
      branddb: BrandStore(),
      columns: [
        {
          name: "id",
          required: true,
          label: "Device ID",
          align: "left",
          field: (row) => row.name,
          field: "id",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "brandName",
          align: "center",
          label: "Name",
          field: "brandName",
        },
        { name: "visibility", label: "Visibility", field: "visibility" },
        { name: "edit", label: "Edit", field: "edit" },
        { name: "delete", label: "Delete", field: "delete" },
      ],
      brandName: "",
      rows: []
    };
  },
  methods: {
     onDelete(id) {
      this.$api
        .delete("/auth/brand/remove/" + id)
        .then((res) => {
          if (res.status == 200) {
            Notify.create({
              type: "positive",
              message: "Deleted brand ID: " + res.data.id,
            });
            this.getData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createOnSubmit() {
      const data = {
        brandName: this.brandName,
      };
      this.$api
        .post("/auth/brand/create", data)
        .then((res) => {
          if (res.status == 200) {
            console.log(res)
            this.getData()
          }
        })
        .catch((err) => {
          console.log(err);
        });
        this.$refs.brandForm.reset()
        
    },
    onSubmit(id, name){
      const data = {brandName : name}
      this.$api
        .put("/auth/brand/update/" + id, data)
        .then((res) => {
          if (res.status == 200) {
            Notify.create({
              type: "positive",
              message: "Updated brand ID: " + res.data.id,
            });
            this.getData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onReset() {
      this.brandName = "";
    },
     getData() {
      this.$api
        .get("/auth/brand/getall")
        .then((res) => {
          if (res.status == 200) {
            this.rows = res.data;
          }
          // console.log(JSON.stringify(this.rows))
        })
        .catch((err) => {
          Notify.create({
            type: "negative",
            message: "Unauthorized",
          });
          this.storeLogUser.clearStorage();
          this.$router.push("/");
        });
    },
    toggleVis(id){
      this.$api
        .post("/auth/brand/toggleVis/" + id)
        .then((res) => {
          if (res.status == 200) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
        this.getData();
      
    },
  },
  computed: {
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style></style>
