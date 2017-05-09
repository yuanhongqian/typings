//AccessAuth.d.ts

interface AccessAuth {
    init(jsonData: Object): void;//初始化ExMobi服务端鉴权SDK
    getToken(jsonData: Object, callBackFun: Function): void;//ExMobi服务端SDK获取指定服务token值
}

declare module 'AccessAuth' {
    export = accessauth;
}

var accessauth: AccessAuth;


//AliPay.d.ts

interface AliPay {
    pay(jsonData: Object, callBackFun: Function): void;//调用支付宝进行商品支付
}

declare module 'AliPay' {
    export = alipay;
}

var alipay: AliPay;


//App.d.ts

interface App {
    exit(content: string): void;// 退出程序，弹出alert提示
    exitNoAsk(): void;// 直接退出程序
    background(): void;//  切换程序至后台
    reload(): void;// 重启程序

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数
}


declare module 'App' {
    export = app;
}

var app: App;

//AudioPlay.d.ts

interface AudioPlay {
    iinit(jsonData: Object): void;//初始化当前播放音频信息
    start(): void;//播放音频
    pause(): void;// 暂停播放音频
    stop(): void;// 停止播放音频
    seekTo(position: number): void;// 定位到音频的某一点并播放
    getStatus(): number;//当前音频播放状态
    getDuration(): number;//读取音频的总长度
    getCurrentPosition(): number;//读取音频目前播放位置
    beep(audioPath: string): void;//播放本地音频文件

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数
}

declare module 'AudioPlay' {
    export = audioplay;
}

var audioplay: AudioPlay;


//AudioRecord.d.ts

interface AudioRecord {
    start(jsonData: Object): void;//开始录音
    stop(): void;//停止录音
    getStatus(): number;// 当前录音状态
    getVolumeRate(): number;//获取实时录音音量比例

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数
}

declare module 'AudioRecord' {
    export = audiorecord;
}

var audiorecord: AudioRecord;


//BaiduLocation.d.ts

interface BaiduLocation {
    start(jsonData: Object): void;//启动定位
    isStarted(): boolean;//百度定位是否正在运行
    stop(): void;//百度定位是否正在运行
}

declare module 'BaiduLocation' {
    export = baidulocation;
}

var baidulocation: BaiduLocation;


//BaiduVoice.d.ts

interface BaiduVoice {
    record(jsonData: Object, callBackFun: Function): void;//启动百度语音识别
}

declare module 'BaiduVoice' {
    export = baiduvoice;
}

var baiduvoice: BaiduVoice;


//Barcode.d.ts

interface Barcode {
    scan(jsonData: Object, callBackFun: Function): void;// 启动条码扫描
    decodeImage(jsonData: Object, callBackFun: Function): void;//  传入图片路径进行二维码扫码
    createImage(jsonData: Object, callBackFun: Function): void;//  根据传入字符串生成条码编码图片并保存
}

declare module 'Barcode' {
    export = barcode;
}

var barcode: Barcode;


//Bugly.d.ts

interface Bugly {
    init(jsonData: Object): void;//启动Bugly错误日志收集
    setUserId(userId: string): void;//设置用户Id，用于精确定位到应用中某个用户异常
    getUserId(): string;//获取用户Id
    setTag(tag: number): void;//设置自定义标签
    getTag(): number;//获取当前设置标签值
    setUserData(jsonData: Object): void;//设置自定义Map参数
    getUserData(key: string): string;//获取已设置自定义Map参数
    getSdkVersion(): string;//获取Bugly SDK版本号
    getDeviceId(): string;//获取设备Id
    //自定义日志
    verbose(log: string): void;// Bugly基础日志输出
    debug(log: string): void;//Bugly调试日志输出
    info(log: string): void;// Bugly信息日志输出
    warn(log: string): void;// Bugly告警日志输出
    error(log: string): void;// Bugly错误日志输出
}

declare module 'Bugly' {
    export = bugly;
}

var bugly: Bugly;


//Camera.d.ts

interface Camera {
    start(jsonData: Object, callFunction: Function): void; //启动系统拍照/摄像界面
}

declare module 'Camera' {
    export = camera;
}

var camera: Camera;


//Clipboard.d.ts

interface Clipboard {
    setData(value: string): void;//设置程序剪切板
    getData(): string;// 读取程序剪切板
}

declare module 'Clipboard' {
    export = clipboard;
}

var clipboard: Clipboard;

//Console.d.ts

interface Console {
    setFilePath(filePath: string): void;//设置日志文件保存路径
    getFilePath(): string;//获取日志文件保存路径
    debug(log: string): void;//调试日志输出
    log(log: string): void;//标准日志输出
    info(log: string): void;//信息日志输出
    warn(log: string): void;//告警日志输出
    error(log: string): void;//错误日志输出
}

declare module 'Console' {
    export = console;
}

var console: Console;


//Contact.d.ts

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


//Db.d.ts

interface Db {
    //  同步方法
    open(jsonData: Object): boolean;// 打开或新建并打开指定名称数据库
    isOpen(dbName: string): boolean;// 判断指定路径文件是否存在
    close(dbName: string): boolean;// 关闭已打开数据库
    tableExists(jsonData: Object): boolean;// 数据库中指定数据表是否存在
    dropTable(jsonData: Object): boolean;// 在数据库中移除指定数据表
    getTableColumns(jsonData: Object): Array<Object>;// 在数据库中获取指定数据表列名数组
    execute(jsonData: Object): boolean;// 执行sql语句
    executes(jsonData: Object): boolean;//执行多条sql语句
    query(jsonData: Object): Array<Object>;//执行查询语句
    beginTransaction(dbName: string): boolean;//数据库中开启事务
    commitTransaction(dbName: string): boolean;// 数据库中提交事务
    rollbackTransaction(dbName: string): boolean;// 数据库中回滚事务
    //异步方法
    openAsyn(jsonData: Object, callFunction: Function): void;//打开或新建并打开指定名称数据库
    isOpenAsyn(dbName: string, callFunction: Function): void;//判断数据库是否已经打开
    closeAsyn(dbName: string, callFunction: Function): void;// 关闭已打开数据库
    tableExistsAsyn(jsonData: Object, callFunction: Function): void;//数据库中指定数据表是否存在
    dropTableAsyn(jsonData: Object, callFunction: Function): void;// 在数据库中移除指定数据表
    getTableColumnsAsyn(jsonData: Object, callFunction: Function): void;//在数据库中获取指定数据表列名数组
    executeAsyn(jsonData: Object, callFunction: Function): void;// 执行sql语句
    executesAsyn(jsonData: Object, callFunction: Function): void;//执行多条sql语句
    queryAsyn(jsonData: Object, callFunction: Function): void;// 执行查询语句
    beginTransactionAsyn(dbName: string, callFunction: Function): void;//数据库中开启事务
    commitTransactionAsyn(dbName: string, callFunction: Function): void;//数据库中提交事务
    rollbackTransactionAsyn(dbName: string, callFunction: Function): void;// 数据库中回滚事务
}

declare module 'Db' {
    export = db;
}

var db: Db;

//DbCipher.d.ts

interface DbCipher {
    // 同步方法
    open(jsonData: Object): boolean;//打开或新建并打开指定名称数据库
    isOpen(dbName: string): boolean;//判断指定路径文件是否存在
    reKey(jsonData: Object): boolean;// 修改已打开加密数据库密码
    close(dbName: string): boolean;//关闭已打开数据库
    tableExists(jsonData: Object): boolean;//数据库中指定数据表是否存在
    dropTable(jsonData: Object): boolean;//在数据库中移除指定数据表
    getTableColumns(jsonData: Object): Array<string>;//在数据库中获取指定数据表列名数组
    execute(jsonData: Object): boolean;//执行sql语句
    executes(jsonData: Object): boolean;// 执行多条sql语句
    query(jsonData: Object): Array<Object>;//执行查询语句
    beginTransaction(dbName: string): boolean;//数据库中开启事务
    commitTransaction(dbName: string): boolean;//数据库中提交事务
    rollbackTransaction(dbName: string): boolean;//数据库中回滚事务
    //异步方法
    encryptDbAsyn(jsonData: Object, callFunction: Function): void;//根据输入密码对未加密的sqlite数据库文件进行加密
    openAsyn(jsonData: Object, callFunction: Function): void;//打开或新建并打开指定名称数据库
    isOpenAsyn(dbName: string, callFunction: Function): void;//判断数据库是否已经打开
    reKeyAsyn(jsonData: Object, callFunction: Function): void;//修改已打开加密数据库密码
    closeAsyn(dbName: string, callFunction: Function): void;//关闭已打开数据库
    tableExistsAsyn(jsonData: Object, callFunction: Function): void;// 数据库中指定数据表是否存在
    dropTableAsyn(jsonData: Object, callFunction: Function): void;// 在数据库中移除指定数据表
    getTableColumnsAsyn(jsonData: Object, callFunction: Function): void;// 在数据库中获取指定数据表列名数组
    executeAsyn(jsonData: Object, callFunction: Function): void;//执行sql语句
    executesAsyn(jsonData: Object, callFunction: Function): void;// 执行多条sql语句
    queryAsyn(jsonData: Object, callFunction: Function): void;//执行查询语句
    beginTransactionAsyn(dbName: string, callFunction: Function): void;//数据库中开启事务
    commitTransactionAsyn(dbName: string, callFunction: Function): void;// 数据库中提交事务
    rollbackTransactionAsyn(dbName: string, callFunction: Function): void;//数据库中回滚事务
}

declare module 'DbCipher' {
    export = dbcipher;
}

var dbcipher: DbCipher;

//Device.d.ts

interface Device {
    //闪光灯
    startLight(): void;// 打开移动设备闪光灯
    closeLight(): void;// 关闭移动设备闪光灯
    // 振动
    vibrate(time: number): void;//  启动移动设备振动
    //  屏幕
    setKeepScreenOn(): void;// 设置应用使用过程中保持屏幕点亮
    clearKeepScreenOn(): void;// 清除应用使用过程中保持屏幕点亮
    isKeepScreenOn(): boolean;//  是否设置应用使用过程中保持屏幕点亮
    //   设备信息
    getEsn(): string;//  获取设备ESN值
    getImsi(): string;//  获取设备IMSI值
    getDeviceToken(): string;//  获取iOS推送服务器需要的一个代表设备的唯一令牌的字符串
    getOs(): string;// 获取设备操作系统平台
    getPhoneModule(): string;// 获取手机型号名
    getOsVersion(): string;//  获取设备操作系统版本号
    isRoot(): boolean;// 判断Android设备是否root或iOS设备是否越狱
    getLanguage(): string;//  获取当前系统语言类型
    getAvailableMemory(): number;// 获取设备可用内存
    getDpi(): string;// 获取当前设备dpi
    //桌面气泡数字
    getBadgeNumber(): number;// 获取Iphone/ Ipad 设备桌面快捷方式小气泡显示数字
    setBadgeNumber(number: string): void;// 设置Iphone / Ipad 设备桌面快捷方式小气泡显示数字
}


declare module 'Device' {
    export = device;
}

var device: Device;

//DiskCache.d.ts

interface DiskCache {
    setItem(key: string, value: any): void;// 磁盘缓存数据
    getItem(key: string): any;// 读取磁盘缓存数据
    removeItem(key: string): any;// 移除磁盘缓存数据
}

declare module 'DiskCache' {
    export = diskcache;
}

var diskcache: DiskCache;

//Document.d.ts

interface IElement {

    //-------------公共方法-------------------

    // 事件相关
    on(messageName: string, callback: Function): void;
    fire(messageName: string, params: Array<any>): void;
    off(messageName: string, callback: Function): void;
    getOn(messageName: string): Array<Function>;

    // 动画相关
    startAnimation(jsonData: Object, callbacl: Function): void;
    startAnimator(jsonData: Object, callback: Function): void;
    startKeyFrameAnimator(jsonData: Object, callback: Function): void;
    releaseAnimator(): void;

    // 尺寸和位置
    getFrame(): Object;
    setFrame(frame: Object): void;
    getCenter(): Object;
    getAbsoluteFrame(): Object;

    // 普通Dom节点操作
    getParent(): IElement;
    getNext(): IElement;
    getPrevious(): IElement;
    remove(): void;
    clone(): IElement;
    setAttr(attrName: string, attrValue: string): void;
    getAttr(attrName: string): string;
    getAttrs(): Object;
    removeAttr(attrName: string): void;
    hasAttr(attrName: string): boolean;
    setText(content: string): void;
    getText(): string;
    setStyle(styleName: string, styleValue: string): void;
    getStyle(styleName: string): string;
    clearStyle(styleName: string): void
    setClassStyle(className: string, domobj: IElement): void
    getClassStyle(): string;
    getTag(): string;
    getId(): string;

    // 容器类Dom节点操作
    getElement(id: string): IElement;
    getElements(rule: string): Array<IElement>;
    getChildren(): Array<IElement>;
    getFirstChild(): IElement;
    getLastChild(): IElement;
    appendChild(domObj: IElement): void;
    insertBefore(domObj: IElement, beforeDomObj: IElement): void;
    insertAfter(domObj: IElement, afterDomObj: IElement): void;
    replaceChild(newDomObj: IElement, oldDomObj: IElement): void;
    clear(): void;
    getInnerHTML(): string;

    //-------------box grid scroll refresh slider公共方法-------------------
    // refresh(): void;

    //-------------image方法-------------------
    setFrameAnimation(jsonData: Object): void;
    startFrameAnimation(): void;
    stopFrameAnimation(): void;
    stopFrameAnimation(): void;

    //-------------textfield 和 textarea方法-------------------
    setFocus(): void;
    isFocus(): boolean;
    clear(): void;

    //------------scroll方法-------------------
    scrollTo(jsonData: Object): void;
    scrollToType(jsonData: Object): void;
    scrollToCtrl(jsonData: Object): void;
    scrollToCtrlById(jsonData: Object): void;
    scrollBy(jsonData: Object): void;
    getScrollX(): number;
    getScrollY(): number;
    getContentWidth(): number;
    getContentHeight(): number;
    setCaptureTouchEvent(caputueTouchEvent: boolean): void;
    getCaptureTouchEvent(): boolean;

    //------------refresh方法-------------------
    drag(jsonData: Object): void;
    reset(): void;

    //------------list方法-------------------
    setAdapter(adapter: Adapter): void;
    scrollTo(jsonData: Object): void;
    scrollToType(jsonData: Object): void;
    scrollToPosition(jsonData: Object): void;
    scrollBy(jsonData: Object): void;
    getScrollY(): number;
    hideHeader(): void;
    showHeader(): void;
    getHeader(): IElement;
    refreshHeader(): void;
    hideFooter(): void;
    showFooter(): void;
    getFooter(): IElement;
    refreshFooter(): void;
    setCaptureTouchEvent(caputueTouchEvent: boolean): void;
    getCaptureTouchEvent(): boolean;

    //------------slider方法-------------------
    refresh(index?: number): void;

    //------------video方法-------------------
    play(): void;
    pause(): void;
    stop(): void;
    isPlaying(): void;

    //------------webview方法-------------------
    executeScript(scriptText: string): void;
    clearCache(): void;
    canBack(): boolean;
    back(): void;
    canForward(): boolean;
    forward(): void;

    //------------handsign方法-------------------
    load(jsonData: Object, callBackFun: Function): void;
    save(jsonData: Object, callback: Function): void;
    clear(): void;
    undo(): void;

    //------------baidumap方法-------------------

    //标注点
    addMark(jsonData: Object): string;//添加单个Mark标注点
    removeMark(jsonData: Object): boolean;//移除单个Mark标注点
    updateMark(jsonData: Object): boolean;//更新单个Mark标注点
    addMarks(jarrayData: Array<Object>): Array<Object>;//添加多个Mark标注点
    removeMarks(jarrayData: Array<Object>): boolean;//移除多个Mark标注点
    clearMarks(): boolean;//移除地图上所有Mark标注点
    //定位
    setShowUserLocation(isShow: boolean): void;//地图是否显示定位图层
    setLocationData(jsonData: Object): void;//添加定位点
    setLocationConfig(jsonData: Object): void;//设置定位点配置参数
    //覆盖物
    addLine(jsonData: Object): string;//地图添加折线
    addCircle(jsonData: Object): string;//地图添加圆形覆盖物
    addArc(jsonData: Object): string;//地图添加弧线
    addPolygon(jsonData: Object): string;//地图添加多边形
    addText(jsonData: Object): string;//地图添加文字
    removeOverlay(jsonData: Object): boolean;// 移除遮盖物
    clearOverlays(): boolean;//移除所有遮盖物
    //路线规划标注
    markTransitRoute(jsonData: Object, callback: Function): void;//公交路径规划并标注
    markDrivingRoute(jsonData: Object, callback: Function): void;//驾车路径规划并标注
    markWalkingRoute(jsonData: Object, callback: Function): void;//步行路径规划并标注
    markBikingRoute(jsonData: Object, callback: Function): void;// 骑行路径规划并标注
    removeRoute(jsonData: Object): void;//移除地图中指定标注规划路线
    clearRoutes(): void;//清除地图中所有标注规划路线
    //行政区域检索标注
    markDistrict(jsonData: Object, callback: Function): void;// 行政区域检索并标注
    removeDistrict(jsonData: Object): void;//移除地图中指定区域标注
    clearDistricts(): void;//清除地图中所有标注区域
    //公交路线查询标注
    markBusLine(jsonData: Object, callback: Function): void;//公交路线查询并标注
    removeBusLine(jsonData: Object): void;//移除地图中指定标注公交路线
    clearBusLines(): void;//清除地图中所有标注公交路线
    //其他
    setMapCenter(jsonData: Object): boolean;// 设置地图中心点位置
    getMapCenter(): Object;// 获取地图中心点位置
    getBounds(): Object;//返回地图可视区域,以地理坐标表示
    snapshot(jsonData: Object, callback: Function): void;// 地图截屏,图片格式png

    //---------官方封装组件------------
    //button switch radio 
    click(): void;//模拟点击
    //select
    getSelectedIndex(): void;
    //memoryfield
    loadData(jsonDatas: Object): void;//加载初始数据
    hidepop(): void;//隐藏pop弹出框
    showpop(): void;//显示pop弹出框
    cacheData(): void;//缓存数据
    clearCacheData(): void;//清除缓存数据
    //titlbar
    setTitleContent(xmlstr: string): void;//根据xml字符串自定义内容,把内容放入titlebar的title中间区域
    getDomById(id: string): IElement; //根据id得到自定内容中控件的dom;
    //gridmenu newslider tabbar menubar indexbar
    loadData(jsonData: Object): void;//注入数据

    //indexbar
    loadData(stringarr: Array<string>): void;//注入数据
    gridmenuRefresh(): void;//修改菜单json数据属性后，执行gridmenuRefresh()，才可生效
    menubarRefresh(): void;
    //popmenu popbottommenu
    popinit(popjson: Object): void;//初始化pop数据
    show(): void;//显示pop弹窗
    hide(): void;//隐藏pop窗口

    //organization
    loadSearchData(jsonData: Array<Object>): voide;//用于搜索的时候加载数据

    //audioplay
    playinit(jsonData: Object): void;//播放音频之前初始化
    start(): void;//开始播放
    pause(): void;//暂停播放
    stop(): void;//停止播放
    getStatus(): void;//获得当前播放状态

    //audiorecord
    recordinit(jsonData: Object): void;//录音初始化
    readycancel(): void;//准备停止录音
    cancelrecord(): void;//取消录音

}


interface DocumentStatic {
    getElement(id: string): IElement;
    getElements(rule: string): Array<IElement>;
    getRootElement(): IElement;
    createElement(tagName: string, propsData: Object, domObj: IElement): IElement;
    createElementByXml(xml: string, domObj: IElement): IElement;
    refresh(): void;
    getPathLocation(): string;
}



interface ListAdapter {
    refresh(): void;
    notifyItemRangeInserted(jsonData: Object): void;
    notifyItemRangeChanged(jsonData: Object): void;
    notifyItemRangeRemoved(jsonData: Object): void;
}

declare module 'Document' {
    export = docs;
}


declare module 'ListAdapter' {
    export = listadapter;
}


var docs: DocumentStatic;

var listadapter: ListAdapter;//Encryption.d.ts

interface Encryption {
    base64Encode(src: string): string;// 对传入的src字符串进行base64编码
    base64Decode(src: string): string;// 对传入的src字符串进行base64解码
    uuid(): string;// 生成唯一UUID字符串
    md5(src: string): string;// 对传入的src字符串进行md5加密
    sha(src: string, type: string): string;//对传入的src字符串进行hash编码
    urlEncode(src: string, type: string): string;// 对传入的src字符串进行UrlEncode
    escapeXml(str: string): string;//转换xml中需要转义的字符
    unEscapeXml(str: string): string;//逆转xml中转义符
    rgbToHex(rgbJson: Object): string;//将rgb格式转换为#rrggbb格式字符串
    hexToRgb(hex: string): Object;//将#rrggbb格式字符串转换为rgb格式
    rgbaToHex(rgba: string): string;// 将rgba格式字符串转换为#aarrggbb
    hexToRgba(hex: string): Object;//将#aarrggbb格式字符串转换为rgba
}

declare module 'Encryption' {
    export = encryption;
}

var encryption: Encryption;

//ExMobiPush.d.ts

interface ExMobiPush {
    init(jsonData: Object): void;//初始化Push推送配置
    start(): void;//启动推送服务
    stop(): void;//停止推送服务
    getVersion(): string;//获取Push SDK版本信息
    setWorkday(workday: string): boolean;//设置推送工作日
    getWorkDay(): string;//获取配置的推送工作日
    setDisturbMode(jsonData: Object): boolean;//配置工作日推送工作时间
    getDisturbMode(): Object;//获取配置的工作日推送时间
}

declare module 'ExMobiPush' {
    export = exmobipush;
}

var exmobipush: ExMobiPush;


//File.d.ts

interface File {
    isDir(path: string): boolean;//判断指定路径文件是否为文件夹
    fileExist(path: string): boolean;//判断指定路径文件是否存在
    dirExist(path: string): boolean;//判断指定路径目录是否存在
    makeDir(path: string): boolean;//创建指定文件夹
    getFileSize(path: string): number;// 获取指定文件大小
    getFileInfo(path: string): Object;// 获取文件相关信息
    readTextFile(path: string): string;// 读取文本类型文件（同步方式）
    readTextFileAsyn(path: string, callFunction: Function): void;// 读取文本类型文件（异步方式）
    writeTextFile(jsonData: Object, text: string): boolean;// 将字符串写入文本类型文件(同步方式)
    writeTextFileAsyn(jsonData: Object, text: string, callFunction: Function): void;// 将字符串写入文本类型文件（异步方式）
    copyFile(jsonData: Object): boolean;// 拷贝文件（同步方式）
    copyFileAsyn(jsonData: Object, callFunction: Function): void;//拷贝文件（异步方式）
    deleteFile(jsonData: Object): boolean;//删除文件（同步方式）
    deleteFileAsyn(jsonData: Object, callFunction: Function): void;// 删除文件（异步方式）
    moveFile(jsonData: Object): boolean;// 移动文件（同步方式 ）
    moveFileAsyn(jsonData: Object, callFunction: Function): void;// 移动文件（异步方式）
    copyDirAsyn(jsonData: Object, callFunction: Function): void;// 拷贝文件夹（异步方式）
    deleteDirAsyn(jsonData: Object, callFunction: Function): void;//删除文件夹（异步方式）
    moveDirAsyn(jsonData: Object, callFunction: Function): void;//移动文件夹（异步方式）
    listFiles(jsonData: Object): Array<string>;//返回文件夹下的子文件（同步方式）
    listFilesAsyn(jsonData: Object, callFunction: Function): Array<string>;// 返回文件夹下的子文件（异步方式）
    md5(path: string): string;//返回文件md5值
    zip(jsonData: Object, callFunction: Function): void;//压缩文件/文件夹至指定目录
    unZip(jsonData: Object, callFunction: Function): void;// 解压文件至指定路径
    getAbsolutePath(path: string): string;//获取res:开头的本地url地址对应的绝对路径
}

declare module 'File' {
    export = file;
}

var file: File;

//Http.d.ts

interface Http {
    ajax(option: Object, callFunction: Function): string;//ajax异步请求
    formSubmit(option: Object, callFunction: Function, requestProgressFunction: Function, responseProgressFunction: Function): string;//异步表单提交
    download(option: Object, callFunction: Function, responseProgressFunction: Function): string;//异步文件下载
    cancel(id: string): void;//关闭http请求
}


declare module 'Http' {
    export = http;
}

var http: Http;

//IapPay.d.ts

interface IapPay {
    canMakePay(): boolean;//是否支持虚拟支付功能
    getProducts(jsonData: Object, callBackFun: Function): void;//获取有效商品详细信息列表
    pay(dataJson: string, callBackFun: Function): void;//购买虚拟商品
    restore(callBackFun: Function): void;//恢复用户以前购买过的所有商品交易
}


declare module 'IapPay' {
    export = iappay;
}

var iappay: IapPay;

//ImageUtil.d.ts

interface ImageUtil {
    scale(jsonData: Object, callBackFun: Function): void;//缩放图片并保存到目标文件
    scaleByRate(jsonData: Object, callBackFun: Function): void;//根据缩放比例缩放图片并保存到目标文件
    scaleByFileSize(jsonData: Object, callBackFun: Function): void;//根据缩放后文件大小缩放图片并保存到目标文件
    clip(jsonData: Object, callBackFun: Function): void;//启动图片裁剪界面
    screenShot(jsonData: Object, callFunction: Function): void;//启动截屏
}

declare module 'ImageUtil' {
    export = imageutil;
}

var imageutil: ImageUtil;


//JQLite.d.ts


interface IJQLite {

	// 基础功能

	child(selectot?: string): IJQLite;
	parent(selectot?: string): IJQLite;
	attr(attrName: string, attrValue?: any): IJQLite;
	css(styleName: string, styleValue?: any): IJQLite;
	css(styleKV: object): IJQLite;
	addClass(classStr: string): IJQLite;
	removeClass(classStr: string): IJQLite;

	//扩展 MVVM

	render(data: Object): any;
}

interface JQLiteStatic {
	(selector: string, context?: any): IJQLite;

	ajax(settings: any): void;
}


declare module 'JQLite' {
	export = JQLite;
}

//declare var JQLite: JQLiteStatic;
var JQLite: JQLiteStatic;

/*declare class mytest {

	public selector: string;

	public todo():void;
}*///Location.d.ts

interface Location {
    start(jsonData: Object, callFunction: Function): void;//启动系统单次定位
}

declare module 'Location' {
    export = location;
}

var location: Location;


//MapUtil.d.ts

interface MapUtil {
    //坐标转换
    convertToBd09ll(srcJson: Object, callFunction: Function): void;//将gcj02/wgs84转换为bd09ll百度坐标系
    convertToGcj02(jsonData: Object, callBackFun: Function): void;//将bd09ll/wgs84转换为gcj02国测坐标系
    //地理编码转换
    geocode(jsonData: Object, callBackFun: Function): void;// 根据地址查询百度地图坐标系经纬度
    reverseGeocode(jsonData: Object, callBackFun: Function): void;//根据经纬度获取地址详细信息
    reverseGeocode(jsonData: Object, callBackFun: Function): void;//根据经纬度获取地址详细信息
    //Poi搜索
    searchInCity(jsonData: Object, callFunction: Function): void;//百度地图市内搜索
    searchInBounds(jsonData: Object, callFunction: Function): void;//百度地图矩形区域内搜索
    searchNearBy(jsonData: Object, callFunction: Function): void;//百度地图圆形区域内搜索
    //其他
    getDistance(startJson: Object, endJson: Object): number;//计算两点间实际地理距离
}

declare module 'MapUtil' {
    export = maputil;
}

var maputil: MapUtil;




//MemCache.d.ts

interface MemCache {
    setItem(key: string, value: any): void;// 内存缓存数据
    getItem(key: string): any;//读取内存缓存数据
    removeItem(key: string): any;//移除内存缓存数据
}

declare module 'MemCache' {
    export = memcache;
}

var memcache: MemCache;

//Native.d.ts

interface Native {
    openApp(jsonData: Object, callFunction: Function): void;//启动第三方应用并传值
    openFile(path: string): void;//调用系统第三方程序打开指定文件
    browser(url: string): void;//调用系统浏览器打开指定url地址
    apkInstalled(package: string): boolean;// 设备是否安装apk应用
    installApk(apkPath: string, callFunction: Function): void;//安装指定路径apk安装包
    uninstallApk(packageName: string, callFunction: Function): void;//卸载指定应用
}

declare module 'Native' {
    export = native;
}

var native: Native;

//NetInfo.d.ts

interface NetInfo {
    getStatus(): number;//获取当前网络连接状态
    getIps(): Array<string>;//获取连接所有网络ip地址
    getWifiInfo(): Object;//获取当前连接的wifi网络信息

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数
}

declare module 'NetInfo' {
    export = netInfo;
}

var netInfo: NetInfo;

//Phone.d.ts

interface Phone {
    tel(phone: string): void;//拨打指定号码
    openSystemDial(phone: string): void;//启动系统拨号界面
    faceTime(faceTimeNumber: string): void;//调用IOS平台系统的FaceTime进行视频通话
    getCallRecords(jsonData: Object, callBackFun: Function): void;//获取系统通话记录
}

declare module 'Phone' {
    export =phone;
}

var phone: Phone;


//Pixel.d.ts

interface Pixel {
    getDensity(): number;//获取设备屏幕密度
    px2dp(pxValue: number): number;//将绝对像素px转换为相对像素dp
    dp2px(dpValue: number): number;// 将相对像素dp转换为绝对像素px
}

declare module 'Pixel' {
    export = pixel;
}

var pxel: Pixel;


//Qq.d.ts

interface Qq {
    // QQ登陆
    isQQInstalled(): boolean;// QQ是否安装
    login(jsonData: Object, callBackFun: Function): void;// 启动QQ进行登录用户授权认证
    isLogin(): boolean;//  QQ用户是否已经登录
    logout(): void;// 登出QQ
    getUserInfo(jsonData: Object, callBackFun: Function): void;// 获取授权QQ用户信息
    //QQ分享
    shareImage(jsonData: Object, callBackFun: Function): void;// 分享图片到QQ好友
    shareNews(jsonData: Object, callBackFun: Function): void;// 分享新闻（图文信息）到QQ空间 / QQ好友
    shareMusic(jsonData: Object, callBackFun: Function): void;// 分享音乐到QQ空间 / QQ好友
}

declare module 'Qq' {
    export = qq;
}

var qq: Qq;


//SangforVpn.d.ts

interface SangforVpn {
    init(jsonData: Object, callBackFun: Function): void;//初始化深信服Vpn服务器
    login(jsonData: Object, callBackFun: Function): void;// 登录深信服Vpn服务器
    logout(callBackFun: Function): void;//注销深信服Vpn服务器
    smsLogin(jsonData: Object, callBackFun: Function): void;//启动深信服vpn短信验证码登录
    smsRefresh(): void;//向vpn服务器发送通知重新获取短信验证码
    getVpnStatus(): number;//返回深信服vpn当前连接状态
}

declare module 'SangforVpn' {
    export = sangforvpn;
}

var sangforvpn: SangforVpn;


//Sms.d.ts

interface Sms {
    sendSms(jsonData: Object): void;//打开短信发送界面发送短信
    sendSmsAsyn(jsonData: Object, callBackFun: Function): void;//后台发送短信
}

declare module 'Sms' {
    export = sms;
}

var sms: Sms;


//Time.d.ts

interface Time {
    setTimeout(callFunction: Function, timeout: number): string;//启动单次定时器
    clearTimeout(id: string): void;// 关闭单次定时器
    setInterval(callFunction: Function, interval: number): string;//启动重复定时器
    clearInterval(id: string): void;// 关闭重复定时器
}


declare module 'Time' {
    export = Time;
}

var time: Time;

//UI.d.ts

interface UI {
    alert(jsonData: Object, callFunction: Function): void;//弹出提示框
    confirm(jsonData: Object, callFunction: Function): void;//弹出提示选择框
    toast(jsonData: Object): void;//弹出Toast提示
    actionSheet(jsonData: Object, callFunction: Function): void;// 弹出底部菜单选择
    selectDate(jsonData: Object, callFunction: Function): void;//弹出系统日期选择
    selectTime(jsonData: Object, callFunction: Function): void;//弹出系统时间选择
    showImages(jsonData: Object): void;//显示图片集
    selectFile(jsonData: Object, callBackFun: Function): void;//通过js实现文件选择器调用
    selectVideo(jsonData: Object, callBackFun: Function): void;//选择设备中单个视频
    selectImage(jsonData: Object, callBackFun: Function): void;//选择设备中单张图片
    selectImages(jsonData: Object, callBackFun: Function): void;//选择设备中多张图片
}

declare module 'UI' {
    export = ui;
}

var ui: UI;

//VideoUtil.d.ts

interface VideoUtil {
    recordShortVideo(jsonData: Object, callFunction: Function): void;//启动小视频录制
    openVideo(jsonData: Object): void;// 调用系统播放器播放视频
}

declare module 'VideoUtil' {
    export = videoutil;
}

var videoutil: VideoUtil;


//WeiBo.d.ts

interface WeiBo {
    // 微博登录
    isWeiboInstalled(): boolean;//新浪微博是否安装
    login(jsonData: Object, callBackFun: Function): void;//向新浪微博平台认证授权用户登录
    logout(callBackFun: Function): void;//新浪微博用户登出
    getUserInfo(jsonData: Object, callBackFun: Function): void;//获取已登录新浪微博用户基本信息
    //微博分享
    shareText(jsonData: Object, callBackFun: Function): void;//分享文本到新浪微博
    shareImage(jsonData: Object, callBackFun: Function): void;//分享图片到新浪微博参数
    shareNews(jsonData: Object, callBackFun: Function): void;//分享新闻（图文信息）到新浪微博
}

declare module 'WeiBo' {
    export = weibo;
}

var weibo: WeiBo;


//WeiXin.d.ts

interface WeiXin {
    // 微信登陆
    isWeixinInstalled(): boolean;// 微信是否安装
    getAuthCode(jsonData: Object, callBackFun: Function): void;// 启动微信进行登录用户授权认证
    getAccessToken(jsonData: Object, callBackFun: Function): void;//  通过code码向微信平台获取access_token等信息
    authAccessToken(jsonData: Object, callBackFun: Function): void;// 检验授权凭证accessToken是否有效
    refreshAccessToken(jsonData: Object, callBackFun: Function): void;//  刷新或续期accessToken使用
    getUserInfo(jsonData: Object, callBackFun: Function): void;// 开发者可通过OpenID来获取用户基本信息
    //微信支付
    isSupportPay(): boolean;// 是否支持微信支付
    payOrder(jsonData: Object, callBackFun: Function): void;//  调用微信支付订单，并返回授权结果
    //微信分享
    shareText(jsonData: Object, callBackFun: Function): void;//  分享文本到微信好友/微信朋友圈
    shareImage(jsonData: Object, callBackFun: Function): void;//  分享图片到微信好友/微信朋友圈
    shareNews(jsonData: Object, callBackFun: Function): void;// 分享新闻（图文信息）到微信好友/微信朋友圈
}

declare module 'WeiXin' {
    export = weixin;
}

var weixin: WeiXin;


//Window.d.ts

interface Window {
    open(jsonData: Object): void;// 打开新窗口（通过地址）
    openData(jsonData: Object): void;// 打开新窗口（通过内容）
    close(jsonData: Object): void;//  关闭当前窗口
    getData(): Object;//  获取上层窗口传递的数据
    getOrientation(): string;//  获取当前窗口屏幕横竖屏状态
    getScreenWidth(): number;// 获取当前窗口绘制区域宽度
    getScreenHeight(): number;// 获取当前窗口绘制区域高度
    executeScript(scriptText: string): void;// 设置窗口状态栏模式
    hideSip(): void;//  隐藏系统输入法

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数

}


declare module 'Window' {
    export = window;
}

var window: Window;

//XmlDocument.d.ts

interface XmlDocument {
    createElementByString(xml: string): XmlElement;//通过xml文本创建XmlElement对象
    createElementByFile(xmlFilePath: string): XmlElement;//读取xml文件创建XmlElement对象
}


interface XmlElement {

    getElements(): Array<XmlElement>;// 获取所有子节点
    getElementsByTag(tagName: string): Array<Object>;//获取指定Tag的所有子节点
    getTag(): string;//获取Xml对象Tag名
    getAttrs(): Object;//获取节点所有属性
    getAttr(attrName: string): string;//获取节点属性值
    hasAttr(attrName: string): boolean;//节点是否具有该属性
    getText(): string;//获取节点文本内容
}

declare module 'XmlDocument' {
    export = xmldocument;
}

declare module 'XmlElement' {
    export = xmlelement;
}

var xmldocument: XmlDocument;

var xmlelement: XmlElement;


