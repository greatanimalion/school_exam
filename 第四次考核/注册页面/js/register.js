var time=0;//是否发送成功验证
function post_(){
    var maill=document.getElementById("YOUXIANG").value;
$.ajax({
    async: true,
    type: "post",
    url: "http://118.195.129.130:3000/user/getMailCode",
    dataType: "JSON",
    data: {
       mail:maill
    },
    success: function (result) {
        console.log(result);
        let arr=result.msg
        console.log(arr);
        if(arr=="发送失败，请稍后再试"){
            alert("发送失败，请稍后再试");
        }
        else{ 
             alert("注册成功");
             time++;
            }
    },
    error: function (err) {
        console.log(err)
    }
})
}
function okRegister(){
    if(time==1){
        location.href="../../登陆页面/log_html/log.html"
    }
    else{
        alert("请输入验证码");
    }
}