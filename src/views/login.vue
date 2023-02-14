<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-form">
        <div class="login-title">用户登录</div>
        <el-form :model="form">
          <el-form-item>
            <el-input v-model="form.username" placeholder="账号" size="large">
              <i slot="prefix" class="iconfont icon-yonghu"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.username"
              placeholder="密码"
              type="password"
              size="large"
            >
              <i slot="prefix" class="iconfont icon-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-row style="display: flex">
              <el-col :span="14">
                <el-input
                  v-model="form.code"
                  placeholder="请输入验证码"
                  size="large"
                >
                  <i slot="prefix" class="iconfont icon-yanzhengma"></i>
                </el-input>
              </el-col>
              <el-col :span="10" style="margin-left: 10px"></el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-submit" size="large" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login-footer">测试123123</div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        code: "",
      },
    };
  },
  created() {
    // svg-captcha
  },
  methods: {
    login(){}
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("~@/assets/images/login.jpeg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  .login-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form {
      width: 400px;
      border-radius: 10px;
      background: white;
      padding: 15px 15px 0;
      box-sizing: border-box;
      .login-title {
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
        margin-bottom: 20px;
      }
      .login-submit {
        width: 100%;
      }
      ::v-deep {
        .el-input--prefix {
          .el-input__prefix {
            padding: 0 4px;
          }
        }
      }
    }
  }
  .login-footer {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: white;
    position: fixed;
    bottom: 0;
    text-align: center;
    font-family: Arial;
    font-size: 12px;
    text-align: right;
    box-sizing: border-box;
  }
}
</style>
