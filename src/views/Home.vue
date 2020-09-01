<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img alt="fwtr hero" src="../assets/images/fwtr-hero.jpg" />
      </div>
      <div class="col">
        <h1
          class="is-center text-justify"
          style="font-weight:bold; padding-top:70px"
        >Surround yourself with banter!</h1>
        <p>Any time is right time for that tweet. Sign-up now and fwt away.</p>
        <a class="button primary" style="margin-top: 20px">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="css">
.container {
  padding-top: 3em;
}
</style>
