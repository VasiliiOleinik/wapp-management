<template>
  <el-col :span="12" :offset="3" class="mt-30">
    <el-card class="box-card">
      <div class="about">
        <h1>Hi, Vue!</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt dolor facere
          quis sunt hic nihil assumenda odit beatae ut,
          cum earum dicta iure mollitia quo eos aspernatur
          qui! Iste, adipisci.
        </div>
        <el-form
          :model="logoutForm"
          status-icon
          :rules="rules"
          ref="logoutForm"
          label-width="120px"
          class="logoutForm"
          action="/logout"
          method="POST"
          style="display: none"
        >
          <el-form-item prop="token">
            <el-input type="hidden" name="_token" :value="token"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </el-col>
</template>
<script>
// import axios from 'axios';

export default {
  // computed: {
  //   token() {
  //     const token = document.head.querySelector('meta[name="csrf-token"]');
  //     return token.content;
  //   },
  // },
  methods: {
    logout() {
      document.getElementById('logout-form').submit();
    },
  },
};
</script>
