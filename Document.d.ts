
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

var listadapter: ListAdapter;