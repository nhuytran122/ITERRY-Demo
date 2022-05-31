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
//Tạo mới một mảng
var items = document.querySelectorAll('.item');
items.forEach(function(btn){
	btn.addEventListener('click', function(){
		//Để tránh trường hợp: 0123 --> 123
		if(input.innerHTML == '0')
			input.innerHTML = '';
			
		if(btn.innerHTML == 'AC')
			input.innerHTML = '0';

		else if(btn.innerHTML == 'DEL'){
			var arrtext = Array.from(input.innerHTML);
			arrtext.splice(arrtext.length-1, 1);
			if(arrtext.length != 0)
				//Nối các phần tử của mảng lại với nhau thành một chuỗi, 
				//các phần tử được ngăn cách nhau bởi kí tự:
				input.innerHTML = arrtext.join('');
			else input.innerHTML = '0';
		}

		else if(btn.innerHTML == '='){
			//Giúp tính toán các string có số và các phép toán
			input.innerHTML = eval(input.innerHTML);
		}

	//Để nhập các số
		else input.innerHTML += btn.innerHTML;
	})
})



