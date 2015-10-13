window.onload=function()
	{            
	  var menus=document.getElementsByClassName("select");
      var uls=document.getElementsByTagName("ul");
      var text=document.getElementsByClassName("text1");
      for(var i=0;i<menus.length ; i++){
        menus[i].index=i;
        menus[i].onclick=function(){
            var ul=uls[this.index];
            var tex=text[this.index];
            if(ul.style.display==""){
                ul.style.display="block";
                tex.style.color="white";
                tex.style.background="#ADADAA";
            }else if(ul.style.display=="block"){
                ul.style.display=""; 
                tex.style.color=""; 
                tex.style.background="";  
            }
        }            
      }
    }