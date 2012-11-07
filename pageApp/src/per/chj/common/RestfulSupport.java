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
			Map<String, Object> map = new HashMap<String, Object>();
			if (status != null) {
				map.put("success", true);
			}

			if (obj != null) {
				map.put("content", obj);
			}

			pw = this.getResponse().getWriter();
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
