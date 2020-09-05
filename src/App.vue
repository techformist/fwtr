<template>
  <div id="app">
    <nav id="nav">
      <div class="nav-left">
        <a class="brand">Fwtr</a>
      </div>
      <div class="nav-right">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/tweets" v-if="user.uid">Tweets</router-link>
        <router-link to="/signup" v-else>Signup</router-link>
        <router-link to="/login">User</router-link>
        <router-link to="/about">?</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 1em;
  padding-right: 1em;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  padding-left: 2em;
  padding-right: 2em;
}

.cardycard {
  margin: 2% 10% 2% 10%;
  padding: 3% 3% 3% 3%;
}

.tweetcard {
  padding: 10px 10px 2px 10px;
}

input {
  margin-bottom: 20px;
}

label {
  margin-top: 20px;
  color: grey;
}
</style>
