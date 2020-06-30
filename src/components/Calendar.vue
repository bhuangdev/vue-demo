<template>
    <el-container>
      <el-aside><Aside/></el-aside>
      <el-container>
        <el-main>
            <el-calendar v-model="value"></el-calendar>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Aside from '@/components/Aside.vue'

export default {
    name: 'Calendar',
    props: {

    },
    components: {
        Aside
    },
    data() {
        return {
            value: new Date()
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