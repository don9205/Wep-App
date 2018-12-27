$(document).ready(function(){
	$('.auto-search').click(function(){
		$('#auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('auto-up');
	});
	$('.item4').click(function(){
		// 접기 또는 더보기 버튼을 클릭하면 메뉴에 있는 배열을 임시 배열에 저장한다.

		// 접기 버튼을 눌렀을 때 확인을 거치지 않은 선택된 메뉴들을 제거하는 작업
		selectedMenu = menuArr2.slice();

		// 사용자가 선택한 메뉴 또는 기본 메뉴를 출력하는 기능
		displayMenu();

		// 선택된 사용자 메뉴의 값을 이용하여 체크박스의 체크 여부를 결정
		menu();
		checkMenu();
		closeSubMenu();

		// 체크박스가 없는 라벨을 클릭시 아무 동작을 하지 않도록 해주는 기능
		initCheck();

	});
	// $('.menu-close').click(function(){
	// 	menu();
	// 	// $('.sub-menu').removeClass('display-block');
	// 	// $('.sub-menu-background').removeClass('display-block');
	// });

	// 더보기를 누르면 나타나는 박스에 관한 함수
	function menu(){
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	}
	//div는 ul태그를 감싸는 객체의 선택자명
	//h는 marginTop의 높이
	//time은 이동하는데 걸리는 시간
	var ticker = function(div,h,time) // 매개변수를 주지않으면 각각 만들어야하기때문에
	{
		timer = setTimeout(function(){
			$(div+' li:first').animate( {marginTop: h}, time, function() // 여기서 div는 선택자 
				{
					//여기서 this는 item5클래스 안에 있는 ul태그 안에 있는 첫번째 
					//li태그 객체
					//datach는 해당 객체를 제거한 후 해당 객체를 리턴한다.
					$(this).detach().appendTo(div+'>ul').removeAttr('style');
				});
			ticker(div,h,time); // 재귀함수로 다시 불러옴
		}, 2000);         
	};
	// 함수들을 호출
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
  // 급상승 검색어에 마우스를 같다대면 나오는 박스의 1~10위와 11~20순위를 표시하는 기능함수
	$('.rank-left').click(function(){
		$('.rank-lists').first().css('display','block');
		$('.rank-lists').last().css('display','none');
		$(this).css('background-color','#f9fafc');
		$('.rank-right').css('background-color','#ffffff');
	});
	$('.rank-right').click(function(){
		$('.rank-lists').last().css('display','block');
		$('.rank-lists').first().css('display','none');
		$(this).css('background-color','#f9fafc');
		$('.rank-left').css('background-color','#ffffff');
	});
	$('.rank-lists').first().css('display','block');
	$('.rank-lists').last().css('display','none');

	// 기본으로 표시되는 사전~...~웹툰을 저장하는 배열
	var menuArr = ["dici", "newsi", "stocki", "dealeri", "mapi", 
		"moviei", "musici", "booki", "webtooni"];
	// 더보기-메뉴설정을 클릭하면 나타나는 항목들에 관한 기능함수	
	$('.menu-setting').click(function(){
		createCheck();
		/* 메뉴 설정 클릭 시 5개의 빈 박스를 보이기 위한 cnt */
		var cnt = 0;
		$('.item2-1').each(function(){
			/* 기본 코드에 item2-1과 back-lmg와 각 아이콘 클래스가 있는데
			back-img와 아이콘 클래스를 제거하기 위해 prop함수로 class를 덮어쓰기한다   */
			if(menuArr2.length <= cnt){
				$(this).prop('class','item2-1');
				if(cnt > 4){
					$(this).addClass('display-none');
				}
			}
      cnt++;
		});
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).removeClass('display-none');
		});
	 $('.all-service').addClass('display-none');
	 $(this).addClass('display-none');
	 $('.ok').removeClass('display-none');
	 $('.init').removeClass('display-none');
	 $('.cancel').removeClass('display-none');
	});

	// 메뉴에 있는 X버튼을 클릭했을 때
	$('.menu-close').click(function(){
		menu();
		closeSubMenu();
		selectedMenu = [];
		checkMenu();
		initCheck();
	});

	// 메뉴설정-취소버튼을 클릭했을 때
	$('.cancel').click(function(){
		initCheck();
		checkMenu();
		selectedMenu = menuArr2.slice();
		$('.all-service').removeClass('display-none');
		$('.menu-setting').removeClass('display-none');
		$('.ok').addClass('display-none');
		$('.init').addClass('display-none');
		$('.cancel').addClass('display-none');
		var i = 0;
		// 설정된 배열의 길이가 0일때
		if(menuArr2.length == 0){
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);
			});
		// 배열의 길이가 0보다 클 때
		}else{
			$('.item2-1').each(function(){
			 if(menuArr2.length > i){	
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr2[i++]);
			 }else{
				$(this).prop('class','item2-1 display-none');
			 }
			});
		}
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).addClass('display-none');
		});
	});
  /* 메뉴 설정에서 선택한 메뉴들을 저장하는 배열 */
	var selectedMenu = [];
	/* 실제 네이버에서 뿌려줄 메뉴 */
	var menuArr2 = [];
	$('.sub-menu-div input[type="checkbox"]').click(function() {


		// 클릭한 체크박스의 value를 가져옴
		var check = $(this);
		// 배열에 해당 체크박스의 value가 있는지를 확인합니다.
		var isContain = selectedMenu.indexOf(check.val());
		var maxSize = 5;
		// 체크 박스의 value가 배열에 없고 배열의 길이가 2이면
		// 해당 체크박스의 체크를 비활성화
		if(isContain<0 && selectedMenu.length == maxSize){
			check.prop('checked','');
		}
		// 길이가 2가 아니면 해당 배열에 추가를 하고 해당 체그박스를 체크를 활성화 
		else if(isContain<0 && selectedMenu.length != maxSize){
			selectedMenu.push(check.val());
			check.prop('checked','checked');
		}
		// 체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
		else{
			selectedMenu.splice(isContain,1);
		}
		var cnt = 0;
		$('.item2-1').each(function(){
      if(cnt < selectedMenu.length){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(selectedMenu[cnt++]);
			}
			else{
				$(this).prop('class','item2-1');
				if(cnt > 4)
				 $(this).addClass('display-none');
				 cnt++;
			}
		})
	});
	// 메뉴설정-확인 버튼을 클릭했을 때
	$('.ok').click(function(){
		menuArr2 = selectedMenu.slice();
		menu();
		closeSubMenu();
		initCheck();
	});
	// 메뉴설정-초기화 버튼을 클릭했을 때
	$('.init').click(function(){
		menuArr2 = [];
		selectedMenu = [];
		closeSubMenu();
		menu();
		alert('초기 설정으로 돌아갑니다.')
		checkMenu();
		initCheck();
	});

	// 더보기-메뉴설정을 클릭했을때 밑에 박스가 다른 메뉴로 변하게 하는 함수
	function menu(){
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	}
  // menuArr2에서 저장된 값들만 check가 되도록 하는 함수
	function checkMenu() {
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).prop('checked','');
      for(var i = 0; i<menuArr2.length; i++){
				if($(this).val() == menuArr2[i]){
					$(this).prop('checked', 'checked');
				}
			}
		});
	}
  // 각 메뉴에서 X버튼에 대한 함수를 구현
	function closeSubMenu() {
		
		// 
		displayMenu();

		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).addClass('display-none');
		});
		$('.all-service').removeClass('display-none');
		$('.menu-setting').removeClass('display-none');
		$('.ok').addClass('display-none');
		$('.init').addClass('display-none');
		$('.cancel').addClass('display-none');

		// subDetailMenu함수는 더보기 버튼 클릭시 오른쪽 상단에 보이는 메뉴를 
		// 0이면 보이지 않고 1이면 다시 보여준다
	  //	subDetailMenu(0);

	}
  /* 
	function subDetailMenu(toggle){
		if(toggle == 0){
			$('.all-service').removeClass('display-none');
			$('.menu-setting').removeClass('display-none');
			$('.ok').addClass('display-none');
			$('.init').addClass('display-none');
			$('.cancel').addClass('display-none');
		}else{
			$('.all-service').removeClass('display-none');
			$('.menu-setting').removeClass('display-none');
			$('.ok').addClass('display-none');
			$('.init').addClass('display-none');
			$('.cancel').addClass('display-none');
		}
	}
	*/

	// 메뉴설정-초기화를 눌렀을 때 구현되는 함수
	function initCheck(){
		$('.sub-menu-div label').each(function(){
      $(this).prop('for','');
		})
	}

  // 메뉴설정-확인을 눌렀을 때 구현되는 함수
	function createCheck(){
		var i = 0;
		var checkbox = $('.sub-menu-div input[type=checkbox]');
		$('.sub-menu-div label').each(function(){
      $(this).prop('for',checkbox.eq(i++).prop('id'));
		})
	}
	function displayMenu(){
		var i =0;
		if(menuArr2.length == 0){
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);
			});
		}else{
			$('.item2-1').each(function(){
			 if(menuArr2.length > i){	
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr2[i++]);
			 }else{
				$(this).prop('class','item2-1 display-none');
			 }
			});
		}

	}
});
