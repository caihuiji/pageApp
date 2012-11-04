package per.chj.excepition;

public class TaskAlreayExistedException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public TaskAlreayExistedException() {
		super();
	}

	public TaskAlreayExistedException(String message, Throwable cause) {
		super(message, cause);
	}

	public TaskAlreayExistedException(String message) {
		super(message);
	}

	public TaskAlreayExistedException(Throwable cause) {
		super(cause);
	}
}
