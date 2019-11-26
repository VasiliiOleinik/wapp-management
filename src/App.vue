<template>
  <div id="app">
    <el-row>
      <el-col :span="3" id="nav">
        <el-card class="box-card">
          <span class="title">Menu</span>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="2">
              <router-link to="/">
                <i class="el-icon-menu"></i>
                <span>Home</span>
            </router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/about">
                <i class="el-icon-document"></i>
                <span>About</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/register">
                <i class="el-icon-sold-out"></i>
                <span>Register</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="4">
            <router-link to="/login">
              <i class="el-icon-shopping-bag-2"></i>
              <span>Login</span>
            </router-link>
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
