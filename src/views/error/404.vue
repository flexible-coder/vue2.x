<template>
  <div id="da-wrapper" class="fluid">
    <div id="da-content">
      <div class="da-container clearfix">
        <div id="da-error-wrapper">
          <div id="da-error-pin"></div>
          <div id="da-error-code">error <span>404</span></div>
          <h1 class="da-error-heading">找不到网页！</h1>
          <div class="subInfo">
            对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。
          </div>
          <center>
            <router-link to="/" class="goHome">
              <h3>返回首页</h3>
            </router-link>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.goHome {
  cursor: pointer;
  color: #73991f;
  text-decoration: none;
  outline: 0;
  h3 {
    font-weight: normal;
    font-size: 17px;
  }
}
.goHome:hover {
  text-decoration: underline;
}
::-moz-selection {
  color: #fff;
  background: #a9ca60;
}
::selection {
  color: #fff;
  background: #a9ca60;
}
#da-wrapper {
  width: 100%;
  height: auto;
  min-height: 100%;
  position: relative;
  min-width: 320px;
  background-image: url("~@/assets/404_images/blueprint.png");
}
#da-content {
  clear: both;
  padding-bottom: 58px;
}
.da-container {
  width: 96%;
  margin: auto;
}
#da-error-wrapper {
  width: 320px;
  padding: 30px 0;
  margin: auto;
  position: relative;
}
#da-error-pin {
  width: 38px;
  height: 38px;
  display: block;
  margin: auto;
  margin-bottom: -27px;
  z-index: 10;
  position: relative;
  background: url("~@/assets/404_images/error-pin.png") no-repeat center center;
}
#da-error-code {
  width: 285px;
  height: 170px;
  padding: 127px 16px 0 16px;
  position: relative;
  margin: auto;
  margin-bottom: 20px;
  z-index: 5;
  line-height: 1;
  font-size: 32px;
  text-align: center;
  background: url("~@/assets/404_images/error-hanger.png") no-repeat center
    center;
  -webkit-transform-origin: center top;
  -moz-transform-origin: center top;
  transform-origin: center top;
  -webkit-animation: error-swing infinite 2s ease-in-out alternate;
  -moz-animation: error-swing infinite 2s ease-in-out alternate;
  animation: error-swing infinite 2s ease-in-out alternate;
  span {
    font-size: 96px;
    display: block;
  }
}
.da-error-heading {
  color: #e15656;
  text-align: center;
  font-size: 24px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.subInfo {
  font-size: 13px;
  line-height: 21px;
  color: grey;
  margin-bottom: 30px;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
@-webkit-keyframes error-swing {
  0% {
    -webkit-transform: rotate(1deg);
  }
  100% {
    -webkit-transform: rotate(-2deg);
  }
}
@-moz-keyframes error-swing {
  0% {
    -moz-transform: rotate(1deg);
  }
  100% {
    -moz-transform: rotate(-2deg);
  }
}
@keyframes error-swing {
  0% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(-2deg);
  }
}
</style>
