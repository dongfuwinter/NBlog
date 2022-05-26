<template>
  <div class="login-container">
    <el-form :model="form">
      <div class="title-container">
        <h1 class="title">后台管理</h1>
      </div>
      <el-form-item>
        <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon>
        <el-input v-model="form.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { Edit } from "@element-plus/icons-vue";
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  password: ""
});

const onSubmit = () => {
  console.log("submit!");
};
</script>