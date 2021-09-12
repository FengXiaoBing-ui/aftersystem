<template>
  <div class="login">
    <div class="login-box flexrow">
      
      <div v-if="iswindown" class="login-box-left padding50 flexcolumn jc_start ai_start">
        <h1>xxxxitong</h1>
        <div class="mt30 login-box-left-tag flexrow">
          V 1.0.0
        </div>
        <div class="login-box-left-c flexrow ">
          <img class="login-box-left-c-l" src="../assets/login/descs.png" alt="">
          <div class="login-box-left-c-r pl30 ml30 mt20 flexcolumn ai_start">
            <h3 class="h3afte fw300">系统通知</h3>
            <h4 style="font-size:18px">门户网站已经安全迁移至腾讯云，可在管理端上传内容。</h4>
            <span class="created_time">发布时间：2020-07-08</span>
            <p class="content">行业敏感信息请尽快在相关部门备案。</p>
            <p class="content">旧版网站已关闭，新版网站已上线。</p>
          </div>
        </div>
        <div class="login-box-left-b flexrow jc_sb" >
          <div v-for="(item,index) in taglist" :key="index">
            <img :src="item.img" alt="">
            <p>{{ item.name }}</p>
          </div>
          
        </div>
        <div class="footlink flexrow jc_sb">
          <div class="left-log flexrow">
            <img src="../assets/login/logo.png" alt="">
            <span>进入官网 > </span>
          </div>
          <div class="right-num">著作权编号：ISN8845774412454</div>
        </div>
      </div>
      <div class="login-box-right">
        <img class="title-img" src="../assets/login/title-blue.png" alt="">
        <div class="login-right">
          <!-- <button v-btn-control="login">登录</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apifn from '../api/api.js'
export default {
  name: 'Login',
  data(){
    return{
      username:'123',
      password:'123456789',
      taglist:[
        {
          name:"家政行业网站技术供应方",
          img:require('../assets/login/desc1.png')
        },
        {
          name:"为每个客服精心打造的专业服务平台",
          img:require('../assets/login/desc2.png')
        },
        {
          name:"及时相应、全面细致、共创服务价值",
          img:require('../assets/login/desc3.png')
        },
        {
          name:"为您提供更便捷更全面的服务支持",
          img:require('../assets/login/desc4.png')
        }
      ],
      screenWidth: document.body.clientWidth,
      iswindown:true
    }
  },
  watch:{
    screenWidth(){
      if(this.screenWidth>=1024){
        this.iswindown = true
      }else{
        this.iswindown = false
      }
    }
  },
  mounted(){
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  methods:{
    login(){
      let obj = {
        username:this.username,
        password:this.password
      }
      return apifn.login(obj).then(res => {
        console.log(11,res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped lang="scss">
.login{
  width: 100%;
  height: 100vh;
  background-image: url('../assets/login/body-bg-2.png');
  background-size: 100% 100%;
  &-box{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    &-left{
      width: 750px;
      height: 598px;
      background-image: url('../assets/login/bg-blue.png');
      background-size: 100% 100%;
      transform: translateY(-11px);
      &-tag{
        width: 76px;
        height: 26px;
        background-image: url('../assets/login/version-bg1.png');
        background-size: 100% 100%;
        color: red;
        font-size: 12px;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 581px;
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.2) 0%,#e2a6a3 100%);
        }
      }
      &-c{
        width: 100%;
        &-r{
          width: 315px;
          border-left: 1px dashed seashell;
          .h3afte{
            line-height: 40px;
            color: rgba(255,255,255,0.7);
            &::after{
              content: '';
              display: block;
              width: 20px;
              height: 3px;
              background: white;
              margin-bottom: 10px;
            }
          }
          .created_time{
            font-size: 12px;
            line-height: 30px;

          }
          .content{
            font-size: 16px;
            line-height: 30px;
            &:hover{
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
      &-b{
        width: 100%;
        margin-top: 80px;
        p{
          display: inline-block;
          width: 108px;
          font-size: 12px;
          margin-left: 10px;
          opacity: 0.7;
        }
      }
      .footlink{
        width: 100%;
        margin-top: 40px;
        img{
          margin-right: 10px;
        }
        span{
          padding-left: 10px;
          border-left: 0.5px solid rgba(255,255,255,0.7);
          font-size: 12px;
          opacity: 0.7;
          cursor: pointer;
        }
        .right-num{
          color: white;
          opacity: 0.7;
          font-size: 12px;
        }
      }
    }
    &-right{
      width: 275px;
      height: 562px;
      background: white;
      padding: 30px 25px 0 25px;
    }
  }
}
</style>
