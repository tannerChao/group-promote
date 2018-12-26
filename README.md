# group-promote
node + koa + mongodb/mysql + react 

项目简介
  node demo

1.0版本 前端--主要功能

|-我的介绍
  |-我的介绍
  |-介绍详情
  |-介绍编辑
|-我的团队
  |-我的介绍
  |-团费收益
  |-团员详情
|-提现
|-累计收入
  |-累计收入
  |-收入明细
|-绑定手机号
|-绑定银行卡
|-活动介绍
|-开团规则

工程--项目结构
|-config--配置文件目录
  |-config--基本配置
  |-mongodb--mongodb数据库
  |-db--其他数据库
|-controllers--切换控制
  |-switch-db--数据库切换
|-mongodb-sql--数据库sql层
  |-sql--sql方法层
|-demoState--临时提供的数据源
|-group-promote--组团项目（前端工程，一般使用，另一个git数据源download，demo工程提供）
|-lib--公共方法块
  |-error--错误处理
  |-succeed--成功处理
|-models--对象模块
  |-user
|-routes--路由匹配
|-public--公共资源
|-services--业务处理层
|-statics--静态资源
|-utils--公共方法
|-views--eject模版

开发团队



负责部门：***
负责人员：***
联系方式：Ainboys




技术栈：React + Mobx + React-router-dom(4.0)



- UI框架：Ant-mobile(https://ant.design/components/layout-cn/)



命令行

安装--node--工程
1 npm(cnpm) install 

安装--前端工程源--（此demo不需要）
2 

安装选择数据库
3 

测试
4 npm start




前端demo项目结构

|-config
  |-webpack-config.dev.js
  |-webpack-config.prod.js
|-public
  |-index.html
  |-webpack-config.prod.js
|-scripts
  |-build.js
  |-start.js
  |-test.js
|-src
  |-assets                  静态资源
  |-components              组件
  |-http                    请求(axios)
    |-index.js              
    |-interceptors.js       拦截器（请求/响应）
  |-router                  react-router-dom
    |-index.js              
    |-router.js             
    |-routes.js             路由结构
  |-store                   状态管理(mobx)
    |-index.js                 
  |-views                   视图
    |-home                  主页
    |-login                 登录
    |-user                    
      |-user.js             跨越推广  
    |-team               
      |-team-cost.js        团费收益
      |-team-details.js     团员详情
      |-team-my.js          我的
      |-index.js            导出设置
|-.gitignore           
|-.jsconfig.json            装饰器模式配置(mobx)
|-.package.json     

路由结构



路径别名



@        src
view     @/views
comp     @/components
http     @/http
store    @/store
router   @/router
