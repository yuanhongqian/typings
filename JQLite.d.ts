

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
}*/