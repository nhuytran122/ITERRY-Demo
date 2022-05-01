// confirm('Ban la sinh vien?');
// console.log('Đây là web của tớ');
// prompt('Bạn là sinh viên năm mấy nhỉ?');

function Sign_up() {
// 	// Get the value of the input field with id="numb"
// 	let x = document.getElementsByClassName("inf")
// 	// If x is Not a Number or less than one or greater than 10
// 	let text;
// 	if (isNaN(x) || x < 1 || x > 10) {
// 	  text = "Input not valid";
// 	} else {
// 	  text = "Input OK";
// 	}
// 	document.getElementsByID("demo").innerHTML = text;
//   }
	alert('Đăng ký tài khoản thành công! Bạn có thể đăng nhập rồi nhé!');
}

function btnCmt(){
	alert('Cảm ơn lời góp ý của bạn!')
}

function btnRate(){
	alert ('Cảm ơn đánh giá của bạn! Hãy tiếp tục trải nghiệm web nhé!')
}


var input = document.querySelector('.input');
var items = Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn){
	btn.addEventListener('click', function(){
		if(input.innerHTML=='0')
			input.innerHTML='';
		if(btn.innerHTML=='AC')
			input.innerHTML='0';
		else if(btn.innerHTML=='DEL'){
			var arrtext=Array.from(input.innerHTML);
			arrtext.splice(arrtext.length-1,1);
			if(arrtext.length!=0)
				input.innerHTML=arrtext.join('');
			else input.innerHTML='0';
		}
		else if(btn.innerHTML=='='){
			input.innerHTML=eval(input.innerHTML);
		}
		else input.innerHTML+=btn.innerHTML;
	})
})
