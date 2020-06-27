function Validator(options) {

	function validate(inputElement,rule)
	{
	
		var errorElement= inputElement.parentElement.querySelector('.messages');
		var errorMessage = rule.test(inputElement.value);
		if(errorMessage)
		{
			errorElement.innerText = errorMessage;
		}
		else
		{
			errorElement.innerText='';
		}
	}

	//Lấy element
	var formElement=document.querySelector(options.form);

	if(formElement)
	{		
		options.rules.forEach(function(rule){
		var inputElement = formElement.querySelector(rule.selector);
		
			if(inputElement)
			{
				inputElement.onblur=function()
				{
				validate(inputElement,rule);
				}
			}
		});	
	}			
}

Validator.isRequired= function(selector)
{
	return{
		selector:selector,
		test:function(value)
		{
			return value.trim()?undefined :'Không được để trống';
		}
		
	};
}
Validator.isEmail= function(selector)
{
	return{
		selector:selector,
		test:function(value)
		{	
			var regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

			return regex.test(value) ? undefined :'Vui lòng nhập lại email';
		}
	};
}
Validator.isPhone=function(selector)
{
		return{
		selector:selector,
		test:function(value)
		{
			var limit= /^\d{10}$/;
			return limit.test(value) ? undefined:'Số điện thoại không hợp lệ';
			
		}
	}
}
	function dangnhap() {
		alert('Đăng nhập thành công');

	}

	function dangky()
	{
		alert('Đăng ký thành công');
	}
	function thanhtoan()
	{
		alert('cam on đã mua hàng ');
	}
