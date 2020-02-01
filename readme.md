# :a: UBW

## :running: 运行

### :blue_book: 数据库

安装数据库服务：

```
// 管理员执行cmd
安装mongodb地址\bin\mongod.exe --config "配置文件地址\mongod.cfg" --install

D:\ide\mongodb\bin\bin\mongod.exe --config "D:\gr\github\ubw\server\db\mongod.cfg" --install

```

启动服务：

```
net start MongoDB
```

关闭服务：

```
net stop MongoDB
```

### :open_file_folder: 代码

顺序

1. 前端：`npm run watch` 自动构建
2. 后端：`npm run watch`

## :fork_and_knife: 工具

vue-cli3 创建项目

- 前端
  - 前端 ui 组件：`ant-design-vue`
  - `devRun.bat` 自动运行脚本
- 后端
  - koa
    - koa-router
- 数据库
  - mongodb

## :interrobang: 解决问题

|                                  问题                                  |                                 解决                                 |
| :--------------------------------------------------------------------: | :------------------------------------------------------------------: |
|                     登录注册页面密码框显示隐藏功能                     |                          修改 input 的 type                          |
|                         前后端修改代码自动构建                         |                               nodemon                                |
|                             http 请求封装                              |                    axios 直接添加在 vue 的原型上                     |
| postman 调用 api 显示 doesn't work properly without JavaScript enabled | history 模式使用的中间件默认 Accept 类型是网页，修改为需要的类型即可 |
