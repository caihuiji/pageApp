/**
 * formatter 组件
 * 
 * 将模版导入 ， data 替换到其数据
 * 
 * example :
 * 
 * coconut.formatter('<a href="{data.url}"><a>',{data:{url:"aaa"}});
 * 
 * output : <a href="aaa"><a>
 * 
 * @name - module
 * @author caihuiji
 * @param temp -
 *            模版
 * @param data -
 *            需要替换的数据
 */

;
coconut.define('coconut.formatter', function(temp, data) {
	return temp.replace(/\{([\w\.]*)\}/g, function(str, key) {
		var keys = key.split("."), value = data[keys.shift()];
		for(var index in keys){
			value = value[keys[index]];
		}
		return (value === null || value === undefined) ? "" : value;
	});

});
