<template>
  <div class="digits" :class="{bordered: percentMode}">
    <span>{{ displayed }}</span>
    <div class="label">{{ displayLabel }}</div>
    <div v-if="percentMode" class="progress" :style="{width: percent+'%'}"></div>
  </div>
</template>

<script>
export default {
  props: ["basis", "label", "percentMode", "value"],
  data() {
    return {
      percent: 10
    };
  },
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
      this.percent = rounded;
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
  position: relative;
  z-index: 1;
  height: 2.3em;
  padding: 0.1em;
}

.label {
  position: relative;
  top: -1em;
  font-size: 0.6em;
}

.progress {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(181, 199, 211);
  z-index: -1;
}

.bordered {
  border-right: 1px solid #ddd;
}
</style>