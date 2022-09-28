// 原型，方法名，参数所在的位置
function paramDecoratr(target: any, key: string, paramIndex: number): any {
  console.log(target, key, paramIndex);
}

class Test {
  getInfo(@paramDecoratr name: string, age: number) {
    console.log(name, age);
  }
}

const test = new Test();
test.getInfo('Dell', 30);
