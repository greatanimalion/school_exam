window.onload = function() {
	var i = 0;
	var head_img_change1 = document.getElementById("head_img_contral_prev");
	var head_img_change2 = document.getElementById("head_img_contral_next");
	var picture1 = ["imagine/weixin-class-pro-2023.png", "imagine/banner-99.jpg", "imagine/download.jpg",
		"imagine/brief-1-1.jpg", "imagine/e2b263f366852b48f9ad0f7a409c928f.jpg"
	];
	var head_img = document.getElementById("head_imgp");
	head_img.src = picture1[i];
	var head_text = document.getElementById("head_text");
	var head_text_content = ["2023微信公开课Pro", "腾讯99公益日益不断完善全民公益的互联网解决方案",
	 "腾讯携手创业伙伴开放专利，以数字化解决碳排放",
		"腾讯公布二零二二年第三季度业绩", "游戏技术助益现实世界创行发展"
	];
	head_text.innerText = head_text_content[i];
	var head_small_text = document.getElementById("head_small_text");
	var head_small_text_content = ["点击回看腾讯年度旗舰活动\"2023微信公开课PRO-在场\"",
		"99公益一直秉持全公民的理念，鼓励网友通过网络将公益做成人人皆可参与的全名活动，为全名活动提供互联网解决方案", 
		"中国产业互联网发展联盟碳中和专业委员及开放基数联盟成立", " ",
		"游戏发展至今，其价值和意义远不止娱乐。增强现实和虚拟现实等游戏技术已成为解决现实世界的新方法"
	];
	head_small_text.innerText = head_small_text_content[i];
	var li=document.getElementsByTagName('li');
	var j=4;
	li[j].style.width="30px"
	li[j].style.backgroundColor="blue"
	function func() {
		if (i == 5) {
			i = 0
		}
		if (i == -1) {
			i = 4
		}
		if(j==5){
			j=0
			li[4].style.width="10px"
			li[4].style.backgroundColor="white"
			li[3].style.width="10px"
			li[3].style.backgroundColor="white"
		}
		if(j==-1){
			j=4
			li[0].style.width="10px"
			li[0].style.backgroundColor="white"
			li[1].style.width="10px"
			li[1].style.backgroundColor="white"
		}
		if(j==4){
			li[3].style.width="10px"
			li[3].style.backgroundColor="white"
		}
		head_img.src = picture1[i]
		head_text.innerText = head_text_content[i]
		head_small_text.innerText = head_small_text_content[i]
		li[j].style.width="30px"
		li[j].style.backgroundColor="blue"
		li[j+1].style.width="10px"
		li[j+1].style.backgroundColor="white"
		li[j-1].style.width="10px"
		li[j-1].style.backgroundColor="white"
	}
	
	head_img_change2.onclick=function(){
		i++
		j--
		func()
	
	}
	head_img_change1.onclick = function() {
		i--
		j++
		func()
	}
	var mid_body_title_text=document.getElementsByClassName("mid_body_title_text");
	
}
