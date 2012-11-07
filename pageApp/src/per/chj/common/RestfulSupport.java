package per.chj.common;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class RestfulSupport extends ActionSupport {

	private static final long serialVersionUID = 1L;

	protected HttpServletRequest getRequest() {
		return ServletActionContext.getRequest();
	}

	protected HttpServletResponse getResponse() {
		return ServletActionContext.getResponse();
	}

	public void write(Boolean status, Object obj) throws IllegalArgumentException {
		PrintWriter pw;
		try {
			HttpServletResponse hsr = getResponse();
			hsr.setContentType("text/html");
			hsr.setCharacterEncoding("UTF-8");
			pw = this.getResponse().getWriter();
			Map<String, Object> map = new HashMap<String, Object>();
			
			if (obj != null) {
				if(status == null){
					pw.write(JsonUtil.toJson(obj));
					return ;
				}
				map.put("content", obj);
			}
			
			if (status != null) {
				map.put("success", true);
			}


			pw.write(JsonUtil.toJson(map));
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}

	public void writeStatus(boolean status) {
		write(status, null);
	}

	public void writeContent(Object obj) {
		write(null, obj);
	}
}
