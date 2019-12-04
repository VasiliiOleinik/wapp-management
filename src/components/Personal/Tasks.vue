<template>
  <el-row class="mt-4">
    <div v-for="task in TasksMock" :key="task.taskName">
      <el-col :span="6">
        <el-card class="box-card">
          <el-row class="mb-4">
            <el-col>
              <span class="title">{{ task.taskName }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="5">
                <span>Status:</span>
            </el-col>
            <el-col :span="19">
                <el-progress
                    :percentage="task.progress"
                    :format="format"
                    :color="customColors"
                    >
                </el-progress>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="5">
                <span>Timeline:</span>
            </el-col>
            <el-col :span="19">
                <span class="color-success">{{ task.timeline }}</span>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </div>
  </el-row>
</template>
<script>
import TasksMock from '@/constants/TasksMock';

export default {
  data() {
    return {
      TasksMock,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 25 },
        { color: '#e6a23c', percentage: 50 },
        { color: '#6f7ad3', percentage: 75 },
        { color: '#5cb87a', percentage: 100 },
      ],
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? 'Full' : `${percentage}%`;
    },
  },
  name: 'Tasks',
};
</script>
