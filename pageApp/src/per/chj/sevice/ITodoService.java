package per.chj.sevice;

import java.util.List;
import java.util.Map;

import per.chj.excepition.CannotFoundTaskException;
import per.chj.excepition.TaskAlreayExistedException;
import per.chj.excepition.TodoServiceException;
import per.chj.model.Task;

public interface ITodoService {
	
	
	public void addTask (Task task) throws TodoServiceException,TaskAlreayExistedException;
	
	public void addTasks (List<Task> tasks) throws TodoServiceException,TaskAlreayExistedException;;
	
	
	public void removeTask (Task task) throws CannotFoundTaskException,TodoServiceException;
	public void removeTasks (List<Task> tasks) throws CannotFoundTaskException,TodoServiceException;
	public void removeTask (String id) throws CannotFoundTaskException,TodoServiceException;
	public void removeTasks (String[] ids) throws CannotFoundTaskException,TodoServiceException;
	
	
	public Task findTask (Task task) ;
	public Task findTask (String id) ;
	public List<Task> findTasks (Task task);
	public List<Task> findTasks ();
	
	
	public void updateTask (Task task) throws CannotFoundTaskException,TodoServiceException;
	public void updateTask (String id ,Task task) throws CannotFoundTaskException,TodoServiceException;
	public void updateTask (Map<String ,String> criteria ,Task task) throws CannotFoundTaskException,TodoServiceException;
	public void updateTasks (List<Task> tasks) throws CannotFoundTaskException,TodoServiceException;

}
