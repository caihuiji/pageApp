
/**
 * aps moduel 定义组件
 * @name - module
 * @author caihuiji
 * @param namespace - 报名
 * @param classname - 类名
 * @param clazz - 类 
 */

window.aps = window.aps || {};
aps.module = aps.module || {};
var NAMESPACE_SEPARTOR = '.';

aps.module.defined = function (namespace,clazz){
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
				throw new Error ('namespace is illegal :'+ namespace) ;
			}
			if(namespaces.length-1 == np){//the last one is class
				break;
			}
			currrentNamespace = currrentNamespace[namespaces[np]] =  currrentNamespace[namespaces[np]] ||{};
		}
		return (currrentNamespace[namespaces[namespaces.length-1]] = clazz);
	};
	
	
	/*var _oNameSpace = generateNamespace(namespace);
	var _oClazz = attachClass(_oNameSpace, className, clazz);
	_oClazz.call(_oNameSpace);*/
	return generateNamespace(namespace, clazz);
	
};

