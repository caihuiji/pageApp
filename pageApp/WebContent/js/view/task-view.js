/**
 * 
 * task 
 * 
 */

;
coconut.define('pageApp.task.TaskView', function(settings) {
	
	//外部覆盖的参数
	var override = {
			container : undefined,
			model : undefined,
			url:undefined
		};
	override = (this, coconut.override(override, settings));
	
	//私有变量
	var _$container = $(override.container);
	var _self = this;
	var _models = [];
	
	// public method
	
	this.refresh = function (){
		var html = [];
		$.each(_models ,function (i,v){
			html.push(_getHtmlTemplate({index:i+1,content:v.getter('content')}));
		});
		_$container.html(html.join(''));
	};
	
	this.fech = function (url,complete){
		if(!url) return ;
		
		$.getJSON(url,function (data){
			$.each(data,function (k,v){
				_models[k] = _getModel(v);
			});
			complete && complete.apply(_self);
		});
		
	};
	
	
	// private method 
	
	
	
	var _getHtmlTemplate = function (data){
		var temp  = '<li><span class="toggle">{index}</span><label>{content}</label></li>';
		if(data){
			temp = coconut.formatter(temp,data);
		}
		return temp;
	};
	
	var _getModel = function (data){
		var obj = new override.model(data);
		return obj;
	}
	
	
	var _init = function (){
		override.url && _self.fech(override.url,_self.refresh);
	};
	
	_init();

	return this;

});
