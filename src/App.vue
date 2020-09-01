<template>
  <div id="app">
    <nav id="nav">
      <div class="nav-left">
        <a class="brand">Fwtr</a>
      </div>
      <div class="nav-right">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/tweets-my">My Tweets</router-link>
        <router-link to="/tweets">World</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

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
</style>
