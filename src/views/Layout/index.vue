<template>
    <div>
        <div class="w100">
          <navbar></navbar>
        </div>
        <div>
          <div class="center">
            <div class="col-md-2 ">
              <navigation></navigation>
            </div>
            <div class="col-md-10">
              <router-view></router-view>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/views/Layout/Navbar'
  import Navigation from '@/views/Layout/Navigation'
  export default {
    components:{Navbar,Navigation}
  }
  </script>
  
  <style scoped>
    .w100{width: 100vw;}
    .center{
      height: calc(100vh - 50px);
      }
    .center>div{ height: 100%; }
    .col-md-2{
      padding: 0;
    }
    .col-md-10{
      padding-right: 0px;
      padding-left:  0px
    }
  </style>