<template>
  <el-col :span="12" :offset="3" class="mt-30">
    <LoginGreeting v-bind:username="people.name" v-if="loginUser.isLogin" />
    <LoginForm v-else />
  </el-col>
</template>
<script>
import HTTP from '@/services/service';
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
  created() {
    const { id } = this.$store.getters.loginUser;
    HTTP.get(`people/${id}`)
      .then((response) => {
        this.people = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
.el-select {
  width: 100%;
}
</style>
