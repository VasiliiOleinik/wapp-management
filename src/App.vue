<template>
  <div id="app">
    <el-row>
      <el-col :span="3" id="nav">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">Menu</span>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <el-menu-item index="Home" :route="{name: 'home'}">
              <i class="el-icon-menu"></i>
              <span>Home</span>
            </el-menu-item>
            <el-menu-item index="About" :route="{name: 'about'}">
              <i class="el-icon-document"></i>
              <span>About</span>
            </el-menu-item>
            <el-menu-item index="Register" :route="{name: 'register'}">
              <i class="el-icon-sold-out"></i>
              <span>Register</span>
            </el-menu-item>
            <el-menu-item index="login" :route="{name: 'login'}">
              <i class="el-icon-shopping-bag-2"></i>
              <span>Login</span>
            </el-menu-item>
          </el-menu>
        </el-card>
      </el-col>
      <router-view />
    </el-row>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: auto;
    min-height: auto;
    border: none;
  }

  .el-menu-item {
    padding: 0px !important;
  }
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
