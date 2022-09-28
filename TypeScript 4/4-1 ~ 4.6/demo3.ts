/**
 * todo 类中的泛型
 */

// interface Item {
//   name: string;
// }

// class DateManager<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// const data = new DateManager<number>([1]);
// data.getItem(0);

// const data = new DateManager([
//   {
//     name: 'dell',
//   },
// ]);

// interface Test {
//   name: string;
// }

// const data = new DateManager<string>([]);

// 如何使用泛型作为一个具体的类型注解
function hello<T>(param: T) {
  return param;
}

const func: <T>(param: T) => T = hello;
