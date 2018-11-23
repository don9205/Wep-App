var id = document.getElementById('id');
console.log(id);
console.log(id.valut);
console.log(id.classList);
var input = document.getElementsByTagName('input');
/**
 *  getElementsByTagName은 결과가 무조건 배열에 저장
 *  검색 결과가 0개 또는 1개여도 배열에 저장
 *  따라서 해당 객체에 접근하려면 배열 형태로 접근해야한다
 */
console.log(input); // 배열
console.log(input.value);
// 배열의 속성 value를 찾는데 없으니까 undifined 출력
console.log("id = " + input[0].value);
// 첫번째 input 태그에 있는 값
console.log("pw = " + input[1].value);
// 두번째 input 태그에 있는 값
console.log("input 태그의 갯수 : " + input.length);
for(var i = 0; i < input.length; i++) {

	input[i].value = "" + i;
}
/* 클래스 이름이 input인 첫번째 객체를 가져옴
 * document.getElementsByClassName('input')[0];
 * 와 같은 형태이다
 */
var qs = document.querySelector('.input');
console.log("document.querySelector('.input') 결과")
console.log(qs);
// 클래스 이름이 input이고 password인 객체를 가져옴
qs = document.querySelector('.input.password');
console.log("document.querySelector('.input.password') 결과")
console.log(qs);
/**
 * document.getElement?By???()과
 * document.querySelector???()의 차이는
 * getElement는 태그와 클래스를 섞어서 검색할 수 없는데
 * querySelector는 섞어서 검색할 수 있다
 */

 // id값을 불러와 + 계산하는 코드
function call() {

	var e1 = parseInt(document.getElementById('e1').value);
	var e2 = parseInt(document.getElementById('e2').value);
	
	result = parseInt(e1 + e2);

  alert(result);

}

// getElementsByTagName()로 구현한 코드
function printSum() {
	var sum = 0;
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i<2; i++) {
		// 각 input 태그에 있는 값(문자열)을 가져옴
		 var strNum = inputs[i].value;
		 // 가져온 값을 정수로 변환
		 var num = ParseInt(strNum);
		 // sum에 정수를 누적
		 sum += num;
	}
	alert(sum);
}

// getElementById()로 구현한 코드
function printSum2() {
	var strNum1 = document.getElementById('num1'.value);
	var strNum2 = document.getElementById('num2'.value);
	var num1 = parseInt(strNum1);
	var num2 = parseInt(strNum2);
	alert(num1 + num2);
}

// querySelectorAll()로 구현한 코드
function printSum3() {
	var sum = 0;
	var inputs = document.querySelectorAll('input');
	for(var i = 0; i<2; i++) {
		// 각 input 태그에 있는 값(문자열)을 가져옴
		 var strNum = inputs[i].value;
		 // 가져온 값을 정수로 변환
		 var num = ParseInt(strNum);
		 // sum에 정수를 누적
		 sum += num;
	}
	alert(sum);
}

// querySelector()로 구현한 코드
function printSum4() {
	var strNum1 = document.querySelector('input#num3'.value);
	var strNum2 = document.querySelector('input#num4'.value);
	var num1 = parseInt(strNum1);
	var num2 = parseInt(strNum2);
	alert(num1 + num2);
}