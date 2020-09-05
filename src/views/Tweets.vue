<template>
  <div class="container">
    <h1 style="font-weight:bold;">Tweets</h1>
    <div class="row is-center">
      <div class="col-10 col-8-md">
        <form
          class="row is-right"
          @submit.prevent="postTweet()"
          v-if="user.uid"
        >
          <input
            name="tweetin"
            v-model="tweetin"
            placeholder="What's happening?"
            class="col-12"
          />
          <div class="col-2">
            <a
              class="button primary outline"
              type="submit"
              @click.prevent="postTweet()"
            >
              Tweet
            </a>
          </div>
        </form>
      </div>

      <div
        class="card tweetcard col-10 col-8-md"
        v-for="(tweet, index) in tweets"
      >
        <div class="row">
          <div class="col-6 is-left">@{{ tweet.uname }}</div>
          <div class="col-6 is-right" style="color: grey; font-size: 80%">
            {{ tweet.createdAt ? new Date(tweet.createdAt).toUTCString() : "" }}
          </div>
          <div class="col-12 is-left">
            {{ tweet.message }}
          </div>
          <div class="col-12 is-right">
            <a
              class="button icon clear"
              @click="deleteTweet(tweet.id)"
              v-if="tweet.uid == user.uid"
            >
              <img
                src="https://icongr.am/feather/trash-2.svg?size=16&amp;color=amber"
                alt="del"
              />
            </a>
            <a class="button icon clear" @click="postTweet(tweet.message)">
              <img
                src="https://icongr.am/feather/refresh-ccw.svg?size=16&amp;color=#e1e1e1"
                alt="rt"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

import { mapState } from "vuex";

export default {
  data() {
    return {
      tweets: [],
      tweetin: "",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {},
  methods: {
    async postTweet(twt) {
      await db.collection("tweets").add({
        message: `${twt ? twt : this.tweetin}`,
        uid: this.user.uid,
        uname: this.user.displayName,
        createdAt: Date.now(),
      });
      if (!twt) this.tweetin = "";
    },
    async deleteTweet(id) {
      try {
        const rec = await db
          .collection("tweets")
          .doc(id)
          .delete();
      } catch (e) {
        this.$toast.error(e.message);
      }
    },
  },
  firestore: {
    tweets: db.collection("tweets").orderBy("createdAt", "desc"),
  },
};
</script>
