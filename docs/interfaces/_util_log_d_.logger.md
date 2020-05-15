[SmartApp](../classes/_smart_app_d_.smartapp.md) ›  [Logger](_util_log_d_.logger.md)
# Logger
## Properties

* [debug](_util_log_d_.logger.md#debug)
* [error](_util_log_d_.logger.md#error)
* [info](_util_log_d_.logger.md#info)
* [log](_util_log_d_.logger.md#log)
* [warn](_util_log_d_.logger.md#warn)

## Methods

* [exception](_util_log_d_.logger.md#exception)


###  debug

• **debug**: *LeveledLogMethod*

Log a debug message

___

###  error

• **error**: *LeveledLogMethod*

Log an error message

___

###  info

• **info**: *LeveledLogMethod*

Log an info message

___

###  log

• **log**: *LogMethod*

Log a message with a specified log level

___

###  warn

• **warn**: *LeveledLogMethod*

Log a warning message


###  exception

▸ **exception**(`error`: Error): *void*

Log a caught exception. The default logger display a stack trace when this method is used

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *void*

