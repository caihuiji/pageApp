
/**
 * namespace 定义组件
 * @name - module
 * @author caihuiji
 * @param namespace - 全路径
 * @param clazz - 类 (function)  
 */
(function (){
	

window.coconut = window.coconut || {};
var NAMESPACE_SEPARTOR = '.';

coconut.define = function (namespace,clazz){
	if(typeof(namespace) != 'string'  ){
		throw new Error ('namespace must be string');
	}
	

	/**
	 * 定义 namespace 
	 * @param namespace - 需要定义的 namespace  
	 */
	var generateNamespace = function (namespace,clazz){
		var namespaces = namespace.split(NAMESPACE_SEPARTOR),
			currrentNamespace = window;
		for(var np in namespaces){
			if ( !np.length ){
				throw 'namespace is illegal :'+ namespace ;
			}
			if(namespaces.length-1 == np){//the last one is class
				break;
			}
			currrentNamespace = currrentNamespace[namespaces[np]] =  currrentNamespace[namespaces[np]] ||{};
		}
		return (currrentNamespace[namespaces[namespaces.length-1]] = clazz);
	};
	
	return generateNamespace(namespace, clazz);
	
};
})();
