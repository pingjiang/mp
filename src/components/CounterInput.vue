<template>
<div class="counter-input">
  <input :value="value" @input="handleChange" type="text">
  <span class="counter-count" :class="{ 'counter-exceed': count > maxlength }">
    {{ count }} / {{ maxlength }}
  </span>
</div>
</template>

<script>
export default {
  name: 'CounterInput',
  props: {
    value: String,
    maxlength: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      count: this.value ? this.value.length : 0,
    };
  },
  methods: {
    handleChange(e) {
      const { value } = e.target;
      this.count = value ? value.length : 0;
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
.counter-input {
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    padding: 4px 8px;
    flex: 1 1 auto;
    border: none;

    &:focus {
      outline: none;
    }
  }
}

.counter-count {
  width: 5em;
  padding: 0 5px;
}
</style>
