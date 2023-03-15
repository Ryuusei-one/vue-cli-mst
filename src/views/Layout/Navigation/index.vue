<template>
    <div class="main">
      <aside class="main-sidebar">
          <section class="sidebar">
          <ul class="sidebar-menu">
              
              <li class="treeview">
                  <a href="javascript:void(0)">
                      <i class="glyphicon glyphicon-console"></i> 
                      <span>MaSteelTools</span> 
                  </a>
                  <ul class="treeview-menu">
                      <li><router-link to="/index"><i class="glyphicon glyphicon-user"></i> MaSteelTools</router-link></li>
                      <li><router-link to="/404"><i class="glyphicon glyphicon-th-list"></i> 404</router-link></li>
                      <li><router-link to="/404"><i class="glyphicon glyphicon-pencil"></i> 404</router-link></li>
                      <li><router-link to="/404"><i class="glyphicon glyphicon-list-alt"></i> 404</router-link></li>
                  </ul>
              </li>
  
                          <!-- <li class="treeview">
                  <a href="javascript:void(0)">
                      <i class="glyphicon glyphicon-console"></i> 
                      <span>MaSteelTools2</span> 
                  </a>
                  <ul class="treeview-menu">
                      <li><router-link to="/index"><i class="glyphicon glyphicon-user"></i> MaSteelTools2</router-link></li>
                      <li><router-link to="/404"><i class="glyphicon glyphicon-th-list"></i> 4042</router-link></li>
                      <li><router-link to="/404"><i class="glyphicon glyphicon-pencil"></i> 4042</router-link></li>
                      <li><router-link to="/404"><i class="glyphicon glyphicon-list-alt"></i> 4042</router-link></li>
                  </ul>
              </li> -->
              
          </ul>
          </section>
      </aside>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
    .main{
      height: 100%;
      background-color: #f1eded4d;
    }
    ul{list-style: none;}
    .treeview{padding: 0;}
    .treeview li{margin: 10px 0;}
    .sidebar-menu{padding-left: 0;}
    .treeview>a{
      display: block;
      padding: 8px 10px;
      background-color: #f1eded;
    }
    .treeview>a>span{margin-left: 5px;}
  </style>