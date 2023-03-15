<template>
  <div class="container">
    <form action="" method="POST" class="form-horizontal" role="form">
      <div class="form-group text-center">
        <legend>修改信息</legend>
      </div>

      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">id</label>
        <div class="col-sm-10">
          <input type="text" v-model="data.name" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">名称</label>
        <div class="col-sm-10">
          <input type="text" v-model="data.workingLife" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="input" class="col-sm-2 control-label">选项</label>
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
        <label for="input" class="col-sm-2 control-label">时间</label>
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
        <label for="input" class="col-sm-2 control-label">详情</label>
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
          <button type="button" @click="doModify" class="btn btn-primary">
            提交
          </button>
          <router-link to="/">
            <button class="btn btn-success">返回</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { modify,findById } from "@/api/enterAPI";
import { getMsg } from "@/api/deptAPI";
export default {
  data() {
    return {
      depts: [],
      deptId: -1,
      data: {},
    };
  },
  mounted() {
    this.loadDept();
    this.loadData(this.$route.query.id);
    
  },
  methods: {
    loadData(id){
      findById(id).then(data=>{
        this.data=data.data;
      })
    },
    loadDept() {
      getMsg().then((data) => {
        data.data.unshift({id:-1,name:"全部"});
        this.depts = data.data;
      });
    },
    doModify() {
      if(this.data.departmentId==-1){
        alert("请选择!");
        return;
      }
      if(!this.data.name){
        alert("不能为空!");
        return;
      }
      modify(this.data).then((data) => {
        if (data.success) {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style>
</style>