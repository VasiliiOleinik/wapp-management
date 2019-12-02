<template>
  <el-col :span="12" :offset="3" class="mt-30">
    <LoginGreeting :username="loginUser.username" v-if="loginUser.isLogin" />
    <LoginForm v-else />
  </el-col>
</template>
<script>
import LoginGreeting from '@/components/Auth/Login/LoginGreeting.vue';
import LoginForm from '@/components/Auth/Login/LoginForm.vue';

export default {
  computed: {
    loginUser() {
      return this.$store.getters.loginUser;
    },
  },
  components: {
    LoginGreeting,
    LoginForm,
  },
};
</script>
<style>
.el-select {
  width: 100%;
}
</style>
