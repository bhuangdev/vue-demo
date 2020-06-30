<template>
  <div class="hello">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#696969"
      text-color="#fff"
      active-text-color="pink"
      >
      <el-menu-item index="1"><router-link to="/"><img style="height:50px;width:50px;" src="@/assets/logo.png"/></router-link></el-menu-item>
      <el-menu-item index="2" disabled><span style="width:100px;font-size:200%;">猪网</span></el-menu-item>
      <el-menu-item index="3"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="4">工作项</el-menu-item>
      <el-menu-item index="5"><router-link to="/about">其他</router-link></el-menu-item>
      <span style="float:right;margin-right:30px;margin-top:20px;color:#fff">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px;color:#FFF;background-color:#696969"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>admin</span>
      </span>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    
  },
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  text-decoration:none;
}
.el-menu-demo {
  height:65px;
}

</style>
