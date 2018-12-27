$(document).ready(function(){
	$('.all').click(function(){
		/* prop('속성','값') : 해당 객체의 속성을 값으로 설정
			 prop('속성')      : 해당 객체의 속성 값을 가져옴 
			 css('속성','값')  : 해당 객체의 css의 속성을 값으로 설정
			 css('속성')       : 해당 객체의 css  속성의 값을 가져옴
			 text('값')        : 해당 객체의 텍스트 값을 설정
			 text()            : 해당 객체의 텍스트 값을 가져옴
			 val('값')         : 해당 객체의 value 값을 설정
			 val()             : 해당 객체의 value 값을 가져옴
			 */
		$('.check').prop('checked',$(this).prop('checked'));
	});	
  // 방법1
	// if($(this).prop('checked')){
	// $('.check').prop('checked','checked');
	// }else{
	// $('.check').prop('checked','');
	// }
  // 방법2
	// if($(this).is(':checked')){
	// $('.check').prop('checked','checked');
	// }else{
	// $('.check').prop('checked','');
	// }
  // 방법3
	// $('input[type=checkbox]').prop('checked',$(this).prop('checked'));
	// 방법4
	// var checked = $(this).prop('checked');
  // $('input[type=checkbox]').each(function(){
  //  $(this).prop('checked',checked);
	// });
});