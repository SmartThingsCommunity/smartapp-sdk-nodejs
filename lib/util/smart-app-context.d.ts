import {ComponentStatus, SmartThingsClient} from '@smartthings/core-sdk'
import { AppEvent } from '../lifecycle-events'

export interface DeviceContext {
	deviceId: string
	name: string
	label: string
	componentId: string
}

export interface DeviceStateContext extends DeviceContext {
	state: { [componentId: string]: ComponentStatus }
}

export interface SmartAppContext {

	/**
	* An instance of the SmartThings core API instantiated with the access token for the installed app instance.
	*/
	api: SmartThingsClient

	/**
	* The SmartApp configuration object containing the values of all user selections made during app installation.
	*/
	config: AppEvent.ConfigMap

	/**
	* Returns the specified configuration setting typed as a boolean
	* @param id the id specified when the setting was created
	*/
	configBooleanValue(id: string): boolean

	/**
	* Returns the specified configuration setting typed as a Date object
	* @param id the id specified when the setting was created
	*/
	configDateValue(id: string): Date

	/**
	* Retrieves the devices specified in the configuration along with their names and
	* labels (which are not stored in the configuration map and so require API calls)
	* @param id the id specified when the setting was created
	*/
	configDevices(id: string): Promise<DeviceContext[]>

	/**
	* Retrieves the devices specified in the configuration along with their names,
	* labels, and the current values of all of their capabilities.
	* @param id the id specified when the setting was created
	*/
	configDevicesWithState(id: string): Promise<DeviceStateContext[]>

	/**
	* Returns a list of mode ids from the specified mode configuration setting
	* @param id the id specified when the setting was created
	*/
	configModeIds(id: string): string[]

	/**
	* Returns the specified configuration setting typed as a number
	* @param id the id specified when the setting was created
	*/
	configNumberValue(id: string): number

	/**
	* Returns the specified configuration setting typed as a string
	* @param id the id specified when the setting was created
	*/
	configStringValue(id: string): string

	/**
	* Returns the specified configuration setting typed as a time string
	* @param id the id specified when the setting was created
	*/
	configTimeString(id: string): string

	/**
	* Tests whether the context is authenticated to make API calls, i.e. has an accessToken.
	* Note that this method does not actually test the validity of the token, but rather
	* whether it is present or not. Contexts of CONFIGURATION lifecycle events are not
	* authenticated. Therefore if an app needs to make API calls during the configuration
	* lifecycle it must use a token store to authenticate itself.
	*/
	isAuthenticated(): boolean

	/**
	* Retrieve the tokens of the installed instance from the token store and return a new, authenticated
	* SmartAppContext. This method is typically used to allow API calls to be made from the handlers
	* of CONFIGURATION/PAGE lifecycle events.
	* @deprecated This method will be removed at some point after the platform has been changed to include
	* valid tokens in CONFIGURATION events as it does for all other lifecycle events.
	*/
	retrieveTokens(): Promise<SmartAppContext>

	/**
	* Sets the location of the app context. Explicitly setting the location is typically necessary when an
	* API Access app is first authorized. It is not needed when handling lifecycle events.
	* @param id the location UUID
	*/
	setLocationId(id: string): void
}
