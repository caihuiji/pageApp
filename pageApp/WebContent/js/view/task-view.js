/**
 * 
 * task
 * 
 */
;
$(function (){
	var $ = jQuery,
		C = coconut;
	
	C.define('pageApp.task.TaskView', function(settings) {
		
		// 外部覆盖的参数
		var _attr = {
				el : undefined,
				model : undefined,
				url:undefined
			};
		_attr = $.extend(_attr,settings);
		
		// 私有变量
		var _self = this,
		
			// 	public method
			 method = {
					render : function (){
						return _getHtmlTemplate({index:i+1,content:v.getter('content')});
					},
					fech : function (url,complete){
						if(!url) return ;
						
						$.getJSON(url,function (data){
							$.each(data,function (k,v){
								_models[k] = _getModel(v);
							});
							complete && complete.apply(_self);
						});
					}
			};
		
		// private method
		
		
		
		var _getHtmlTemplate = function (data){
			var temp  = '<li><span class="toggle">{index}</span><label>{content}</label></li>';
			if(data){
				temp = C.formatter(temp,data);
			}
			return temp;
		};
		
		
		(function (){
			_attr.url && _self.fech(_attr.url,_self.refresh);
		}());
		

		return {
			on : function (key){
				if(!method[event]){
					throw 'can not found method : '+key;
				}
				method[event].apply(callback,Array.prototypeslice(arguments,1));
			},
			attr : function (key,value){
				if(typeof key !== 'string' && arguments.length === 0){
					throw 'invalid argument ';
				}
				if(arguments.length === 1 ){
					return _attr[key];
				}
					_attr[key] = value;
			}
		};

	});
});

	
