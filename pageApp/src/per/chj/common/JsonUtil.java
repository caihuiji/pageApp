package per.chj.common;

import net.sf.json.JSONObject;

import org.codehaus.jackson.map.ObjectMapper;

public class JsonUtil {
	
	
	public static  String toJson (Object obj){
		ObjectMapper om = new ObjectMapper();
			try {
				return om.writeValueAsString(obj);
			} catch (Exception e){
				throw new IllegalArgumentException("can not generate json ",e);
			}
	}
	
	@SuppressWarnings("unchecked")
	public static  <T> T toObject (String str , Class<T> beanClass){
			return (T)JSONObject.toBean(JSONObject.fromObject(str), beanClass);
	}
	

}
