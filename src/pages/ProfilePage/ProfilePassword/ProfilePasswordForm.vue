<template>
  <v-card>
    <v-card-title class="secondary--text" v-t="'user.changePassword'"></v-card-title>

    <v-card-text>
      <v-form ref="form" autocomplete="off" v-model="valid" @submit.prevent="submit">
        <v-text-field
          id="current-password"
          prepend-icon="lock"
          name="current_password"
          :append-icon="showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showCurrentPassword ? 'text' : 'password'"
          @click:append="showCurrentPassword = !showCurrentPassword"
          v-model="form.currentPassword"
          :rules="validations.password"
          :label="$t('user.currentPassword')"
          :placeholder="$t('user.currentPassword')"
          autocomplete="current-password"
          :error="errors.currentPassword.length?true:false"
          :error-messages="getMessage"
          required
          color="secondary"
        />

        <v-text-field
          id="new-password"
          prepend-icon="lock"
          :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
          name="new_password"
          :type="showNewPassword ? 'text' : 'password'"
          @click:append="showNewPassword = !showNewPassword"
          v-model="form.newPassword"
          :rules="validations.password"
          :label="$t('user.newPassword')"
          :placeholder="$t('user.newPassword')"
          autocomplete="new-password"
          :error="errors.newPassword.length?true:false"
          required
          color="secondary"
        />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn outlined color="grey" @click="remove" v-t="'common.close'"></v-btn>

      <v-btn
        :loading="loading"
        color="secondary"
        @click="submit"
        v-t="'common.send'"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "ProfilePasswordForm",
  data: () => ({
    valid: true,
    showCurrentPassword: false,
    showNewPassword: false,
    form: {
      id: null,
      currentPassword: null,
      newPassword: null
    },
    errors: {
      currentPassword: [],
      newPassword: []
    },
    validations: {
      password: [v => !!v || "Contraseña es requerido"]
    }
  }),
  computed: {
    ...mapGetters(["me", "getUsersLoading", "getChangePassword", "getMessage"]),
    ...mapState({
      loading: s => s.profile.loadingUserProfile,
      status: s => s.profile.changePasswordStatus
    })
  },
  methods: {
    ...mapActions(["changePassword"]),

    resetValidation: function() {
      this.errors = {
        currentPassword: [],
        newPassword: []
      };
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.resetValidation();
        this.form.id = this.me.id;
        this.changePassword(this.form)
      }
    },
    remove() {
      this.$emit("close");
      this.$refs.form.reset();
      this.form.currentPassword = null;
      this.form.newPassword = null;
    }
  }
};
</script>

<style scoped>
</style>
