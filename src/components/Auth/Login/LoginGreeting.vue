<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="title">
        <h1>Hi, {{ username }}!</h1>
      </span>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'LoginGreeting',
  props: {
    username: String,
  },
};
</script>
<style>
</style>
