$(document).ready(function(){

  // $('.check').click(function(){

	// function inputOn() {
	//	 $('.input').val($(this).val());
	//	// $(this).prop('checked','checked');
		
	//	 }
	// function inputOff() {
	//	$('.input').val($(this).val());
	//	// $(this).prop('checked','');
	// } 

	 // $(this).not(this).prop('checked', '');
	 // if($('.input').val() == $('.check').val()) {
	 //	inputOn();
	 // }
	 // else{
	 //	$('.input').val($('.check').val());
	 // }
	
	 // var input = $('input[type=text]');
	 // var check = $(this);
	 // if(input.val() == check.val()) {
	// 	$(input).remove();
		
	 // }
	 // else {
	 //	$('body').append('<input type="text" class="input">');
	 // }

	 //if( $('.input').val()!=0) {
   //$(this).not(this).prop('checked', '').remove('<input type="text" class="input">');
	 //}

  // if($(this).not(this)) {
	// $(this).change(inputOn); 
	// }
	// else {
	// $(this).change(inputOff);
	// }

	 		 // .prop('checked',''); 체크 설정 해제
			 // .prop('checked', 'checked'); 체크 설정		 
	// });

  // '태그[속성="속성명"]'
	/*$('input[type="checkbox"]').click(function(){
		 var input = $('input[type=text]');
		 var check = $(this);
		 // not(this) 체크박스 1개만 적용하도록 해주는 태그
		 // $('input[type="checkbox"]').not(this).prop('checked', '');

		 // 선택되지 않은 체크박스를 체크해제한다
		 $('input[type="checkbox"]').not(this).prop('checked','');
		 // 체크된 메뉴를 다시 체크하여 체크를 해제하는 경우는
		 // 체크의 value와 인풋창의 value가 같다.
     if(input.val() == check.val()) {
			 input.val('');
		 }
		 else{
			 input.val(check.val());
		 }
	});
  */




	$('input[type="checkbox"]').click(function() {
	// 인풋창에 입력된 문자열들을 받아와서 빈 문자열이 아니면 배열에 저장
	var arr = new Array();
	$('input[type=text]').each(function(){
		var text = $(this).val();
		$(this).val('');
		if(text !='') {
			arr.push(text);
		}
	});

	/* 
	텍스트창의 value값을 text에 저장
	*/

	// 클릭한 체크박스의 value를 가져옴
  var check = $(this);
	// 배열에 해당 체크박스의 value가 있는지를 확인합니다.
  var isContain = arr.indexOf(check.val());
	// 체크 박스의 value가 배열에 없고 배열의 길이가 2이면
	// 해당 체크박스의 체크를 비활성화
	if(isContain<0 && arr.length == 2){
		check.prop('checked','');
	}
	// 길이가 2가 아니면 해당 배열에 추가를 하고 해당 체그박스를 체크를 활성화 
  else if(isContain<0 && arr.length != 2){
		arr.push(check.val());
		check.prop('checked','checked');
	}
	// 체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
  else{
		arr.splice(isContain,1);
	}
	// 배열에 있는 문자열을 input창에 하나씩 뿌려줌
	for(var i=0; i<arr.length; i++){
		$('input[type=text]').eq(i).val(arr[i]);
	}

	});
});