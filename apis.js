module.exports = [
    {
        path: 'department/list',
        alias: '',
        method: 'GET'
    },{
        path: 'department/create',
        method: 'POST'
    },{
        path: 'department/update',
        method: 'POST'
    },{
        path: 'department/delete',
        method: 'GET'
    },{
        path: 'user/get',
        method: 'GET'
    },{
        path: 'user/create',
        method: 'POST'
    },{
        path: 'user/update',
        method: 'POST'
    },{
        path: 'user/delete',
        method: 'GET'
    },{
        path: 'user/batchdelete',
        method: 'POST'
    },{
        path: 'user/simplelist',
        method: 'GET'
    },{
        path: 'user/list',
        method: 'GET'
    },{
        path: 'call_back/register_call_back',
        method: 'POST'
    },{
        path: 'call_back/get_call_back',
        method: 'GET'
    },{
        path: 'call_back/update_call_back',
        method: 'POST'
    },{
        path: 'call_back/delete_call_back',
        method: 'GET'
    },{
        path: 'call_back/get_call_back_failed_result',
        alias: '',
        method: 'GET'
    },{
        path: 'message/send_to_conversation',
        method: 'POST'
    },{
        path: 'message/send',
        method: 'POST'
    },{
        path: 'media/upload',
        method: 'POST'
    },{
        path: 'media/get',
        method: 'GET'
    },{
        path: 'data/record',
        method: 'POST'
    },{
        path: 'get_jsapi_ticket',
        method: 'GET'
    },{
        path: 'user/getuserinfo',
        method: 'GET'
    }
];