<template>
    <el-container >
        <el-header class="box-card grad-background ">
            <el-row type="flex" class="row-bg transparent-background mb-0" justify="space-between">
                <el-col :span="6" class="transparent-background"><NavbarLogo/></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6" class="transparent-background"><NavbarUser/></el-col>
            </el-row>
        </el-header>
    </el-container>
</template>
<script>
import NavbarUser from './NavbarUser.vue';
import NavbarLogo from './NavbarLogo.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarUser, NavbarLogo,
  },
};
</script>
<style>
    .el-header {
        border: 1px solid #EBEEF5;
        background-color: #FFF;
        color: #303133;
        -webkit-transition: .3s;
        transition: .3s;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        border-radius: 4px;
        overflow: hidden;
    }
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
