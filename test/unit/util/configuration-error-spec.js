const ConfigurationError = require('../../../lib/util/configuration-error')

describe('configuration-error-spec', () => {
	it('should return an undefined message if not set', () => {
		const error = new ConfigurationError()
		expect(error.message).toBeUndefined()
	})

	it('should return an undefined message if not set', () => {
		const error = new ConfigurationError('My Error')
		expect(error.message).toBe('My Error')
	})

	it('should return the message by `toString()` usage', () => {
		const error = new ConfigurationError('My Error')
		expect(error.toString()).toBe('My Error')
	})

	it('should include the message key', () => {
		const error = new ConfigurationError()
		expect(error).toEqual(expect.objectContaining({message: undefined}))
	})
})
