var btn = document.querySelector('#btnId');
var view = document.querySelector('.view');
function BMI(){
    var height = document.querySelector('#bodyH').value;
    var weight = document.querySelector('#bodyW').value;
    var result = 0;
    var str = '';
    if(height==''&& weight==''){
        alert('請輸入身高及體重');
        height=0;
        weight=0;
    }else if(weight==''){
        alert('請輸入體重');
        weight=0;
    }else if(height==''){
        height=0;
        alert('請輸入身高');
    }
    result = Math.round(parseInt(weight)/((parseInt(height)/100)^2)*100)/100;
    level(result);
    str = '<p>BMI值: '+result+level(result);+'</p>';
    view.innerHTML = str ;
}

function level(num){
    var numLevel  ;
    var str = '';
    if(num==0){
        numLevel = 4;
        
    }else if(num < 18.50){
        numLevel = 0;
    }else if(18.50 < num && num < 23.90){
        numLevel = 1;
    }else if(24.00 < num && num < 27.90){
        numLevel = 2;
    }else if(num>=27.90){
        numLevel = 3;
    }

    switch (numLevel) {
        case 0 :
                return '<p>體重判斷: 體重過輕</p>';
                break;
        case 1 :
                return '<p>體重判斷: 體重正常</p>';
                break;
        case 2 :
                return '<p>體重判斷: 體重超重</p>';
                break;
        case 3 :
                return '<p>體重判斷: 體重肥胖</p>';
                break;
        case 4 :
                return '<p>資料不足，請重新輸入</p>';
                break;
    }
}

btn.addEventListener('click',BMI,false);


