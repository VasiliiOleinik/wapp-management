<template>
  <el-card class="box-card">
    <el-row class="mb-4">
      <el-col :span="3">
        <span class="title">Your statistics</span>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="Date"></el-table-column>
      <el-table-column prop="hours" label="Hours"></el-table-column>
      <el-table-column prop="rate" label="Rate"></el-table-column>
      <el-table-column prop="salary" label="Salary"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: 'September 2019',
          hours: '130',
          rate: '300 $/hour',
          salary: '39 000 ₴',
        },
        {
          date: 'October 2019',
          hours: '200',
          rate: '300 $/hour',
          salary: '60 000 ₴',
        },
        {
          date: 'November 2019',
          hours: '50',
          rate: '300 $/hour',
          salary: '15 000 ₴',
        },
        {
          date: 'December 2019',
          hours: '10',
          rate: '10 000 per month',
          salary: '10 000 ₴',
        },
        {
          date: 'December 2019',
          hours: '5',
          rate: '300 $/hour',
          salary: '1 500 ₴',
        },
      ],
    };
  },
  name: 'WorkResult',
};
</script>
