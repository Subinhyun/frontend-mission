<template>
  <div id="input">
    <input v-model="message">
    <button @click="submit" name="submit" type="button">제출</button>
    <button @click="alarm" name="alarm" type="button">알림</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      message: '',
      count: 0,
    };
  },
  methods: {
    submit() {
      const n = this.message.length;
      this.message = this.message.slice(1, n) + this.message.slice(0, 1);
    },
    alarm() {
      this.count += 1;
      // eslint-disable-next-line
      alert(`${this.message} ${this.count}`);
    },
  },
};

</script>
