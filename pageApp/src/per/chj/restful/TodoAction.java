 /*$Id: $
 *--------------------------------------
 * Apusic (Kingdee Middleware)
 *---------------------------------------
 * Copyright By Apusic ,All right Reserved
 * author   date   comment
 * caihuiji  2012-10-31  Created
*/
package per.chj.restful;

import java.util.List;

import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;

import per.chj.common.RestfulSupport;
import per.chj.excepition.CannotFoundTaskException;
import per.chj.excepition.TaskAlreayExistedException;
import per.chj.excepition.TodoServiceException;
import per.chj.model.Task;
import per.chj.sevice.ITodoService;
import per.chj.sevice.impl.TodoServiceImpl;

@Results({
    @Result(name="success", type="redirectAction", params = {"actionName" , "todo"})
})

public class TodoAction extends RestfulSupport {

	private static final long serialVersionUID = 1L;
	
	private String id ;
	
	private static final String INDEX = "index";
	private static final String EDIT = "edit";
	
	private static  ITodoService todoService = new TodoServiceImpl(); 
	
	private Task task ;
	
	private List<Task> tasks;
	
	
	//index
	public String index (){
		tasks = todoService.findTasks();
		return INDEX;
	}
	
	//create
	public void create (){
		try {
			todoService.addTask(task);
			this.writeStatus("success");
		} catch (TaskAlreayExistedException e) {
			e.printStackTrace();
			this.write("error","task has alreay existed");
		} catch (TodoServiceException e) {
			e.printStackTrace();
			this.write("error","can not be add!");
		}
	}
	
	//update
	public void update (){
		try {
			todoService.updateTask(task);
			this.writeStatus("success");
		} catch (CannotFoundTaskException e) {
			e.printStackTrace();
			this.write("error","can not found task!");
		} catch (TodoServiceException e) {
			e.printStackTrace();
			this.write("error","can not be update!");
		}
	}
	
	//delete 
	public void destory (){
		try {
			todoService.removeTask(id);
			this.writeStatus("success");
		} catch (CannotFoundTaskException e) {
			e.printStackTrace();
			this.write("error","can not found task!");
		} catch (TodoServiceException e) {
			e.printStackTrace();
			this.write("error","can not be remove!");
		}
	}
	
	//show 
	public String show (){
		this.task = todoService.findTask(id);
		return INDEX;
	}
	
	//edit
	public String edit (){
		this.task = todoService.findTask(id);
		return EDIT;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Task getTask() {
		return task;
	}

	public void setTask(Task task) {
		this.task = task;
	}

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}

}
