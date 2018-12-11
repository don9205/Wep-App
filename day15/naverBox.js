// window.onload();
// 여러개 있어도 하나밖에 인식못하고

// $(document).ready(function() {
// });
// 여러개 있어도 각각 인식한다

$(document).ready(function() {
  $('.auto-search').click(function() {

		// $('.auto-down').css('background-position', '-138px -60px')

		$('.auto-down').toggleClass('auto-change');
		$('#auto-box').toggleClass('display-block');
		
	});

  $('.item4').click(function() {

		$('.item4').toggleClass('auto-item4');
		$('.item4-plus').toggleClass('display-block');
		$('.hidden-box').toggleClass('display-block');
		$('.opacity').toggleClass('display-block');
		
		console.log('클릭');	

	});

	$('.hidden-exit').click(function() {

		$('.item4').removeClass('auto-item4');
		$('.item4-plus').removeClass('display-block');
		$('.hidden-box').removeClass('display-block');
		$('.opacity').removeClass('display-block');
    /* 정확한 사용을 위해서는 toggleClass보단 removeClass를 사용해주는것이 좋다 */
	});

});