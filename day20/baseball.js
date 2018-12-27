$(document).ready(function(){

    var answer = [1,2,3];
    var p1 = [1,2,6]

    var strike = getStrike(answer, p1);
    var ball = getBall(answer, p1);

    if( strike == 0 && ball == 0){
        console.log('30');
    }else if( strike == 3){
        console.log('정답');
    }else if( strike == 0){
        console.log(ball+'B');
    }else if( ball == 0){
        console.log(strike+'S');
    }else{
        console.log(strike+'S'+ball+'B');
    }

    console.log(strike + 'S' + ball + 'B');

    function getStrike(arr1, arr2) {
        var  strike = 0;
        for(var i = 0; i<arr1.length; i++){
            if(arr1[i] == arr2[i]){
                strike++;
            }
        }
        return strike;
    }

    function getBall(arr1, arr2) {
        var ball = 0;
        for(var i = 0; i<arr1.length; i++){
            for(var j = 0; j<arr2.length; j++){
                // if( i == j) continue; 다른 표현 방법
                // short circuit evaluation  순서에 따라 동작이 조금씩 다르게 나타내는 경우
                if(  i != j && arr1[i] == arr2[j] )
                   ball++;
            }
        }
        return ball;
    }
});