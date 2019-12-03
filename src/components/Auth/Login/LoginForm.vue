<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="title">Login</span>
    </div>
    <el-form
      :model="accaunt"
      status-icon
      :rules="rules"
      ref="accaunt"
      label-width="120px"
      class="demo-ruleForm"
      aria-label="login"
      id="login_form"
      method="POST"
      action="/login"
    >
      <el-input type="hidden" name="_token"></el-input>
      <el-form-item label="Login" prop="username" v-model="accaunt.isLogin">
        <el-input type="text" v-model="accaunt.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="accaunt.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-row>
        <el-col-6>
          <el-button type="primary" @click="submitForm('accaunt')">Log in!</el-button>
        </el-col-6>
        <el-col-6 class="ml-4">
          <router-link to="/register">
            <el-button @click="resetForm('accaunt')">Register</el-button>
          </router-link>
        </el-col-6>
        <el-col-6 class="ml-4">
          <router-link to="/reset-pass" class="reset-link">Forgot password?</router-link>
        </el-col-6>
      </el-row>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else if (this.accaunt.checkPass !== '') {
        this.$refs.accaunt.validateField('checkPass');
      }
      callback();
      return false;
    };
    return {
      accaunt: {
        pass: '',
        username: '',
        isLogin: false,
      },
      rules: {
        pass: [
          {
            required: true,
            validator: validatePass,
            trigger: ['blur', 'change'],
          },
        ],
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: ['blur', 'change'],
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const generatedID = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
          const user = {
            username: this.accaunt.username,
            pass: this.accaunt.pass,
            isLogin: !this.accaunt.isLogin,
            id: generatedID,
          };
          this.$store.dispatch('loginUser', user);
          this.$router.push({ path: '/dashboard' });
        } else {
          return false;
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  name: 'LoginForm',
};
</script>
<style>
.el-select {
  width: 100%;
}
</style>
