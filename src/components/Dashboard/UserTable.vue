
<template>
<el-card class="box-card mt-4" shadow="never">
    <el-row>
      <el-col :span="3">
        <el-button @click="resetProjFilter">Reset project filter</el-button>
      </el-col>
    </el-row>
    <el-table ref="filterTable" :data="tableData" style="width: 100%" show-summary>
    <el-table-column
        prop="date"
        label="Date"
        sortable
        width="180"
        column-key="date"
    ></el-table-column>
    <el-table-column
      prop="project"
      label="Project"
      column-key="project"
      width="100"
      :filters="[{ text: 'Maller', value: 'Maller' }, { text: 'WAPP', value: 'WAPP' },
      { text: '15-puzzle', value: '15-puzzle' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template slot-scope="scope">
      <el-tag
          :type="scope.row.tag === 'Maller' ? 'primary' : 'success'"
          disable-transitions
      >{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="task" label="Task"></el-table-column>
    <el-table-column prop="time" label="Time" width="180" :formatter="formatter"></el-table-column>

    </el-table>
</el-card>
</template>
<script>
import tableData from '@/constants/UserTableMock';

export default {
  data() {
    return {
      tableData,
    };
  },
  methods: {
    resetProjFilter() {
      this.$refs.filterTable.clearFilter('project');
    },
    formatter(row) {
      return row.time;
    },
    filterTag(value, row) {
      const { tag } = row;
      return tag === value;
    },
    filterHandler(value, row, column) {
      const { property } = column.property;
      return row[property] === value;
    },
  },
};
</script>
