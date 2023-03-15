<template>
  <div class="container" style="margin-top: 40px">
    <div>
      <!-- <label for="">输入ID进行查询</label>
      <select
        v-model="deptId"
        class="form=control"
        style="width: 200px; display: inline-block"
      >
        <option
          :value="item.id"
          v-for="item in depts"
          :key="item.id"
          v-text="item.billetNum"
        ></option>
      </select>
      <button class="btn btn-primary" @click="loadData">查询</button> -->
      <div class="pull-right">
        <router-link to="/404">
          <button class="btn btn-success">新增待阅</button>
        </router-link>
      </div>
    </div>
    <div>
      <h1 class="text-center">信息表</h1>
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>喷码</th>
            <th>图(路径)</th>
            <th>日期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td v-text="item.id"></td>
            <td v-text="item.billetNum"></td>
            <td><img :src="'../public/0313/'+item.billetPicPath"/></td>
            <td v-text="item.createTime"></td>
            <td>
              <!-- <router-link :to="'/modify?id=' + item.id">修改</router-link> -->
              <!-- <a href="#" @click="doDelete(item.id)">删除</a> -->
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <h5 class="test-conter" v-text="daleteMessage"></h5> -->
    </div>
  </div>
</template>

<script>
// import { findByDeptId, deleteById } from "@/api/enterAPI";
import { getMsg } from "@/api/deptAPI";
export default {
  data() {
    return {
      // depts: [],
      // deptId: -1,
      data: [],
      // daleteMessage: "",
    };
  },
  mounted() {
    this.loadData();
    // this.loadDept();
  },
  methods: {
    loadData() {
      // findByDeptId(this.deptId).then((r) => {
      //   this.data = r.data;
      //   // console.log(r.data);
      // });
      getMsg().then(data => {
        this.data = data;
      
      })
    // },
    // loadDept() {
    //   findAll().then((r) => {
    //     r.data.unshift({id:-1,billetNum:"请选择"});
    //     this.depts = r.data;
    //     // console.log(r.data);
    //   });
    // },
   
    // doDelete(id) {
    //   deleteById(id).then((r) => {
    //     if (r.success) {
    //       this.daleteMessage = r.message;
    //       this.loadData();
    //     }
    //   });
     },
  },
};
</script>

<style>
</style>