$(document).ready(function(){
	$('.auto-search').click(function(){
		$('#auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('auto-up');
	});
	$('.item4').click(function(){
		menu();
	});
	$('.menu-close').click(function(){
		menu();
		// $('.sub-menu').removeClass('display-block');
		// $('.sub-menu-background').removeClass('display-block');
	});
	function menu(){
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	}
	//div는 ul태그를 감싸는 객체의 선택자명
	//h는 marginTop의 높이
	//time은 이동하는데 걸리는 시간
	var ticker = function(div,h,time)
	{
		timer = setTimeout(function(){
			$(div+' li:first').animate( {marginTop: h}, time, function()
				{
					//여기서 this는 item5클래스 안에 있는 ul태그 안에 있는 첫번째 
					//li태그 객체
					//datach는 해당 객체를 제거한 후 해당 객체를 리턴한다.
					$(this).detach().appendTo(div+'>ul').removeAttr('style');
				});
			ticker(div,h,time);
		}, 2000);         
	};
	ticker('.item5','-20px',400);
	ticker('.news-content','-20px',600);
	
	$('.item5').hover(function(){
		$('.real-search-box').toggleClass('display-block');
	});

	// 신문 구독 토글
  //	$('.api-list-li-1').hover(function() {

	//	$('.api-list-box').toggleClass('display-block');

	//});


	/* 내가 해본 버튼 구현
	  $('.box5-next').click(function() {

		$('.b1').toggleClass('display-none');
		$('.color-black').text('1');

		SetText();

	});

	$('.box5-prev').click(function() {

		$('.b2').toggleClass('display-none');
		$('.color-black').text('2');

	});
	


	function SetText() {

		SetText = document.getElementById('.Color-black').text();
    SetBox = document.getElementById('.box5-bottom>div').className();


	} 
	 
	*/


  // 신문 구독 호버
	$('.api-list>li').hover(function () {

		/*$('.api-list>li>a').toggleClass('display-none');*/
		$(this).children('a').toggleClass('display-none');
		/*$('.api-list>li>div').toggleClass('display-block');*/
		$(this).children('div').toggleClass('display-block');
		/* 현재 이벤트가 실행중인 객체만 적용하는것 $((this).children('객체이름')).toggleClass('display-none'); */

	});



	// box5-bottom의 6개 중 선택할 박스 번호가 index
	var index = 1;
	function displayBox5(i) {
    // 6개를 일단 다 안보이게 하고 => 기존에 보였던 박스를 안보이게하기위해
		$('.box5-bottom').removeClass('display-block');
		// 선택한 i번째를 보여준다.
		$('.box5-bottom').eq(i-1).addClass('display-block');
		$('.box5-item2>b').text(i);
		$('.location').removeClass('display-inline-block');
		// 선택한 i번째를 보여준다.
		$('.location').eq(i-1).addClass('display-inline-block');
		
	}

	displayBox5(index);
  $('.box5-next'). click(function() {
		index++;
		// 박스가 6개이기 때문에 7번째를 넘으면 첫번째로 보내준다.
		if(index > 6) {
			index = 1;
		}
		displayBox5(index);

	});

	$('.box5-prev'). click(function() {
		index--;
		// 박스가 6개이기 때문에 7번째 가려고 하면 첫번째로 보내준다.
		if(index <= 0) {
			index = 6;
		}
		displayBox5(index);

	});

	var selectedMenuCnt = 0; // 사용자가 지정한 메뉴 갯수
	var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","weptooni"]
	$('.menu-setting').click(function(){
		var cnt = 0;
		$('item2-1').each(function(){
			$(this).prop('class','item2-1');
			cnt++;
			// 화면에 표시되는 메뉴 갯수
			if(cnt > 5){
				$(this).addClass('display-none');
			}
		});
    
   
	});
 
	$('.menu-close').click(function() {

		if(selectedMenuCnt == 0){
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);
			});
		}
		
	});

});

