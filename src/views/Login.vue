<template>
  <div style="justify: center">
    <div class="row">
      <div class="col-3-md" />
      <div class="col">
        <div class="card cardycard row is-center" v-if="!user.uid">
          <h2
            class="col-12"
            style="font-weight:bold; padding-bottom:1em; padding-top:1em;"
          >
            Login
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
            <a class="button primary" @click.stop="doLogin">Login</a>
          </div>
        </div>

        <div class="card cardycard row is-center" v-else>
          <div class="col-12">
            You are already logged in!
          </div>
          <div class="col-12">
            <a class="button primary" @click.stop="doLogout">Logout</a>
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

import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      login: {},
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapMutations(["setUser"]),
    async doLogout() {
      this.setUser({});
      await firebase.auth().signOut();
    },
    async doLogin() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        this.setUser({
          email: user.email,
          name: user.displayName,
          uid: user.uid,
          refreshToken: user.refreshToken,
          displayName: user.displayName,
        });
        this.$toast.success("Logged in!");
        this.$router.push("/tweets");
      } catch (e) {
        this.$toast.error(e.message);
        console.error(e);
      }
    },
  },
};
</script>
