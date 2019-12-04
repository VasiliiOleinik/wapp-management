<template>
  <el-row class="mb-0">
    <el-col :span="12" type="flex" class="nav-user transparent-background">
      <el-menu @open="handleOpen" @close="handleClose" router class="transparent-background">
        <el-menu-item index="Home" :route="{name: 'home'}" class="transparent-background">
            <img src="../../assets/logo.svg" alt="Logo" />
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'NavbarLogo',
};
</script>
<style>
.el-link:after {
  display: none;
}
</style>
