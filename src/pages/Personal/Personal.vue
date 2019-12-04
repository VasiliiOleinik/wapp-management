<template>
  <el-col :span="20" :offset="1">
    <WorkResult />
    <Tasks />
  </el-col>
</template>
<script>
import WorkResult from '@/components/Personal/WorkResult.vue';
import Tasks from '@/components/Personal/Tasks.vue';

export default {
  components: {
    WorkResult, Tasks,
  },
};
</script>
