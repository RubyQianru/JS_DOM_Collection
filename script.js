alert("Hello here I am!");

var a;
a = 123;
console.log(a);
a = Infinity;
console.log(typeof a);


var b = 789;
console.log(typeof b);

b = b.toString(); 
b = String(b);
b = Number(a);

console.log(Number.MAX_VALUE);

var bool = true;
bool = false;

c = undefined;
c = String(c);

d = "123px";
d = parseInt(d);
console.log(d);
console.log(typeof d);

true?alert("1"):alert("2");
a>b ?alert("1"):alert("2");

/*
1. js  严格区分大小写
2. js 每一条语句；结尾
3. js 中会忽略多个空格和换行
4. js 字面量 & 变量
    - 字面量都是不可改变的值 （比如1，2，3，4，5）
        可以直接使用，但我们不会直接使用字面量
    - 变量可以用来保存字面量，而且变量值可以任意改变
        变量更加方便使用
        在js中使用var来声明变量
5. js 标识符
    - js中所有可以有我们自主命名的都可以成为标识符
    - 如变量名、函数名、属性名
6. 数据类型：字面符的类型
    string 字符串 
    number 数值
        js中Number最大值 
            Number.MAX_VALUE
            如果使用Number表示的数字超过了最大值，会返回一个infinity
        NaN Not a Number
        浮点计算不精确
            不要使用js进行精确要求高的运算
    boolean 布尔值
        true false

    null 空值
    undefined 未定义
    object 对象


    可以使用一个运算符typeof 来检查一个变量类型 
7. 转换数据类型
    将数据类型转成String：toString(), String()
        不会改变原变量，但是会返回成一个string
        null和undefined没有toString()
    将数据类型转成Number：Number(), parseInt()把字符串抓换成整数，parseFloat()把字符串转换成浮点数
        parseInt(),parseFloat()先将转换成String，然后再操作
    将数据类型转成Boolean：Boolean()
        数字转：除了0和NaN其余都是true
        字符转：除了空串其余都是true
        null和undefine会转成false
8.进制
    表示16进制的数字，以0x开头
    表示8进制的数字，以0开头
    表示2进制的数字，以0b开头，不是所有浏览器都支持
9.一元运算符
    +正号
    -负号，对数字进行负号的取反
    对于非Number类型的值，先转化为Number然后再运算。可以将一个其他的数据类型用+，来转换为Number
10. 自增和自减
    ++：a++，++a
    a++的值等于原变量的值（自增前的值）
    ++a的值等于自增后的值
11. 三元运算符 ?:
    条件表达式？语句1：语句2；
12. 全等
    === 判断两个值是否全等，两个值需要类型相同
    ！== 不全等

*/