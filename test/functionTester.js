/* 함수 선언문 */

function foo() {
  console.log('foo');
}

/* 생성자 함수 */

const poo = new Function(console.log('poo'));

/* 화살표 함수 표현식 */

const boo = () => {
  console.log('boo');
}

/* JS 함수는 함수의 실제 매개변수가 될수 있다. */

function testerA(arg) {
  arg();
}

testerA(foo); // foo

/* JS 함수는 함수의 반환값이 될 수 있다. */

function testerB(arg) {
  return arg;
}

testerB(foo)(); // foo

/* JS 함수는 할당명령문의 대상이 될 수 있으며, 동일비교의 대상이 될 수 있다. (함수 표현식) */

const testerC = function (arg) {
  return arg;
}

console.log(testerC(100));

/* 기본값 매개변수 */

function testerD(arg) {
  console.log(arg); // undefined
}

function testerE(arg = 1) {
  console.log(arg); // 1
}

/* 나머지 매개변수 */

function testerF(arg, ...rest) {
  console.log(rest);
}

testerF(1, 2, 3); // [2, 3]

/* 인자 객체 */

function testerG(arg, ...rest) {
  console.log(arguments);
}

testerG(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

/* 즉시 실행 함수 (IIFE) */

(function testerH() {
  console.log('Immediately Invoked Function Expression');
})();

/* 재귀함수 */

function testerI(arg) {
  if (arg == 3) return;
  console.log('Recursive Function');
  testerI(arg + 1);
}

testerI(0);

/* 중첩함수 (내부함수) */

function testerJ() {
  function nested() {
    console.log('Nested Function');
  }
  nested();
}

testerJ();

/* 콜백함수 */

function testerK(arg) {
  arg();
}

testerK(() => {
  console.log('Callback Function');
});