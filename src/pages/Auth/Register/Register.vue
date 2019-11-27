<template>
    <el-col :span="12" :offset="3" class="mt-30">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">Registration</span>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="ruleForm"
          aria-label="registration"
          id="register_form"
          method="POST"
          action="/register"
        >
          <el-form-item label="FirstName" prop="firstName">
            <el-input type="text" v-model="ruleForm.firstName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="SecondName" prop="secondName">
            <el-input type="text" v-model="ruleForm.secondName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Surname" prop="surname">
            <el-input type="text" v-model="ruleForm.surname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Username" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Company" prop="company">
            <el-select
              v-model="ruleForm.company"
              clearable
              placeholder=""
              >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-row>
            <el-col-6>
              <el-button type="primary" @click="submitForm('ruleForm')">Register me!</el-button>
            </el-col-6>
            <el-col-6 class="ml-4">
              <el-button @click="resetForm('ruleForm')">Clear</el-button>
            </el-col-6>
          </el-row>
        </el-form>
      </el-card>
    </el-col>
</template>
<script>
export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input you name'));
      }
      setTimeout(() => {
        if (value < 2) {
          callback(new Error('Name must be greater than 2'));
        } else {
          callback();
        }
      }, 1000);
      return false;
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else if (this.ruleForm.checkPass !== '') {
        this.$refs.ruleForm.validateField('checkPass');
      }
      callback();
      return false;
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two inputs dont match!'));
      } else {
        callback();
      }
      return false;
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        username: '',
        email: '',
        company: '',
      },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: ['blur', 'change'] }],
        checkPass: [{ required: true, validator: validatePass2, trigger: ['blur', 'change'] }],
        username: [{ required: true, validator: validateName, trigger: ['blur', 'change'] }],
        email: [
          { required: true, message: 'Please input email address', trigger: ['blur', 'change'] },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }],
        company: [{ required: true, message: 'Please choose you company', trigger: ['blur', 'change'] }],
      },
      options: [
        {
          value: 'WAPP MRPL',
          label: 'WAPP MRPL',
        },
        {
          value: 'WAPP MSK',
          label: 'WAPP MSK',
        },
        {
          value: 'WAPP NY',
          label: 'WAPP NY',
        },
      ],
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
