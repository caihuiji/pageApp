/**
 *--------------------------------------
 * Apusic (Kingdee Middleware)
 *---------------------------------------
 * Copyright By Apusic ,All right Reserved
 * author   date   comment
 * caihuiji  2013-4-8  Created
 *
 * overview:
 * aps图表，aps charts 抽象类
 * 
 * usage:
 * DataVisual.Events - 事件中心，使用参见Backbone
 * DataVisual.Utils  - 工具集合，使用参见Underscore
 * DataVisual.Chart  - 图表基类，
 * 
 *dependency : 
 * 	backbonejs
 *  underscore
 *  jquery
 */
;(function (name,definition){
	if(typeof define === 'function' && define.amd ){  // module
		define(['underscore','backbone','jquery'],definition);
	}else {
		this[name] = definition(_ , Backbone , jQuery);
	}
})("DataVisual", function (_ , Backbone , $) {
	
	/**
	 * 全局命名空间，和定义
	 */
	var DataVisual = function (){};
	
	/**
	 * 使用 backbone events 作为事件
	 */
	var Events = DataVisual.Events = Backbone.Events;
	
	/**
	 * 使用 underscore 作为 工具类
	 */
	var _ = DataVisual.Utils = _ ;
	
	/**
	 * 使用 jquery ajax 作为 ajax 工具
	 */
	var ajax = DataVisual.ajax = $.ajax;
	
  /**
	* 
	* context - 上下文
	* model   - 模型
	* param   - 附加参数
	*   
	* 事件模型解析,事件模型如下：
	* 1、 如果是 publish ，则使用 DataVisual.Events 发布 datavisual.xx  事件,暴露事件 event.publish
	* 2、 如果是 chart   ，则使用 jquery ajax 调用请求图表，完成后回调 event.chart
	* 3、 如果是 page    , 则使用 jquery ajax 调用请求页面，完成后回调 event.page
	* 
	*/
	var EventResolver = DataVisual.EventResolver =  function (context, model,param){
			var eventModel = model.event,
				eventType = eventModel.event,
				event = null,
				self = context;
			
			param ? (function (){
				var data = {};
				$.each(param,function (k,v){
					data["paramMap."+k] = v;
				});
				param = data;
			}()) : param = {};
			
			switch (eventType){
			case 'publish' :
				event = eventModel.eventPublish;
				self.trigger("event.publish",param) ;
				DataVisual.Events.trigger("datavisual." + event,param);
				break;
			case 'chart' :
				event = eventModel.nextLevel;
				if(model.level === eventModel.nextLevel){
					break;
				}
				$.ajax({
					url : self.charturl,
					data : $.extend({
						'level' : eventModel.nextLevel
						},param),
					success : function (data){
						var result = self.trigger("event.chart",data) ;
					}
				});
				
				break;
			case 'page' :
				event = eventModel.page;
				$.ajax({
					url :self.charturl,
					data : $.extend({
						'paramMap.pageType' : event[0],
						'paramMap.pageUrl': event[1],
						'chart' : 'page'
						},param),
					success : function (data){
						self.trigger("event.page",data) ;
						$('body').append(data);
					}
				});
				break;
			}
	};
	
	
	/**
	 * 真正的图形基类
	 */
	var Chart = DataVisual.Chart  = function (options){
		var $wrap = $('#'+options.el);
		var height = $wrap.parents('.aps-portlet-screen').height();
		options =	_.extend({
			width : $wrap.width(),
			height: height <=100 ? 500 : height-20,
		}, options);
		
		this.initialize.call (this,options);
		this.delegateEvents();
	};
	
	_.extend (Chart.prototype ,Events,{
		
		
		/**
		 * 图表渲染数据
		 */
		data : null,
		
		/**
		 * 模型数据
		 */
		model : null,
		
		events:{},
		
		/**
		 * 数据url地址
		 */
		url : null,
		
		/**
		 * 图形地址
		 */
		charturl : null,
		
		el : null,
		
		$el : null,
		
		_isOpenNextChart : false,
		
		initialize : function (options){},
		
		render : function (){
			return this;
		},
		
		/**
		 * 刷新图表
		 * 
		 * 如果options 不为空，则代表调用 fetch 后调用render
		 * 如果options 为空，则直接调用render
		 */
		refresh : function (options){
			return this;
		},
		
		/**
		 * 拉取数据
		 * 如果url 为空，则使用默认的 url 
		 * 
		 * opitons.resetdata 
		 * 			-  true  完成数据拉去后，替换 data
		 * 			-  false 
		 */
		fetch : function (options){
			var self = this;
			options = _.extend({
				dataType : 'json',
				type : 'get',
				url : this.url
			},options);
			
			var orgnalSuccess = options.success;
			options.success = function (data){
				options.resetdata && (self.data = data);
				orgnalSuccess && orgnalSuccess.call(self,data);
				self.trigger("fetch");
			};
			
			var orgnalError = options.error;
			options.error = function (data){
				orgnalError && orgnalError.call(self,data);
				self.trigger("error");
			};
			
			this.trigger('ajax',options);
			this.ajax(options);
			
			return this;
		},
		
		ajax : function (options){
			return ajax(options);
		},
		
		delegateEvents : function (){
			return this;
		},
		
		/**
		 * 挂载全局监听器
		 */
		attachListener : function (eventModel,callback){
			eventModel && eventModel.event &&
			DataVisual.Utils.each(eventModel.event.eventListener.split(";") , function (value, key, list){
				DataVisual.Events.on("datavisual."+ value , callback,this);
			},this);
		},
		
		/**
		 * 卸载事件
		 */
		dettachListener : function (eventModel){
			eventModel && eventModel.event &&
			DataVisual.Utils.each(eventModel.event.eventListener.split(";") , function (value, key, list){
				DataVisual.Events.off("datavisual."+ value);
			},this);
		}
		
	});
	
	
	/**
	 * 使用 Backbone extend 作为我们的继承接口
	 */
	Chart.extend =  Backbone.View.extend;
	
		
	return DataVisual;
	
});