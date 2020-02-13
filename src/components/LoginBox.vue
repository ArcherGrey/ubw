<template>
  <a-form :form="form" class="flex-col-center form">
    <a-input placeholder="请输入姓名" class="form-item" v-model="userName" ref="userNameInput">
      <a-icon slot="prefix" type="user" />
      <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
    </a-input>
    <a-input placeholder="请输入密码" :type="pswType" class="form-item" v-model="password">
      <a-icon slot="prefix" type="lock" />
      <a-icon v-if="!showPsw" slot="suffix" type="eye-invisible" @click="showPswHandler" />
      <a-icon v-if="showPsw" slot="suffix" type="eye" @click="hidePswHandler" />
    </a-input>
    <a-button class="form-item" @click="submit">{{ btnMsg }}</a-button>
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
      password: '',
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
    },
    submit() {
      let userInfo = {
        userName: this.userName,
        password: this.password,
        type: this.btnMsg
      };
      this.$http.login(userInfo).then(res => {
        if (res.code === 200) {
          localStorage.setItem('userInfo', JSON.stringify({ userName: this.userName, password: this.password }));
          this.$message.success(res.message);
          setTimeout(() => {
            this.$router.go('/');
          }, 1000);
        } else {
          this.$message.error(res.message);
        }
      });
    }
  },
  computed: {
    pswType() {
      return !this.showPsw ? 'password' : 'text';
    }
  }
};
</script>

<style scoped lang="scss"></style>
