<template>
  <el-col :span="15" :offset="2" class="mt-30">
    <el-card class="box-card">
      <div class="about">
        <Greeting :username="loginUser.username" />
        <UserTable />
      </div>
    </el-card>
  </el-col>
</template>
<script>
import HTTP from '@/services/service';
import Greeting from '@/components/Greeting.vue';
import UserTable from '@/components/Dashboard/UserTable.vue';

export default {
  computed: {
    loginUser() {
      return this.$store.getters.loginUser;
    },
  },
  components: {
    Greeting, UserTable,
  },
  created() {
    // const { id } = this.$store.getters.loginUser;
    // console.log(`ID: ${id}`);
    HTTP.get(`people/${4}`)
      .then((response) => {
        this.people = response.data;
        console.log(this.people.name);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
