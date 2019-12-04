<template>
  <el-row class="mb-0">
    <el-col :span="12" type="flex" class="nav-user transparent-background">
        <el-menu
            @open="handleOpen"
            @close="handleClose"
            class="transparent-background"
            router
          >
          <el-menu-item index="Personal" :route="{name: 'personal'}" class="transparent-background">
            <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
            <el-link style="color: #fff">UserName</el-link>
          </el-menu-item>
        </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    };
  },
  name: 'NavbarUser',
};
</script>
<style>
    .nav-user {
        align-items: center;
        display: flex;
        justify-content: flex-end;
    }
    .nav-user .el-avatar {
        margin-right: 15px;
    }
    .el-link:after{
       display: none;
    }
</style>
