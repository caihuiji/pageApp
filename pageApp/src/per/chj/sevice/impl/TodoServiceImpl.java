package per.chj.sevice.impl;

import java.util.Date;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import per.chj.excepition.CannotFoundTaskException;
import per.chj.excepition.TaskAlreayExistedException;
import per.chj.excepition.TodoServiceException;
import per.chj.model.Task;
import per.chj.sevice.ITodoService;

public class TodoServiceImpl implements ITodoService {

	private List<Task> _tasks = new LinkedList<Task>();
	
	public TodoServiceImpl(){
		test();
	}
	
	private void test(){
		for(int i =1 ; i<=5;i++){
			_tasks.add(new Task(String.valueOf(i),new Date(),"fuck me",false));
		}
	}

	@Override
	public void addTask(Task task) throws TaskAlreayExistedException, TodoServiceException {
		if (isExisted(task.getId())) {
			throw new TaskAlreayExistedException("task id:" + task.getId() + " has already existed");
		}

		try {
			_tasks.add(task);
		} catch (Exception e) {
			throw new TodoServiceException(e);
		}
	}

	@Override
	public void addTasks(List<Task> tasks) throws TaskAlreayExistedException, TodoServiceException {
		for (Task _task : tasks) {
			addTask(_task);
		}
	}

	@Override
	public void removeTask(Task task) throws CannotFoundTaskException, TodoServiceException {
		if (!isExisted(task.getId())) {
			throw new CannotFoundTaskException("can not found task id=" + task.getId());
		}

		try {
			for (Iterator<Task> i = _tasks.iterator(); i.hasNext();) {
				if (i.next().equals(task)) {
					i.remove();
				}
			}
		} catch (Exception e) {
			throw new TodoServiceException(e);
		}

	}

	@Override
	public void removeTasks(List<Task> tasks) throws TodoServiceException, CannotFoundTaskException {
		for (Task _task : tasks) {
			removeTask(_task);
		}

	}

	@Override
	public void removeTask(String id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void removeTasks(String[] ids) {
		// TODO Auto-generated method stub

	}

	@Override
	public Task findTask(Task task) {
		// TODO
		return null;
	}

	@Override
	public Task findTask(String id) {
		for (Task _task : _tasks) {
			if (_task.getId().equals(id)) {
				return _task;
			}
		}
		return null;
	}

	@Override
	public List<Task> findTasks(Task task) {
		// TODO
		return null;
	}

	@Override
	public List<Task> findTasks() {
		return _tasks;
	}

	@Override
	public void updateTask(Task task) throws CannotFoundTaskException, TodoServiceException {
		Task dest = this.findTask(task.getId());

		if (dest == null) {
			throw new CannotFoundTaskException("can not found task id=" + task.getId());
		}

		try {
			dest.setContent(task.getContent());
			dest.setCompleted(task.isCompleted());
			dest.setTime(task.getTime());
		} catch (Exception e) {
			throw new TodoServiceException(e);
		}
	}
	
	@Override
	public void updateTask(Map<String, String> criteria, Task task) throws CannotFoundTaskException,
			TodoServiceException {
		//TODO
	}

	@Override
	public void updateTask(String id, Task task) throws CannotFoundTaskException, TodoServiceException {
		task.setId(id);
		updateTask(task);
	}

	@Override
	public void updateTasks(List<Task> tasks) throws CannotFoundTaskException, TodoServiceException {
		for (Task _task : _tasks) {
			updateTask(_task);
		}
	}

	private boolean isExisted(String id) {
		for (Task _task : _tasks) {
			if (_task.getId().equals(id)) {
				return true;
			}
		}
		return false;
	}
}
