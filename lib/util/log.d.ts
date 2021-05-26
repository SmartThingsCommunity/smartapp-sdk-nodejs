import {LeveledLogMethod, LogMethod} from 'winston'

export interface Logger {

	/**
	 * Log a message with a specified log level
	 */
	log: LogMethod

	/**
	 * Log a debug message
	 */
	debug: LeveledLogMethod

	/**
	 * Log an info message
	 */
	info: LeveledLogMethod

	/**
	 * Log a warning message
	 */
	warn: LeveledLogMethod

	/**
	 * Log an error message
	 */
	error: LeveledLogMethod

	/**
	 * Log a caught exception. The default logger display a stack trace when this method is used
	 */
	exception(error: Error): void
}
