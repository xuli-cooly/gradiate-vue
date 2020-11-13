<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_avatar">
        <img src="../../assets/login.jpeg" alt="">
      </div>
      <!-- 登录区域 -->
      <el-form ref="loginFormRef" class="login_form" :model="form" :rules=rules>
        <el-form-item prop="username">
          <!-- 用户 -->
          <el-input prefix-icon="el-icon-user"
                    v-model="form.username"
                    placeholder="请输入用户名"          
          >
          
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <!-- 密码 -->
          <el-input prefix-icon="el-icon-lock" 
                    v-model="form.password"
                    placeholder="请输入密码"
                    
          >
          </el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          username: 'admin',
          password: '123456'
        },
        rules: {
          username:[
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入正确的密码', trigger: 'blur' },
            { min: 2, max: 18, message: '长度在 2 到 18个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields();
      },
      login() {
        this.$router.push('/home');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login_container {
    background-image: url(../../assets/peiqi.jpg);
    height:1000px;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .login_avatar{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding: 10px;
    border: solid 1px #eee;
    box-shadow: 0 0 8px #ddd;
    position: absolute;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%,-50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .login_form {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

  }
  .btns {
    display: flex;
    justify-content:flex-end;
  }
</style>