<template>
  <div id="app">
    <div class="clock">
      <Digits :value="hour" :basis="24" label="H" />:
      <Digits :value="minute" :basis="60" label="M" :percentMode="true" />:
      <Digits :value="second" :basis="60" label="S" :percentMode="true" />
    </div>
  </div>
</template>

<script>
import Digits from "./components/Digits.vue";

export default {
  name: "App",
  components: { Digits },
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
  font-family: "Roboto Mono", monospace;

  display: flex;
  justify-content: center;
}

@media (max-width: 40.0rem) {
  .clock {
    font-size: 4em;
  }
}

@media screen and (min-width: 40.0rem) and (max-width: 60.0rem) {
  .clock {
    font-size: 7em;
  }
}
</style>
