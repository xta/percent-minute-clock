<template>
  <div id="app">
    <div class="clock">{{ hour }} : {{ minute }} : {{ second }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      hour: "--",
      minute: "--",
      second: "--"
    };
  },
  mounted: function() {
    this.updateClock();
  },
  methods: {
    currentTime() {
      var now = new Date();
      var timestamp = {
        h: now.getHours(),
        m: now.getMinutes(),
        s: now.getSeconds()
      };
      return timestamp;
    },
    updateClock() {
      var now = this.currentTime();
      this.hour = now.h;
      this.minute = now.m;
      this.second = now.s;

      setTimeout(this.updateClock, 500);
    }
  }
};
</script>

<style>
.clock {
  font-size: 10em;
  font-family: monospace;
}
</style>
