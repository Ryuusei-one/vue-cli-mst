<template>
  <div class="container">
    <form action="" method="POST" class="form-horizontal" role="form">
      <div class="form-group text-center">
        <legend>新增待阅</legend>
      </div>

      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">id</label>
        <div class="col-sm-10">
          <input type="text" v-model="data.name" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">喷码</label>
        <div class="col-sm-10">
          <input type="text" v-model="data.workingLife" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">图(路径)</label>
        <div class="col-sm-10">
          <select
            v-model="data.departmentId"
            class="form=control"
            style="width: 200px; display: inline-block"
          >
            <option
              :value="item.id"
              v-for="item in depts"
              :key="item.id"
              v-text="item.name"
            ></option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">日期</label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="data.graduateSchool"
            class="form-control"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">备注</label>
        <div class="col-sm-10">
          <textarea
            name=""
            id="input"
            v-model="data.personalProfile"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">操作</label>
        <div class="col-sm-10">
          <textarea
            name=""
            id="input"
            v-model="data.workExperience"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
          <button type="button" @click="doAdd" class="btn btn-primary">
            提交
          </button>
          <router-link to="/">
            <button class="btn btn-success" @click="backIndex">返回</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { add } from "@/api/enterAPI";
import { getMsg } from "@/api/deptAPI";
export default {
  data() {
    return {
      depts: [],
      deptId: -1,
      data:{
        departmentId: -1
      }
    }
  },
  mounted() {
    this.loadDept();
  },
  methods: {
    loadDept() {
      getMsg().then((r) => {
         r.data.unshift({id:-1,name:"全部"});
        this.depts = r.data;
        // console.log(r.data);
      });
    },
    doAdd() {
      if(this.data.departmentId==-1){
        console.log(this.data.departmentId);
        alert("请选择!");
        return;
      }
      if(!this.data.name){
        alert("不能为空!");
        return;
      }
      add(this.data).then((r) => {
        if (r.success) {
          this.$router.push("/");
        }
      });
    },
    backIndex(){
      this.$router.go(-1);
    }
  },
};
</script>

<style>
</style>