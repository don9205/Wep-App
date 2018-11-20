
result = 0;

for (i = 2; i < 10; i++) {
	for (j = 2; j < 10; j++) {

		result = i * j;

		window.document.write(i + "X" + j + "=" + result + "<br>");

		console.log(i + "X" + j + "=" + result);

	}

}
// body태그 안의 내용들이 구성된 후(화면이 출력된 후) function(){} 
  window.onload = function () {

	alert('hello');
	printMulti();
	

  }




// 구구단 전체를 출력하는 함수
function printMulti() {
	for (var i = 2; i <= 9; i++) {

		multi(i);

	}

}

// a단을 출력하는 함수

function multi(a) {
	console.log(a + "단");
	for (var i = 1; i <= 9; i++) {

		printMul(a, i);

	}

}


function printMul(a, i) {
	var res = a * i;
	var str = "" + a + "x " + i + "=" + res;
	console.log(str);
}

var array = {name:"홍", age:21, address:"청주시"};
// key : 배열 array의 각 키값인 name, age, address를 가져온다.
for(var key in array) {

	console.log(key + " : " + array[key]);
}

// 배열이름.concat(배열이름2) : 배열을 합쳐서 출력하는 코드 
var array1 = [1, "123", 456];
var array2 = [789, "1234"];
console.log("concat() 함수예제");
console.log(array1.concat(array2));
console.log(array1);
console.log("push() 함수예제");
console.log(array1.push(000));
console.log("배열의 길이 : " + array1.length);
console.log("join() 함수예제")
// 배열을 구분자를 이용하여 하나의 문자열로 생성
console.log(array1.join(", "));
console.log("splice() 함수예제")
// 배열을 해당하는 번지부터 잘라내기를 하여 잘려진 부분을 반환하고, 원본은 수정된다
console.log(array1.splice(1));
console.log(array1);
console.log("slice() 함수예제");
console.log(array2.slice(1));
console.log(array2);
console.log("reverse() 함수예제");
console.log(array2.reverse());
console.log("sort() 함수예제");
// 모든 배열원소들을 문자열로  만든 후 비교하여 정렬
console.log(array2.sort());
console.log("문자열 비교");
console.log("a>b : "+ ('a'>'b'));
console.log("a>aa : "+ ('a'>'aa'));
console.log("a>A : "+ ('a'>'A'));

