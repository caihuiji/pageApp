package per.chj.excepition;

public class CannotFoundTaskException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CannotFoundTaskException() {
		super();
	}

	public CannotFoundTaskException(String message, Throwable cause) {
		super(message, cause);
	}

	public CannotFoundTaskException(String message) {
		super(message);
	}

	public CannotFoundTaskException(Throwable cause) {
		super(cause);
	}
}
