/* eslint no-undef: 'off' */

process.on('unhandledRejection', error => {
	fail(error)
})
