<template>
    <el-container>
      <el-aside><Aside/></el-aside>
      <el-container>
        <el-main>
          <span><h1 style="font-size:100px;">欢迎来到猪网！！！</h1></span>
        </el-main>
      </el-container>
    </el-container>    
</template>

<script>
import Aside from '@/components/Aside.vue'

export default {
  name: 'Index',
  components: {
    Aside
  }
}
</script>
