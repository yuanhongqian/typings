
interface Contact {
    getBasicVcards(jsonData: Object, callBackFun: Function): void;//获取通讯录用户基础信息
    getVcards(jsonData: Object, callBackFun: Function): void;//获取通讯录用户信息
    getVcardById(jsonData: Object, callBackFun: Function): void;//根据用户标识查询用户信息
    getVcardsByName(jsonData: Object, callBackFun: Function): void;//根据用户名查询用户信息
    addVcard(jsonData: Object, callBackFun: Function): void;//添加用户信息至通讯录
    deleteVcard(jsonData: Object, callBackFun: Function): void;//从通讯录中移除用户信息
    updateVcard(jsonData: Object, callBackFun: Function): void;//更新用户信息至通讯录
    moveVcard(jsonData: Object, callBackFun: Function): void;//移动用户至指定群组
    getGroups(callBackFun: Function): void;//获取通讯录已存在群组信息
    getGroupById(jsonData: string, callBackFun: Function): void;//获取通讯录中指定群组信息
    addGroup(jsonData: Object, callBackFun: Function): void;//添加群组至通讯录
    deleteGroup(jsonData: Object, callBackFun: Function): void;//从通讯录中移除群组
    updateGroup(jsonData: Object, callBackFun: Function): void;//更新群组至通讯录
}

declare module 'Contact' {
    export = contact;
}

var contact: Contact;


