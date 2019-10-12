// 字符串模板
let a = '111111';
let b = `${a}222222`;
// document.write(b);

let a1 = 'h';
let b1 = 'hongbaojin';
// document.write(b1.indexOf(a1) > -1); // ES5 indexOf 输出的是 下标，从 0 开始
// document.write(b1.includes(a1)); // ES6

// 二进制声明 Binary
let binary = 0B010101
// console.log(binary);
// 八进制声明 Octal
let octal = 0o666;
// console.log(octal);

// json数组格式 转化 成 普通数组
let json = {
  '0' : 'Hong',
  '1' : 'Bao',
  '2' : 'jin',
  length: 3
}
let arr = Array.from(json);
// console.log(arr);

// 把 字符串 转换成 数组
let arr1 = Array.of(1, 2, 3);
// console.log(arr1);

// find() 实例方法
let arr2 = ['h', 'b', 'j'];
// console.log(
//   arr2.find(function(value, index, arr2){
//     return value == 'j'
//   })
// )

// entries 合并
let arr3 = ['Hong', "Bao", 'jin'];
let arr4 = arr3.entries();
// console.log(arr4.next().value);
// console.log(arr4.next().value);
// console.log(arr4.next().value);

// 对象的函数解构 json
let json1 = {
  a: 'Hong',
  b: 'Baojin'
}
function fun({a, b}){
  console.log(a, b);
}
// fun(json1);

// 数组遍历 forEach filter some map
var arr5 = ['a', 'b', 'c'];
// arr5.forEach((val, index) => console.log(index, val))
// arr5.filter(x => console.log(x))
// arr5.some(x => console.log(x))
// console.log(arr5.map(x => 'web'))
// console.log(arr5.toString()) // 转换成字符串
// console.log(arr5.join('-'))

// 对象的简写
let name = 'hbj';
let skill = 'web';
// let obj = { name: name, skill: skill }; // ES5
let obj = { name, skill }
// console.log(obj);

// key值的构建
let key = 'skill';
var obj1 = {
  [key] : 'web'
}
// console.log(obj1);

// ===同值相等，is严格相等
// console.log(+0 === -0);
// console.log(NaN === NaN);
// console.log(Object.is(+0, -0));
// console.log(Object.is(NaN, NaN));

let a2 = { a2: 'hbj' };
let b2 = { b2: 'web' };
let c2 = Object.assign(a2, b2);
console.log(c2);