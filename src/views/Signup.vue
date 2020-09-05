<template>
  <div style="justify: center">
    <div class="row">
      <div class="col-3-md" />
      <div class="col">
        <div class="card cardycard row is-center">
          <h2
            class="col-12"
            style="font-weight:bold; padding-bottom:1em; padding-top:1em;"
          >
            Sign up
          </h2>
          <div class="col-12">
            <label for="login">Email</label>
            <input name="login" v-model="email" />
          </div>
          <div class="col-12">
            <label for="password">Password</label>
            <input name="password" type="password" v-model="password" />
          </div>
          <div class="col-12">
            <label for="userid">User Id</label>
            <input name="userid" v-model="userid" />
          </div>
          <div class="col-12">
            <a class="button primary" @click.stop="register">Sign up</a>
          </div>
        </div>
      </div>
      <div class="col-3-md" />
    </div>
  </div>
</template>

<script>
import { db } from "../db";
import firebase from "firebase";

import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      userid: "",
      login: {},
    };
  },

  methods: {
    ...mapMutations(["setUser"]),
    async register() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        await user.user.updateProfile({
          displayName: this.userid,
        });
        console.log("user: ", user);

        this.setUser({
          email: user.user.email,
          name: user.user.displayName,
          uid: user.user.uid,
          refreshToken: user.user.refreshToken,
          displayName: user.user.displayName,
        });

        this.$toast.success("Signed up!");
        this.$router.push("/tweets");
      } catch (e) {
        console.error(e);
        this.$toast.error(e.message);
      }
    },
  },
};
</script>
