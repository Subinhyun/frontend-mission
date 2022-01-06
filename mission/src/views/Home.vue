<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Input/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Input,
  },
};

</script>
