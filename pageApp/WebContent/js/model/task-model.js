/**
 * 
 * task 
 * 
 */

;
coconut.define('pageApp.task.TaskModel', function(settings) {

	var override = {
		id : undefined,
		time : undefined,
		content : undefined,
		isCompleted : undefined
	};
	override = (this, coconut.override(override, settings));
	var _self = this;
	
	

	this.getter = function(name) {
		if (override[name] == null || typeof(override[name]) == 'function' ) {
			throw new Error('can not found property ' + name);
		}
		return override[name];
	};

	this.setter = function(name, val) {
		if (override[name] == null || typeof(override[name]) == 'function' ) {
			throw new Error('can not found property ' + name);
		}
		override[name] = val;
	};

	var _init = function() {
	};
	
	_init();

	return this;

});
