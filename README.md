## cat-vue-admin
这是我用 vue 做后台管理系统的基础模板，集成了 element-ui、vuex、axios、less ，同时加上了自己开发以来常用的接口封装方法、路由配置等，在这个基础上针对单个项目做差异化配置，可以让我高效率地开发。
## 怎么使用
```
git clone git@github.com:GitHubJackson/cat-vue-admin.git
cd cat-vue-admin
npm install
npm run serve // 运行
npm run build // 打包
```
## 目录结构
```
+ public
+ src
  + assets                  // 静态资源
  + components              // 公共组件
  + router                  // 路由配置
  + store                   // vuex 存储
  + utils                   // 工具函数
    - request.js              // 封装接口函数
    + api                     // 接口文件
      - index.js              
  + views                   // 页面
    + layout                  // 布局
      + components              // 某页面独有的组件
    + ...                     // 其他页面
  - App.vue
  - main.js
- package.json
```
## 其他
我会对这个小项目继续优化和更新，欢迎提 issue ，一起进步 ~

## 联系我
个人博客：[JacksonZhou's Blog](http://www.wuyanqin.xyz)
微信：13692001164(请做好备注)
