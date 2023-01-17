
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 题目记录

### 3.5 cli初试

目标：创建一个get请求的接口/range，参数是怕params的num，当传递num为5时，响应客户端，一组数据：

```
{
  code: 0,
  msg: "请求成功",
  data: ['1', '2', '3', '4', '5']
}
```

注意：

- 第三方库产生的arr
- arr里面是string
- 加分：判断num参数传递是否正确
- 加分：代码文件名，方法名等

## 后端思维

### 前端看后端

1. API：编写逻辑 >>> 打包 构建 部署
2. web服务：web服务器 restful api 日志统计 安全+性能 权限控制 >>> sql查询 性能优化 安全
3. 数据库： 数据库服务 数据校验 数据备份

### OOP FP FRP

不同的编程范式，即写代码的方式和风格

- OOP: Object Oriented Programming 面向对象式编程
  抽象现象生活中的事务特征，对于理解友好
  封装性(高内聚低耦合)，继承性，多态性
- FP: Functional Programming 函数式编程
  确定的数据输入输出；没有"副"作用，相对独立
  引用透明，易于理解
  如今主流的vue/react中的书写方式
- FRP: Functional Reactive Programming 函数式响应式编程
  适合需要对事件流进行复杂组合应用的场景
  响应式多用在异步的场景
  典型案例：rxjs，广告推荐

### AOP(Aspect Oriented Programming) 面向切面编程

- AOP特点
  扩展功能方便，不影响业务之间的逻辑
  逻辑集中管理
  更有利于代码复用
- AOP能在不破坏封装功能的前提下，额外增加功能

### IOC DI

- IOC: Inversion Of Control 控制反转
  一种面向对象编程的设计原则，用来减低计算机代码之间的耦合度，其基本思想是：借助于"第三方"实现具有依赖关系的对象之间的解耦。
- DI: Dependency Injection 依赖注入
  IOC的具体实现，是一种用于实现IOC的设计模式，它允许在类外创建依赖对象，并通过不同的方式将这些对象提供给类。

****

### nestjs几个主要概念  

- 客户端  
  ->请求
  <-响应
- 控制器
  ->使用服务
  <-依赖注入
- 服务
  ->数据库
  <-持久化
- 数据接入

- Controller层负责处理请求，返回响应
- Service层负责提供方法和操作，只包含业务逻辑
- Data Access层负责访问数据库中的数据

### nestjs生命周期

客户端 > 中间件 > 守卫 > 拦截器 > 管道 > 控制器 > 服务 > 拦截器 > 过滤器 > 响应 > 客户端

### nestjs模块

- 功能模块
- 共享模块
  功能模块和共享模块是一回事，只是叫法不一样
- 全局模块
  通常应用在配置，数据库链接，日志上
- 动态模块
  在使用该模块时才初始化

### MVC DTO DAO

- MVC：Model View Controller 模型 视图 控制器
  MVC是一种软件架构模式
  nestjs可以通过模板库实现View层，常见：pug、hus、ejs等
  nestjs默认集成express作为web服务器，可以换成koa/fastify
  controller响应前端的请求，model是对应的具体的数据库逻辑
- DTO：Data Transfer Object 数据传输对象
  接受部分数据
  对数据进行筛选
  不对应实体
  属性是小于等于实体
- DAO：Data Access Object 数据访问对象
  对接数据库接口
  不暴露数据库的内部信息
  对应实体

## 项目分析

### 项目分析前思考

- 项目用户痛点是什么？是角色设计？
- 用户功能的最小闭环式什么？内容查询&筛选？
- 辅助最小闭环的实现到项目上线，需要什么技术&方案？
  
### 项目需求分析

- 接口服务：提供可靠，可扩展的web服务，集成数据库+redis
- 实现最小闭环：接口CURD,登录注册(认证)、权限控制(鉴权)
- 服务部署与测试 -> 提供文档(需求、测试、部署、产品...)

### 项目技术栈

- Nextjs+Typescript作为后端
- ORM库：typeORM -> 官方的数据库对接方案
- Bootstrap5.x + Vue作为前端方案

### 开发思路

由简入繁，最小闭环为主

### 接口服务

请求数据校验 pipe -> 请求认证(鉴权设计) guard -> 路由  controller -> 功能逻辑 service -> 数据库操作 repository

### nestjs核心概念

- 控制器controllers：处理请求
- 服务services：数据访问与核心逻辑
- 模块modules：组合所有的逻辑代码
- 管道pipes：核验请求的数据
- 过滤器filters：处理请求时的错误
- 守卫guards：鉴权与认证相关
- 拦截器interceptors：给请求与响应加入额外的逻辑
- 存储库repository：处理在数据库中数据

### 通用后端框架需要考虑的4个核心部分

- 从开发层面思考
- 从功能层面思考
- 从接口安全层面思考
  
### 关于接口服务

- 接口服务：配置 日志 数据库操作
- 多环境配置->生产，测试->数据库
- 通用模块：用户、权限、菜单、日志
- 最后：接口文档，接口请求安全&性能

### 多环境配置方案

1. dotenv 简单的配置，直解析.env文件
2. config
3. js-yaml
4. cross-env

终端改变当前项目环境变量：mac：export NODE_ENV=production; window: set NODE ENV=production

### 官方nestjs/config

该@nestjs/config包在内部使用dotenv。
