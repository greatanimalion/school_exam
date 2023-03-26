//页面查询
function getAllData(page, per_page) {
    var table = document.getElementById('table');
    // ajax读取本地的文件
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/food/getInfoByPage",
        dataType: "JSON",
        data: {
            page,
            per_page
        },
        success: function (result) {
            console.log(result);
            let arr = result.data;
            console.log(arr);
            var s = '';
            for (let i = 0; i < arr.length; i++) {
                //``(模板字面量)避免用若干个加号来实现字符串拼接，而改用更为优雅的语法来替代，由${Element}
                //str = "My name is \"" + name + "\". My age is " + age + ".";    //传统拼接方式
                // str = My name is "${name}". My age is ${age}.;         //模板字面量方式
                s += 
                "<tr>"+
                     "<th>"+arr[i].name+"</th>"+
                     "<th>"+arr[i].price+"</th>"+
                     "<th>"+arr[i].desc+"</th>"+
                     "<th>"+arr[i].typename+"</th>"+
                     "<th>"+arr[i].typeid+"</th>"+
                     "<th>"+"<button onclick='delOne(\"" +arr[i]._id +"\")'>删除</button>"+"</th>"
                 "</tr>"
            }
            table.innerHTML = s;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function delOne(params) {
    console.log(params);
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/food/del",
        dataType: "JSON",
        data: {
            _id:params
        },
        success: function(result){
           console.log(result);
           alert("修改成功");
        },
        error: function(err){
   console.log(err);
        }
    })

}
//var id_1 = document.getElementById("acount").value;
var cont = document.getElementsByClassName("hidof");
for (i = 0; i < cont.length; i++) {
    cont[i].style.display = "none";
}

//当前页数
var page;

//每页数量
var per_page;
getAllData(page, per_page);
function search() {
    page = document.getElementById("page").value;
    per_page = document.getElementById("per_page").value;
    getAllData(page, per_page);
    document.getElementById("_page").innerHTML = `当前页数:${page}页${per_page}个`
}

//请求log页面的uesr查询id
let userid;
$.ajax({
    async: true,
    type: "post",
    url: "http://118.195.129.130:3000/users/getInfoByKw_users",
    dataType: "JSON",
    data: {
        kw:localStorage.getItem("passworld")
    },
    success:function(result){
        userid=result.data[0]._id
      //  alert(userid);
        console.log(userid)
    }

})

//置顶标签选着
function card(ent, classname) {
    let i, temp;
    for (i = 0; i < cont.length; i++) {
        cont[i].style.display = "none";
        document.getElementsByClassName("select")[i].style.background = ""
    }
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/user/inquire",
        dataType: "JSON",
        data: {
            "_id": userid
        },
        success: function (result) {
            console.log(result);
            document.getElementsByClassName("inframe")[0].innerHTML = `
            <div>性别:${result.data[0].sex}</div>
            <div>年龄:${result.data[0].age}</div>
            <div>电话:${result.data[0].phone}</div>
            <div>用户id:${result.data[0]._id}</div>
            <div>用户名:${result.data[0].us}</div>
            <div>密码:${result.data[0].ps}</div>
            <div>积分:${result.data[0].integral}</div>
            `
        }
    });
    temp = document.getElementsByClassName(classname)[0];
    temp.style.display = "block";
    document.getElementsByClassName(ent)[0].style.background = "white"
}

//显示个人主页
card('s2', 'order');

//用户修改信息显示
function id_change() {
    document.getElementById("addmes").style.display = "block";
}

//修改信息图框消失且上传修改数据
function func_change(q) {
    document.getElementById(q).style.display = "none";
    var _id_ = document.getElementById("change_id").value;
    var us_ = document.getElementById("change_us").value;
    var age_ = document.getElementById("change_age").value;
    var sex_ = document.getElementById("change_sex").value;
    var phone_ = document.getElementById("change_phone").value;
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/user/mod",
        dataType: "JSON",
        data: {
            us: us_,
            _id: _id_,
            age: age_,
            sex: sex_,
            phone: phone_
        },
        success: function (result) {
            console.log(result);
            alert("修改成功");
            getAllData(1,10);

        },
        error: function (err) {
            console.log(err);
            alert("修改失败");
        }
    })
}

//退出选项
function exit() {
    var a = confirm("真的要退出吗?");
    if (a == true) { location.href = "../登陆页面/log_html/log.html"; }

}
var display_add = document.getElementById("add_muen_");
display_add.style.display = "none"
function displayadd() {
    display_add.style.display = "block";
}
//添加菜品
function addconfirm() {
    var add_muen_name = document.getElementsByClassName("add_muen_name")[0].value;
    var add_muen_price = document.getElementsByClassName("add_muen_price")[0].value;
    var add_muen_des = document.getElementsByClassName("add_muen_des")[0].value;
    var add_muen_type = document.getElementsByClassName("add_muen_type")[0].value;
    var add_muen_num = document.getElementsByClassName("add_muen_num")[0].value;
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/food/add",
        dataType: "JSON",
        data: {
            name: add_muen_name,
            price: add_muen_price,
            desc: add_muen_des,
            typename: add_muen_type,
            typeid: add_muen_num
        },
        success: function (result) {
            console.log(result);
            alert("添加成功");
            display_add.style.display = "none";

        },
        error: function (err) {
            console.log(err);
            alert("添加失败")
        }
    })
}
//修改菜品
function changeconfirm() {
    var change_muen_name = document.getElementsByClassName("change_muen_name")[0].value;
    var change_muen_price = document.getElementsByClassName("change_muen_price")[0].value;
    var change_muen_des = document.getElementsByClassName("change_muen_des")[0].value;
    var change_muen_type = document.getElementsByClassName("change_muen_type")[0].value;
    var change_muen_num = document.getElementsByClassName("change_muen_num")[0].value;
    var change_muen_id = document.getElementsByClassName("change_muen_id")[0].value;
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/food/update",
        dataType: "JSON",
        data: {
            name: change_muen_name,
            price: change_muen_price,
            desc: change_muen_des,
            typename: change_muen_type,
            typeid: change_muen_num,
            _id: change_muen_id
        },
        success: function (result) {
            console.log(result);
            if (result.msg == "修改成功") alert("修改成功")
            else alert("修改失败")
            document.getElementById("change_muen_").style.display = "none";
        },
        error: function (err) {
            console.log(err);
        }
    })
}
//修改菜单展示与消失
document.getElementById("change_muen_").style.display = "none"
function displaychange() {
    document.getElementById("change_muen_").style.display = "block"
}
//查询用户
var table2 = document.getElementById("table2");
function getusers(page, per_page) {
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/order/getInfoByPage_order",
        data: {
            page,
            per_page
        },
        success: function (result) {
            console.log(result);
            var Arr = result.data;
            var str = '';
            for (let j = 0; j < Arr.length; j++) {
                str += 
                // <tr class="tr3">
                //     <th>${Arr[j].pay}</th>
                //     <th>${Arr[j]._id}</th>
                //     <th>${Arr[j].us}</th>
                //     <th>${Arr[j].amount}</th>
                //     <th>${Arr[j].time}</th>
                //     <th>${Arr[j].updatedAt}</th>
                //     <th><button onclick="del(${Arr[j]._id})">删除</th>
                // </tr>
            "<tr>"+
            "<th>"+Arr[j].pay+"</th>"+
            "<th>"+Arr[j]._id+"</th>"+
            "<th>"+Arr[j].us+"</th>"+
            "<th>"+Arr[j].amount+"</th>"+
            "<th>"+Arr[j].time+"</th>"+
            "<th>"+Arr[j].updatedAt+"</th>"+
            "<th>"+"<button onclick='delTwo(\"" +Arr[j]._id +"\")'>删除</button>"+"</th>"
        "</tr>"
            }
            table2.innerHTML = str;
        },
        error: function (err) {
            console.log(err);
        }
    })
}
getusers();
//删除菜品
function delTwo(param) {
    console.log(param);
    $.ajax({
        async: true,
        type: "post",
        url: "http://118.195.129.130:3000/order/del_order",
        dataType: "JSON",
        data: {
            _id:param
        },
        success: function(result){
           console.log(result);
           alert("修改成功");
        },
        error: function(err){
   console.log(err);
        }
    })

}
// function myFunction(event) { 
//     var x = event.target;
//     console.log(x)
//     // document.getElementById("demo").innerHTML =x.previousElementSibling.innerText ;
//   }
