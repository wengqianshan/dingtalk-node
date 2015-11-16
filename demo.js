var dd = require('./index');

//获取部门列表
dd.departmentList(function(err, res) {
    var ds = res.department;
    ds.forEach(function(item) {
        console.log(item);
    })
});
