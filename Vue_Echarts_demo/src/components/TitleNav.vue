<template>
  <div>
    <ul>
      <li><i class="el-icon-caret-right"></i>
        <router-link to="/line">折线图</router-link>
      </li>
      <li><i class="el-icon-caret-right"></i>
        <router-link to="/bar">柱状图</router-link>
      </li>
    <!--   <li><i class="el-icon-caret-right"></i>
        <router-link to="/pie">饼图</router-link>
      </li> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  margin: 10px 10px;
}

</style>
