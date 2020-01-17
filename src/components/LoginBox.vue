<template>
  <a-form :form="form" class="flex-col-center form">
    <a-input placeholder="请输入姓名" class="form-item" v-model="userName" ref="userNameInput">
      <a-icon slot="prefix" type="user" />
      <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
    </a-input>
    <a-input placeholder="请输入密码" :type="pswType" class="form-item">
      <a-icon slot="prefix" type="lock" />
      <a-icon v-if="showPsw" slot="suffix" type="eye" @click="showPswHandler" />
      <a-icon v-if="!showPsw" slot="suffix" type="eye-invisible" @click="hidePswHandler" />
    </a-input>
    <a-button class="form-item">{{ btnMsg }}</a-button>
  </a-form>
</template>

<script>
export default {
  name: 'LoginBox',
  props: {
    form: Object,
    btnMsg: String
  },
  data() {
    return {
      userName: '',
      showPsw: false
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = '';
    },
    hidePswHandler() {
      this.showPsw = false;
    },
    showPswHandler() {
      this.showPsw = true;
    }
  },
  computed: {
    pswType() {
      return !this.showPsw ? 'password' : 'text';
    }
  }
};
</script>


<style scoped lang="scss">
</style>
