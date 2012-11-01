package per.chj.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

public class UtilFilter implements Filter {

	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest hsr = (HttpServletRequest) request;
		hsr.setAttribute("BASE_URL", getBasePath(hsr));
		hsr.setAttribute("CONTEXT_PATH", hsr.getContextPath());
		chain.doFilter(request, response);
	}

	private String getBasePath(HttpServletRequest hsr) {
		StringBuffer sb = new StringBuffer(50);
		sb.append(hsr.getScheme()).append("://").append(hsr.getServerName())
				.append(":").append(hsr.getServerPort())
				.append(hsr.getContextPath());
		return sb.toString();
	}

}
