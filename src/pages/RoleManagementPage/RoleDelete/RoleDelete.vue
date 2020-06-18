<template>
  <v-card>
    <v-card-title class="secondary--text" v-t="'role.deleteTitle'"></v-card-title>
    <v-card-text v-show="successMessage == true" class="ma-0">
      <v-alert :value="true" color="success" class="ma-0" icon="check_circle" outlined>Exitoso</v-alert>
    </v-card-text>

    <v-card-text v-show="errorMessage == true" class="ma-0">
      <v-alert :value="true" color="error" class="ma-0" icon="check_circle" outlined>Error</v-alert>
    </v-card-text>

    <v-card-text v-show="successMessage != true && errorMessage != true">
      <label>{{$t('common.areYouSureDeleteRecord')}}</label>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn outlined color="grey" @click="closeConfirm" v-t="'common.close'"></v-btn>
      <v-btn color="secondary" @click="removeRole" :disabled="!validate" v-t="'common.delete'"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import RoleProvider from "../../../providers/RoleProvider";

export default {
  name: "ConfirmDelete",
  data: () => ({
    validate:true,
    successMessage: false,
    errorMessage: false
  }),
  props: {
    roleId: String
  },
  methods: {
    removeRole() {
      if (this.roleId) {
        RoleProvider.roleDelete(this.roleId)
          .then(result => {
            if (result.data.roleDelete.success) {
              this.validate = false;
              this.successMessage = true;
              this.$emit("itemDelete", result.data.roleDelete.id);
            } else {
              this.errorMessage = true;
            }
          })
          .catch(err => {
            this.errorMessage = err.message;
          });
      }
    },
    closeConfirm() {
      this.successMessage = false;
      this.errorMessage = false;
      this.validate = true;
      this.$emit("closeDialog");
    }
  }
};
</script>

<style scoped>
</style>
