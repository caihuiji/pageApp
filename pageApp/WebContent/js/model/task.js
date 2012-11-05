/**
 * 
 * task 
 * 
 */

;
coconut.define('pageApp.Task', function(settings) {

	var override = {
		id : undefined,
		time : undefined,
		content : undefined,
		isCompleted : undefined
	};
	this._init = function() {
		$.extend(this, coconut.override(override, settings));
	};

	this.getter = function(name) {
		if (this[name] == null || typeof(this[name]) == 'function' ) {
			throw new Error('can not found property ' + name);
		}
		return this[name];
	};

	this.setter = function(name, val) {
		if (this[name] == null || typeof(this[name]) == 'function' ) {
			throw new Error('can not found property ' + name);
		}
		this[name] = val;
	};

	this._init();

	return this;

});
