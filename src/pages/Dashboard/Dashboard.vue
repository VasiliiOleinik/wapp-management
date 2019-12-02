<template>
  <el-col :span="12" :offset="3" class="mt-30">
    <el-card class="box-card">
      <div class="about">
       <Greeting :username="loginUser.username" />
      </div>
    </el-card>
  </el-col>
</template>
<script>
import Greeting from '@/components/Greeting.vue';

export default {
  computed: {
    loginUser() {
      return this.$store.getters.loginUser;
    },
  },
  components: {
    Greeting,
  },
};

</script>
