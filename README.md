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