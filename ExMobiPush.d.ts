
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


