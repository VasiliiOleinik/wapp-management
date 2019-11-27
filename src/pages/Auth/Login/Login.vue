<template>
    <el-col :span="12" :offset="3" class="mt-30">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">Login</span>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
          aria-label="login"
          id="login_form"
          method="POST"
          action="/login"
        >
          <el-input type="hidden" name="_token" :value="csrf_token"></el-input>
          <el-form-item label="Login" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-row>
            <el-col-6>
              <el-button type="primary" @click="submitForm('ruleForm')">Log in!</el-button>
            </el-col-6>
            <el-col-6 class="ml-4">
              <router-link to="/register">
                <el-button @click="resetForm('ruleForm')">Register</el-button>
              </router-link>
            </el-col-6>
            <el-col-6 class="ml-4">
              <router-link to="/reset-pass" class="reset-link">Forgot password?</router-link>
            </el-col-6>
          </el-row>
        </el-form>
      </el-card>
    </el-col>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else if (this.ruleForm.checkPass !== '') {
        this.$refs.ruleForm.validateField('checkPass');
      }
      callback();
      return false;
    };
    return {
      ruleForm: {
        pass: '',
        email: '',
      },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: ['blur', 'change'] }],
        email: [
          { required: true, message: 'Please input email address', trigger: ['blur', 'change'] },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};


</script>
<style>
  .el-select {
    width: 100%;
  }
  .registration {
    margin-top: 30px;
  }
</style>
