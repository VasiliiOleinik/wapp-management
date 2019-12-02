
<template>
  <span class="title">Hi, {{ username }}!</span>
</template>
<script>
export default {
  name: 'Greeting',
  props: {
    username: String,
  },
};
</script>
