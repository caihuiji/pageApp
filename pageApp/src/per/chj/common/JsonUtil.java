package per.chj.common;

import net.sf.json.JSONObject;

public class JsonUtil {
	
	
	public static  String toJson (Object obj){
		return JSONObject.fromObject(obj).toString();
	}
	
	@SuppressWarnings("unchecked")
	public static  <T> T toObject (String str , Class<T> beanClass){
			return (T)JSONObject.toBean(JSONObject.fromObject(str), beanClass);
	}
	

}
