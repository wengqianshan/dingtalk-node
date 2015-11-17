# 钉钉SDK node版

### 使用方法

#### 安装

````
npm install dingtalk-node
````

#### 使用


````
var API = require('dingtalk-node');

var api = new API({
    domain: 'https://oapi.dingtalk.com',
    cid: 'CorpID',
    secret: 'CorpSecret',
    redirect_uri: 'REDIRECT_URI'
});


//获取部门列表
api.departmentList(function(err, res) {
    var ds = res.department;
    ds.forEach(function(item) {
        console.log(item);
    })
});
````
### API列表

API命名为驼峰式，转换规则为[lodash#camelCase](https://lodash.com/docs#camelCase) 例如：
````
//获取部门列表接口
department/list

//获取部门成员
user/simplelist

//注册事件回调接口
call_back/register_call_back
```` 
转为 
````
departmentList

userSimplelist

callBackRegisterCallBack
````

调用时
````
//获取部门列表
api.departmentList(function(err, res) {
	console.log(res);
})

//获取部门成员
api.userSimplelist({department_id: 1}, function(err, res) {
	console.log(res);
})

//注册事件回调
api.callBackRegisterCallBack({
    call_back_tag: [],
    token: '',
    aes_key: '',
    url: ''
}, function(err, res){
	console.log(res);
})
````

钉钉api列表请参考[官方文档](http://open.dingtalk.com/doc/index.html?spm=a3140.7785475.0.0.yT1S90#服务端开发文档)

