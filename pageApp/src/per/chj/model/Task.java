package per.chj.model;

import java.util.Date;

public class Task {


	private String id;
	private Date time;
	private String content;
	private boolean isCompleted;
	
	public Task(String id, Date time, String content, boolean isCompleted) {
		super();
		this.id = id;
		this.time = time;
		this.content = content;
		this.isCompleted = isCompleted;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((content == null) ? 0 : content.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + (isCompleted ? 1231 : 1237);
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Task task = (Task) obj;

		if (task.getId() == null) {
			return false;
		}
		return task.getId().equals(this.id);
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", time=" + time + ", content=" + content + ", isCompleted=" + isCompleted + "]";
	}

}
