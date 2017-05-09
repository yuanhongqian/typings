
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




