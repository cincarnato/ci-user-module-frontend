<template>
  <v-card>
    <v-toolbar flat dark color="primary">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon dark @click="$emit('closeDialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card-text class="pt-3">
      <v-alert v-if="errorMessage" type="error" dense text>{{errorMessage}}</v-alert>
    </v-card-text>

    <v-card-text>
      <v-form ref="form" autocomplete="off" @submit.prevent="save">
        <v-col cols="12" sm="6">
          <v-text-field
            prepend-icon="account_box"
            name="name"
            type="text"
            v-model="form.name"
            :label="$t('roles.label.name')"
            :placeholder="$t('roles.label.name')"
            class="pa-3"
            :rules="[rules.required]"
            :error="hasErrors('name')"
            :error-messages="getMessageErrors('name')"
            required
          ></v-text-field>
        </v-col>
        <v-row>
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="6" sm="6" v-for="permission in permissions" :key="permission">
                <v-checkbox
                  v-model="form.permissions"
                  :label="$t('roles.permissions.'+permission)"
                  :value="permission"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn tile outlined color="grey" @click="$emit('closeDialog')">Cerrar</v-btn>

      <v-spacer></v-spacer>

      <v-btn color="secondary" class="onSecondary--text" @click="save" :loading="loading">Crear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import RoleProvider from "../../providers/RoleProvider";
import ClientError from "../../errors/ClientError";
import UserProvider from "../../providers/UserProvider";


export default {
  name: "RoleCreate",
  data() {
    return {
      modal: false,
      title: this.$t("roles.createTitle"),
      errorMessage: "",
      inputErrors: {},
      loading: false,
      loadingUsers: false,
      users: [],
      permissionsSelected: [],
      form: {
        name: "",
        permissions: []
      },
      rules: {
        required: value => !!value || "Requerido",
        hexcode: [
          v =>
            /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v) || "hexcode invalid "
        ]
      }
    };
  },
  props: {
    permissions: Array
  },
  created() {
    this.loadingUsers = true;
    UserProvider.users()
      .then(r => {
        this.users = r.data.users;
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => (this.loadingUsers = false));
  },
  computed: {
    hasErrors() {
      return field => this.inputErrors[field] != undefined;
    },
    getMessageErrors() {
      return field => {
        if (this.inputErrors[field] != undefined) {
          let message = this.inputErrors[field].message;
          return [message];
        }
        return [];
      };
    }
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        RoleProvider.createRole(this.form)
          .then(r => {
            if (r) {
              this.$emit("createRole", r.data.createRole);
              this.$emit("closeDialog");
            }
          })
          .catch(error => {
            let clientError = new ClientError(error);
            this.inputErrors = clientError.inputErrors;
            this.errorMessage = clientError.i18nMessage;
            //TODO check duplicate type error
            if (error.toString().indexOf("duplicate")) {
              this.inputErrors.duplicate = "duplicate";
              this.errorMessage = this.$t("roles.rolDuplicate");
            }
          });
      }
    }
  }
};
</script>

<style scoped>
</style>

