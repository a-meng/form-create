<template>
  <div>
    <form-create :rule="rule" :option="option"></form-create>
  </div>
</template>
<script setup lang="ts">
import TestComponent from './components/TestComponent.vue';
const rule: any[] = [
  {
    type: 'input',
    field: 'goods_name',
    title: '商品名称'
  }, {
    type: 'input',
    field: 'goods_name2',
    title: '商品名称2'
  },
  {
    type: 'datePicker',
    field: 'created_at',
    title: '创建时间'
  }, {
    field: 'test',
    title: 'test组件',
    component: TestComponent
  }
];
const option = {
  onSubmit(formData: any) {
    console.log(formData)
  },
}

</script>
<style scoped></style>
