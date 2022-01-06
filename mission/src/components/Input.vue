<template>
  <div id="input">
    <input v-model="message">
    <button @click="submit(message)" name="submit" type="button">제출</button>
    <button @click="alarm(message)" name="alarm" type="button">알림</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    submit(message) {
      return message;
    },
    alarm(message) {
      alert(message);
    },
  },
};

</script>
