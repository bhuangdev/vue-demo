<template>
    <el-container>
      <el-aside><Aside/></el-aside>
      <el-container>
        <el-main>
            <el-row>
                <span>姓名</span>
                <el-input v-model="input" placeholder="请输入内容" style="width:200px;margin-left:10px;margin-right:10px;"></el-input>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>
            <br />
            <el-row>
                <el-table :data="tableData" stripe border>
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-row>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Aside from '@/components/Aside.vue'

export default {
    name: 'Table',
    props: {

    },
    components: {
        Aside
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            tableData: Array(14).fill(item),
            input:''
        }
    },
    methord:{
 
    }
}
</script>


<style scoped>
.el-aside {
    color: #333;
}
</style>