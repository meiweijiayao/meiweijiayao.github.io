// 登录
jQuery(document).ready(function($) {
    	$('.theme-login').click(function(){
    		$('.theme-popover-mask').fadeIn(100);
    		$('.theme-popover').slideDown(200);
    	})
    	$('.theme-poptit .close').click(function(){
    		$('.theme-popover-mask').fadeOut(100);
    		$('.theme-popover').slideUp(200);
    	})
    })
// 鼠标划过的显示与隐藏
function gopage(n) 
    {
    	var tag = document.getElementById("menu").getElementsByTagName("li");
    	var taglength = tag.length;
    	for (i=1;i<=taglength;i++)
    	{
    		document.getElementById("m"+i).className="";
    		document.getElementById("c"+i).style.display='none';
    	}
    	document.getElementById("m"+n).className="";
    	document.getElementById("c"+n).style.display="";
    }
    function hide(n){
    	var tag = document.getElementById("menu").getElementsByTagName("li");
    	var taglength = tag.length;
    	for (i=1;i<=taglength;i++)
    	{
    		document.getElementById("m"+i).className="";
    		document.getElementById("c"+i).style.display='none';
    	}
 
    	document.getElementById("m"+n).className="";
    	document.getElementById("c"+n).style.display="";
    	document.getElementById("notice").style.display="none"; 
    }
// 自动播放图片
    window.onload=function(){
    var wrap=document.getElementById('wrap'),
        pic=document.getElementById('pic'),
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;

      function auto(){
        timer=setInterval(function(){
          index++;
          if(index>=list.length){
            index=0;
          }
          change(index);
        },2000);  
      }
      auto();

      function change(curIndex){
        pic.style.marginTop=-315*curIndex+'px';
        for(var n=0;n<list.length;n++){
            list[n].className='';
        }
          list[curIndex].className='on';
          index=curIndex;
       }
       wrap.onmouseover=function(){
          clearInterval(timer);
       }
       wrap.onmouseout=auto;
       for(var i=0;i<list.length;i++){
          list[i].id=i;
          list[i].onmouseover=function(){
            change(this.id);          
          }
        }
   }

//默认选项卡切换
   $(document).ready(function($){
   $("#normaltab").tabso({
		cntSelect:"#normalcon",
		tabEvent:"mouseover",
		tabStyle:"normal"
	});
});