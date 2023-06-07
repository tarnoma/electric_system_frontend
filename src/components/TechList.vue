<template>
  <div class="q-pa-md">
    <q-table title="Technicians" :rows="rows" :columns="columns" row-key="id">
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
                <q-form @submit="onSubmit(props.row.id ,props.row.fullname ,props.row.email ,props.row.username)" class="q-gutter-md">
                  <div>
                    <q-input
                      type="string"
                      v-model="props.row.fullname"
                      dense
                      autofocus
                      hint="Fullname"
                      lazy-rules
                      :rules="[
                        (val) => (val && val.length > 0) || 'Field is required',
                      ]"
                    />
                    <q-input
                      type="string"
                      v-model="props.row.email"
                      dense
                      autofocus
                      hint="Email"
                      lazy-rules
                      :rules="[emailValidate, requiredValidate]"
                    />
                    <q-input
                      type="string"
                      v-model="props.row.username"
                      dense
                      autofocus
                      hint="Username"
                      :rules="[
                        (val) => (val && val.length > 0) || 'Field is required',
                      ]"
                    />
                    <!-- <q-input
                      type="string"
                      v-model="props.row.password"
                      dense
                      autofocus
                      hint="Password"
                      :rules="[
                        (val) =>
                          (val && val.length >= 6) ||
                          'Must be at least 6 characters',
                      ]"
                    /> -->
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
    <div style="text-align: center; margin-top: 1rem">
      <q-btn
        color="blue-10"
        icon="person_add"
        label="ADD TECHNICIAN"
        href="/admin/addTech"
      />
    </div>
  </div>
</template>

<script>
import { emailValidate, requiredValidate } from "../util/validation";
import { techDBStore } from "../stores/techdb";
import { useLoginUserStore } from "../stores/loginUserStore";
import { Notify } from "quasar";

export default {
  name: "TechList",
  data() {
    return {
      techdb: techDBStore(),
      columns: [
        {
          name: "id",
          required: true,
          label: "Technician ID",
          align: "left",
          field: (row) => row.name,
          field: "id",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "fullname",
          align: "center",
          label: "Fullname",
          field: "fullname",
        },
        { name: "username", label: "Username", field: "username" },
        { name: "visibility", label: "Visibility", field: "visibility" },
        { name: "edit", label: "Edit", field: "edit" },
        { name: "delete", label: "Delete", field: "delete" },
      ],
      storeLogUser: useLoginUserStore(),
      rows: [],
      value: true,
      fullname: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    emailValidate,
    requiredValidate,
    onDelete(id) {
      this.$api
        .delete("/auth/tech/remove/" + id)
        .then((res) => {
          if (res.status == 200) {
            Notify.create({
              type: "positive",
              message: "Deleted technician ID: " + res.data.id,
            });
            this.getData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getData() {
      await this.$api
        .get("/auth/tech/getall")
        .then((res) => {
          if (res.status == 200) {
            this.rows = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleVis(id) {
      this.$api
        .post("/auth/tech/toggleVis/" + id)
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
    onSubmit(id, fullname, email, username) {
      const data = {
        fullname: fullname,
        email: email,
        username: username,
      };
      this.$api
        .put("/auth/tech/update/" + id, data)
        .then((res) => {
          if (res.status == 200) {
            Notify.create({
              type: "positive",
              message: "Updated technician ID: " + res.data.id,
            });
            this.getData();
          }
        })
        .catch((err) => {
          console.log(err);
          this.showDialog(err);
        });
    },
  },
  computed: {},
  async mounted() {
    await this.getData();
  },
};
</script>

<style></style>
