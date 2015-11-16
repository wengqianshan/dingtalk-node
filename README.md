# 钉钉SDK node版

### 使用方法

#### 安装

````
npm install dingtalk-node
````

#### 使用

> 将config.default.js拷贝一份命名为config.js ，并修改相应配置

````
var dd = require('dingtalk-node');
//获取部门列表
dd.departmentList(function(err, res) {
    var ds = res.department;
    ds.forEach(function(item) {
        console.log(item);
    })
});
````