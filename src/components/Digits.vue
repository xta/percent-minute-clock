<template>
  <div class="digits">
    <span>{{ displayed }}</span>
    <div class="label">{{ displayLabel }}</div>
  </div>
</template>

<script>
export default {
  props: ["basis", "label", "percentMode", "value"],
  computed: {
    displayed: function() {
      if (this.percentMode) {
        return this.displayPercent(this.value);
      }
      return this.displayRegular(this.value);
    },
    displayLabel: function() {
      var l = this.label;
      if (this.percentMode) {
        l += "%";
      }
      return l;
    }
  },
  methods: {
    displayRegular(val) {
      var length = ("" + val).length;
      if (length == 1) {
        return "0" + val;
      }
      return val;
    },
    displayPercent(val) {
      var percentage = val / this.basis;
      var rounded = Math.round(percentage * 100);
      return this.displayRegular(rounded);
    }
  }
};
</script>

<style scoped>
.digits {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  position: relative;
  top: -1em;
  font-size: 0.6em;
}
</style>