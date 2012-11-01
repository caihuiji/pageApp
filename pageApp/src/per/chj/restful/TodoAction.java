 /*$Id: $
 *--------------------------------------
 * Apusic (Kingdee Middleware)
 *---------------------------------------
 * Copyright By Apusic ,All right Reserved
 * author   date   comment
 * caihuiji  2012-10-31  Created
*/
package per.chj.restful;

import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;

import com.opensymphony.xwork2.ActionSupport;

@Results({
    @Result(name="success", type="redirectAction", params = {"actionName" , "todo"})
})

public class TodoAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	
	private String id ;
	
	private static final String INDEX = "index";
	
	
	//index
	public String index (){
		return INDEX;
	}
	
	//create
	public void create (){
		System.out.println("create");
	}
	
	//update
	public void update (){
		System.out.println("update"+id);
	}
	
	//delete 
	public void destory (){
		System.out.println("delete"+id);
	}
	
	//show 
	public String show (){
		return INDEX;
	}
	
	//show 
	public void showNew (){
		System.out.println("show New"+id);
	}
	
	//edit
	public void edit (){
		System.out.println("edit"+id);
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
