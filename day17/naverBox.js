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
	$('.api-list>li').hover(function(){
		//$('.api-list>li>a').toggleClass('display-none');
		$(this).children('a').toggleClass('display-none');
		//$('.api-list>li>div').toggleClass('display-block');
		$(this).children('div').toggleClass('display-block');
	});
	//box5-bottom가 6개인 그 중 선택할 박스 번호가 index
	var index = 1;
	function displayBox5(i){
		//6개를 일단 다 안보이게 하고 =>기존에 보였던 박스를 안보이게하기위해
		$('.box5-bottom').removeClass('display-block');
		//선택한 i번째를 보여준다.
		$('.box5-bottom').eq(i-1).addClass('display-block');
		$('.box5-item2>b').text(i);
		$('.location').removeClass('display-inline-block');
		$('.location').eq(i-1).addClass('display-inline-block');
	}
	displayBox5(index);
	$('.box5-next').click(function(){
		index++;
		//박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내준다.
		if(index > 6){
			index = 1;
		}
		displayBox5(index);
	});
	$('.box5-prev').click(function(){
		index--;
		//박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내준다.
		if(index <= 0){
			index = 6;
		}
		displayBox5(index);
	});

	$('.rank-left').click(function(){
		$('.rank-lists').first().css('display','block');
		$('.rank-lists').last().css('display','none');
		$(this).css('background-color','#f9fafc');
		$('.rank-right').css('background-color','#fff');
	});
	$('.rank-right').click(function(){
		$('.rank-lists').last().css('display','block');
		$('.rank-lists').first().css('display','none');
		$(this).css('background-color','#f9fafc');
		$('.rank-left').css('background-color','#fff');
	});
	$('.rank-lists').first().css('display','block');
	$('.rank-lists').last().css('display','none');

	$('.menu-setting').click(function(){
		$('.sub-menu-option').css('display','block');
		$('.item2s').css('display','inline-block');
		$('.item2').css('display','none');
		$('.checkRZ').css('display','inline-block')
	
	});
	$('.menu-no').click(function(){
		$('.sub-menu-option').css('display','none');
		$('.item2').css('display','inline-block');
		$('.item2s').css('display','none');
		$('.checkRZ').css('display','none')
	});


	$('input[type="checkbox"]').click(function() {
		var arr = new Array();
		$('.item2s>div>input[type=text]').each(function(){
			var text = $(this).val();
			$(this).val('');
			if(text !='') {
				arr.push(text);
			}
		});
		var check = $(this);
		var isContain = arr.indexOf(check.val());
		if(isContain<0 && arr.length == 5){
			check.prop('checked','');
		} 
		else if(isContain<0 && arr.length != 5){
			arr.push(check.val());
			check.prop('checked','checked');
		}
		else{
			arr.splice(isContain,1);
		}
		for(var i=0; i<arr.length; i++){
			$('.item2s>div>input[type=text]').eq(i).val(arr[i]);
		}
	
		});


});