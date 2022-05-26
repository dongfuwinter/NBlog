<template>
  <div class="login_container">
    <div class="login_box">
    <el-form :model="form" class="login_form">
      <div class="title_container">
        <h1 class="title">后台管理</h1>
      </div>
      <el-form-item>
        <el-icon :size="20" class="svg_container">
          <Edit />
        </el-icon>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-icon :size="20" class="svg_container">
          <Edit />
        </el-icon>
        <el-input v-model="form.password" />
      </el-form-item>
    </el-form>
    </div>

  </div>
</template>
<script setup>
import { Edit } from "@element-plus/icons-vue";
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>
<style scoped lang="scss">
.login_container {
  box-sizing: unset !important;
  height: 100%;
  background-color: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_box .avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.login_box .avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>