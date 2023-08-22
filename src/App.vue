<template>
  <div>
    <!-- <form-create :rule="rule" v-model="formValue" :option="option"></form-create> -->
    <fc-designer ref="designer" :menu="menu" />
    <button @click="exportFormJson">导出表单</button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
onMounted(() => {
  const input2 = {
    name: 'input2',
    rule() {
      return {
        type: 'input',
        field: `input2_${Date.now()}`,
        value: '123',
        title: '测试组件',
        props: {
          placeholder: '请输入',
        },
      }
    },
    props() {
      return []
    }
  }
  designer.value.addComponent(input2)
});
const designer = ref<any>();

function exportFormJson() {
  console.info(designer.value.getRule());
  console.info(designer.value.getOption())
}
// 配置完整的菜单项
const menu = [
  {
    name: "yewu",
    title: "业务组件",
    list: [
      { icon: "icon-input", label: "测试", name: "input2", }
    ]
  },
  {
    name: "main",
    title: "基础表单组件",
    list: [
      { icon: "icon-input", label: "输入框", name: "input" },
      { icon: "icon-number", label: "计数器", name: "inputNumber" },
      { icon: "icon-radio", label: "单选框", name: "radio" },
      { icon: "icon-checkbox", label: "多选框", name: "checkbox" },
      { icon: "icon-select", label: "选择器", name: "select" },
      { icon: "icon-switch", label: "开关", name: "switch" },
      { icon: "icon-time", label: "时间选择器", name: "timePicker" },
      { icon: "icon-date", label: "日期选择器", name: "datePicker" },
      { icon: "icon-slider", label: "滑块", name: "slider" },
      { icon: "icon-rate", label: "评分", name: "rate" },
      // {  icon: "icon-color", label: "颜色选择器", name: "colorPicker" },
      { icon: "icon-cascader", label: "级联选择器", name: "cascader" },
      {
        icon: "icon-upload",
        label: "上传",
        name: "upload"
      },
      {
        icon: "icon-transfer",
        label: "穿梭框",
        name: "el-transfer"
      },
      {
        icon: "icon-tree",
        label: "树形控件",
        name: "tree"
      },
      {
        icon: "icon-editor",
        label: "富文本框",
        name: "fc-editor"
      }
    ]
  },
  {
    name: "aide",
    title: "辅助组件",
    list: [
      {
        icon: "icon-alert",
        label: "提示",
        name: "el-alert"
      },
      // {
      //   icon: "icon-button",
      //   label: "按钮",
      //   name: "el-button",
      //   mask: false
      // },
      {
        icon: "icon-span",
        label: "文字",
        name: "span"
      },
      {
        icon: "icon-divider",
        label: "分割线",
        name: "el-divider"
      }
    ]
  },
  {
    name: "layout",
    title: "布局组件",
    list: [
      {
        icon: "icon-row",
        label: "栅格布局",
        name: "row",
        mask: false,
        children: "col",
        childrenLen: 2
      },
      {
        icon: "icon-tab",
        label: "标签页",
        name: "tab",
        children: "tab-pane",
        mask: false
      },
      { icon: "icon-space", label: "间距", name: "div" }
    ]
  }
]

// const formValue = {
//   goods_name: 'a',
//   created_at: [],
//   test: 'b'
// }
// const rule: any[] = [
//   {
//     type: 'input',
//     field: 'goods_name',
//     title: '商品名称'
//   },
//   {
//     type: 'datePicker',
//     props: {
//       type: 'daterange',
//     },
//     field: 'created_at',
//     title: '创建时间'
//   }, {
//     field: 'test',
//     title: 'test组件',
//     component: TestComponent
//   }
// ];
// const option = {
//   onSubmit(formData: any) {
//     console.log(formData)
//   },
// }

</script>
<style scoped></style>
