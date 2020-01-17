<template>
  <div class="wrapper flex-col-center">
    <a-tabs type="card" :tabBarStyle="tabBarStyle">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="desktop" />
          登录
        </span>
        <login-box :form="form1" btnMsg="登录"></login-box>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="user-add" />
          注册
        </span>
        <login-box :form="form2" btnMsg="注册"></login-box>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import LoginBox from '@/components/LoginBox.vue';
export default {
  components: { LoginBox },
  data() {
    return {
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
      tabBarStyle: {
        'text-align': 'center',
        height: '40px',
        width: '100%'
      }
    };
  },
  methods: {
    login() {
      localStorage.setItem('userInfo', '1');
      this.$router.push('/index');
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 300px;
  height: 500px;
  box-shadow: 1px 1px 8px #4d4d4d;
  .ant-tabs-card {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ant-tabs-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px;
    }
  }
}
</style>
