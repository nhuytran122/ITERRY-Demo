function Sign_up() {
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



