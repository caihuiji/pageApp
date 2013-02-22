/**
 * override 组件
 * 
 * 如果 source 中存在 dest 中的 proprty ，覆盖掉
 * 
 * @name - module
 * @author caihuiji
 * @param dest -
 *            被需要覆盖的 object
 * @param source -
 *            需要需要的 object
 */

;
(function (){
coconut.define('coconut.event', function() {
	var call = {};
	
	var isString = function (str){
		if(typeof str === 'string'){
			return true;
		}
		return false;
	};
	
	var isFunction = function (fun){
		if(typeof fun === 'function'){
			return true;
		}
		return false;
	};
	
	return {
		on : function (key,callback,context){
			if(!isString(key) || !isFunction (callback)){
				throw 'key must be string or callback must be function ';
			};
			call[key] = {
					callback : callback,
					context : context
			};
		},
		off : function (key){
			if(!isString(key)){
				throw 'key must be string';
			}
			delete call[key];
		},
		trigger : function (key){
			if(!isString(key) || call[key] === undefined || call[key] === null){
				return ;
			} 
			var c = call[key];
			c.callback.apply(c.context,Array.prototype.slice(arguments, 1))
		}
	};
});
})();

