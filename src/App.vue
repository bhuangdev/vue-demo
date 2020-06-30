<template>
  <div id="app">
    <el-container>
      <el-header><Menu/></el-header>
        <el-container>
          <el-main><router-view/></el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'Index',
  components: {
    Menu
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
