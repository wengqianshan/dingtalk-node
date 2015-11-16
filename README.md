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
    domain: 'dingtalk api domain',
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

API命名为驼峰式，如
````
//获取部门列表接口
department/list

//注册事件回调接口
call_back/register_call_back
```` 
转为 
````
departmentList

callBackRegisterCallBack
````

调用时
````
//获取部门列表
api.departmentList()

//注册事件回调
api.callBackRegisterCallBack({
    /*参数*/
})
````

api列表请参考[官方文档](http://open.dingtalk.com/doc/index.html?spm=a3140.7785475.0.0.yT1S90#服务端开发文档)

