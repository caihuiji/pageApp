/**
 * 
 * task
 * 
 */

;
$(function() {

	C.define('pageApp.task.TaskModel', function(settings) {

		return function(settings ,$, C) {

			var _attr = {
				id : undefined,
				time : undefined,
				content : undefined,
				isCompleted : undefined
			};
			_s = $.extend(_s, settings);

			var _self = this,
				_event = new C.event();

			// constructor
			(function() {

			}());

			return {
				attr : function(key, value) {
					if (typeof key !== 'string' && arguments.length === 0) {
						throw 'invalid argument ';
					}
					if (arguments.length === 1) {
						return _attr[key];
					}
					_attr[key] = value;
				},
				on : function (){
				}
				
			};
		}(setting ,jQuery, window);
	});
});
