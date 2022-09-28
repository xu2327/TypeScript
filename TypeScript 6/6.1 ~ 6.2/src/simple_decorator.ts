function testDecorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'lee';
      getName() {
        return this.name;
      }
    };
  };
}

const Test1 = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test1 = new Test1('dell');
console.log(test1.getName());
