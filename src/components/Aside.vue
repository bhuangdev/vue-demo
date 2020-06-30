<template>
    <el-container style="height: 800px;width:250px;">
    <el-aside width="250px" style="background-color:#fff">
        <el-menu :default-openeds="['1','2','3','4']" router="true">
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>一周目</template>
            <el-menu-item index="/table" @click="goTo('/table')">表格</el-menu-item>
            <el-menu-item index="/calendar" @click="goTo('/calendar')">日历</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>二周目</template>
            <el-menu-item-group>
            <template slot="title">伟大航路</template>
            <el-menu-item index="/tools" @click="goTo('/tools')">小组件</el-menu-item>
            <el-menu-item index="/cool" @click="goTo('/cool')">特技</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="新世界">
            <el-menu-item index="2-3">山治</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>三周目</template>
            <el-menu-item-group>
            <template slot="title">和之国</template>
            <el-menu-item index="3-1">乔巴</el-menu-item>
            <el-menu-item index="3-2">罗宾</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title"><i class="el-icon-s-custom"></i>四周目</template>
            <el-menu-item-group>
            <template slot="title">海军基地</template>
            <el-menu-item index="4-1">弗兰奇</el-menu-item>
            <el-menu-item index="4-2">乌索普</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
    </el-aside>
    
    <el-container>
        <el-main>
            
        </el-main>
    </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Aside',
    props: {

    },
    data() {
        return {
            
        }
    },
    methord:{
        goTo(path){
            this.$router.replace(path);
        }
    }
}
</script>


<style scoped>

</style>