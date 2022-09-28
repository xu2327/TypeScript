# 一抹晨曦

这个项目是 学习 TypeScript 的基本使用，并最后实现做了一个 TypeScript 爬虫项目

## TypeScript 3

首先 TypeScript3 文件夹 是做了一个 TypeScript 的一个爬虫工具，但是还没完善，只是实现了爬虫的主要功能,还有一些对 tsconfig.json 配置文件的简单了解，配置

## TypeScript 4

TypeScript 的语法进阶 主要学习的内容有：

- 联合类型
- 类型保护
- 枚举泛型
- 函数泛型
- 类中的泛型
- 命名空间 namespace
- parcel 打包 TS 代码
- 全局类型跟混合类型
- 泛型中 keyof 语法的使用

## TypeScript 5

使用 Express 框架开发数据爬出及展示接口

要注意的地方有 引入 express 框架和一些 node 里的方法的时候，要用 `@types/express`去解析这个框架，不然 typescript 识别不了，使用了 cookie-session 设置过期时间，实现了，用户自己要输入密码，输入成功了，才可以进行爬出代码，还有展示爬取到的 json 数据，用到了路由接口还有中间件，一些效果还是实现了，但还没有做优化

## TypeScript6

typeScript 的高级语法

- 类的装饰器
- 方法装饰器
- 访问装饰器
- 属性装饰器
- 参数装饰器

要注意的是 tsconfig.json 文件里要设置

```ts
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```

不然 TypeScript 解析不了装饰器，也就用不了

## TypeScript7

这个就是整个项目的核心了，使用装饰器做项目 涉及到的知识点有 创建控制器和装饰器，通过装饰器实现路由功能，多种请求方法装饰器的生成，中间件装饰器的编写，有助于优化代码，项目中最难的部分就是装饰器的实现以及搭配路由的使用了，会有点绕，不是那么好理解
