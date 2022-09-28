// function nameDecorator(target: any, key: string): any {
//   //   descriptor.writable = false;
//   const descriptor: PropertyDescriptor = {
//     writable: false,
//   };
//   return descriptor;
// }

// 修改的并不是实例上的 name，而是原型上的 name
function nameDecorator(target: any, key: string): any {
  target[key] = 'lee';
}

class Test {
  @nameDecorator
  name = 'Dell';
}

const test = new Test();
console.log(test.name);
