
function login(acount, password) {
    // ajax读取本地的文件
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/user/login",
        dataType: "JSON",
        data: {
            us: acount,
            ps: password
        },
        success: function (result) {//result:服务器返回的json
            if (result.msg == "登录成功") {
                alert("登录成功");
                // localStorage.setItem("pass_Word","12");
                location.href = "../../管理页面/index.html";
            }
            else {
                alert("账号或密码错误");
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}
//判断用户账号信息是否跳转网页
function isPrime() {
    var useraccunt = document.getElementById("acount").value;
    var userpasswoed = document.getElementById("password").value;
    localStorage.setItem("passworld", useraccunt);
    login(useraccunt, userpasswoed);

}

//跳转注册页面
function creatuser() {
    location.href = "../../注册页面/registerhtml/register.html"
}
