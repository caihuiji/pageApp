package per.chj.excepition;

public class TodoServiceException  extends Exception {
	

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	public TodoServiceException() {
		super();
	}

	public TodoServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public TodoServiceException(String message) {
		super(message);
	}

	public TodoServiceException(Throwable cause) {
		super(cause);
	}
}
