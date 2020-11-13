<template>
<el-container class="home_container">
  <!-- 头部区域 -->
  <el-header>
    <div @click="welcome" class="header-right">   
        <img src="~@/assets/qz.jpg" alt="">
      <span>小猪佩奇身上纹 掌声送给打工人</span>
    </div>
    <el-button type="info" @click="loginout">
        退出
    </el-button>
  </el-header>
  <!-- 主要内容区 -->
  <el-container>
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class="toggleCollapse" @click="menuIsShow">| | |</div>
      <el-menu
        background-color="#323744"
        text-color="#fff"
        active-text-color="#0984e3"
        unique-opened
        :collapse= "isCollapse"
        :collapse-transition="false"
        router
        >
        <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"> 贷款账户</el-menu-item>
              <el-menu-item index="1-2">投资账户</el-menu-item>
              <el-menu-item index="1-3"> Emergency Contact Mgmt</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span> 贷款管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"> 贷款列表</el-menu-item>
              <el-menu-item index="2-2"> Credit</el-menu-item>
              <el-menu-item index="2-3"> 贷款审核</el-menu-item>
              <el-menu-item index="2-3"> 超级放款人</el-menu-item>
              <el-menu-item index="2-3"> Paloo</el-menu-item>
              <el-menu-item index="2-3"> 还款</el-menu-item>
              <el-menu-item index="2-3"> 手动结算</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1"> 部门</el-menu-item>
              <el-menu-item index="3-2">角色</el-menu-item>
              <el-menu-item index="3-3">人员</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
        isCollapse: false
    }
  },
  methods: {
    menuIsShow() {
      this.isCollapse = !this.isCollapse
    },
    welcome() {
      this.$router.push('/welcome')
    },
    loginout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.home_container {
  height: 100%;
}
img {
  border-radius: 40px;
}
.el-header {
  background-color: #373D41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    > span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #323744;
  .el-menu {
    border-right: none;
  }
}
.el-container {
  background-color: #ededf1;
}
.toggleCollapse {
  background-color: #4a5064;
  color: #fff;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;

}
.header-right {
  cursor: pointer;
}
</style>
