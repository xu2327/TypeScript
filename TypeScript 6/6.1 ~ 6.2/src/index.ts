// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接收的参数是一个构造函数
// 装饰器通过 @ 符号来使用

function testDecorator1(flag: boolean) {
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log('dell');
      };
    };
  } else {
    return function (constructor: any) {};
  }
}

@testDecorator1(true)
class Test {}

const test = new Test();

(test as any).getName();
