<template>
    <el-col :span="12" :offset="3" class="mt-30">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">Registration</span>
        </div>
        <el-form
          :model="register"
          status-icon
          :rules="rules"
          ref="register"
          label-width="120px"
          class="register"
          aria-label="registration"
          id="register_form"
          method="POST"
          action="/register"
        >
          <el-form-item label="FirstName" prop="firstName">
            <el-input type="text" v-model="register.firstName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="SecondName" prop="secondName">
            <el-input type="text" v-model="register.secondName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Surname" prop="surname">
            <el-input type="text" v-model="register.surname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Username" prop="username">
            <el-input type="text" v-model="register.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="register.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="register.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="register">
            <el-input type="text" v-model="register.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Company" prop="company">
            <el-select
              v-model="register.company"
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
              <el-button type="primary" @click="submitForm('register')">Register me!</el-button>
            </el-col-6>
            <el-col-6 class="ml-4">
              <el-button @click="resetForm('register')">Clear</el-button>
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
      } else if (this.register.checkPass !== '') {
        this.$refs.register.validateField('checkPass');
      }
      callback();
      return false;
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.register.pass) {
        callback(new Error('Two inputs dont match!'));
      } else {
        callback();
      }
      return false;
    };
    return {
      register: {
        pass: '',
        checkPass: '',
        username: '',
        email: '',
        company: '',
        name: '',
        secondName: '',
        surname: '',
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
          const userParams = {
            id: Math.random() * (20000 - 10000) + 10000,
            isRegistered: true,
          };
          const user = Object.assign({}, this.register, userParams);
          this.$store.dispatch('registerUser', user);
          console.log(user);
        } else {
          console.log('error submit!!');
          const register = {
            username: null,
            chackPass: null,
            email: null,
            name: null,
            secondName: null,
            surname: null,
            company: null,
          };
          console.log(register);
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  computed: {
    regUser() {
      return this.$store.getters.regUser;
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
