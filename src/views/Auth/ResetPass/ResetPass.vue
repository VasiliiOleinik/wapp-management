<template>
    <el-col :span="12" :offset="3" class="mt-30">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">Reset password</span>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="ruleForm"
        >
          <el-form-item label="Email" prop="email">
            <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-row>
            <el-col-6>
              <el-button type="primary" @click="submitForm('ruleForm')">Reset!!</el-button>
            </el-col-6>
          </el-row>
        </el-form>
      </el-card>
    </el-col>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        email: '',
      },
      rules: {
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
