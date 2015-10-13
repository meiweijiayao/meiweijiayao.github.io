function judge(){
	var users=document.getElementById("user").value;
	var password=document.getElementById("pass").value;
	if(users.length==0 || password.length==0){alert("用户名或密码不能为空！");}
}