var request = require('request');
var qs = require('qs');
var _ = require('lodash');
var config = require('./config');
var apis = require('./apis');

var token;
var tokenCreateTime;
var tokenExpireTime = 7200 * 1000;

function log() {
    args = Array.prototype.slice.call(arguments);
    if (config.debug) {
        console.log(args)
    }
}

/**
 * 获取token
 * @param {function} callback 回调
 * @returns {null} 
 **/
function getToken(callback) {
    log('获取token')
    var cid = config.oa.cid;
    var secret = config.oa.secret;
    request({
        method: 'GET',
        url: config.oa.domain + '/gettoken',
        json: true,
        qs: {
            corpid: cid,
            corpsecret: secret    
        }
    }, function(err, response, body) {
        if (err) {
            log('出错了', err);
            return callback(err);
        }
        log('返回数据', body);
        var json = body;
        var errcode = json.errcode;
        if (errcode !== 0) {
            log(json);
        }
        token = json.access_token;
        tokenCreateTime = Date.now();

        callback(err, json);
    })
}


/**
 * 统一请求接口
 * @param {string} path 请求路径，bui自动拼接成完整的url
 * @param {object} params 请求参数集合
 * @param {function} callback  回调，请求成功与否都会触发回调，成功回调会回传数据
 * @returns {null} 
 **/
function doRequest(path, params, callback) {
    var action = function(t) {
        var url = config.oa.domain + '/' + path;
        if (t) {
            url += '?access_token=' + t;
        }
        var method = 'GET';
        if (params.method === 'POST') {
            delete params.method;
            method = 'POST';
        }
        var obj = {
            method: method,
            url: url,
            json: true
        };

        if (method === 'POST') {
            obj.body = params;
        } else {
            obj.qs = params;
        }
        log('请求参数：', obj)
        request(obj, function(err, response, body) {
            if (err) {
                log('出错了', err);
                return callback(err);
            }
            log('返回数据', body);
            var json = body;
            var errcode = json.errcode;
            if (errcode !== 0) {
                log(json);
            }
            callback(err, json);
        })
    };
    //如果有判断三种情况：1token没过期； 2不检查token； 3token过期或者没有设置token等情况
    if ((token && tokenCreateTime && (Date.now() - tokenCreateTime < tokenExpireTime))) {
        action(token);
    } else {
        log('token过期或者未设置')
        getToken(function(err, json) {
            if (err) {
                return callback(err);
            }
            action(json.access_token);
        });
    }
}
var objs = {};

/**
 * 批量生成接口
 **/
apis.forEach(function(item) {
    var p = item.path;
    var method = item.method;
    var alias = item.alias;
    var functionName = _.camelCase(alias || p);
    objs[functionName] = function(params, callback) {
        if (_.isFunction(params)) {
            callback = params;
            params = {};
        }
        var params = params || {};
        var callback = callback || function() {};
        if (method === 'POST') {
            params.method = 'POST';
        }
        doRequest(p, params, function(err, json) {
            if (err) {
                log('获取数据失败');
            }
            callback(err, json);
        });
    }
});

module.exports = objs;