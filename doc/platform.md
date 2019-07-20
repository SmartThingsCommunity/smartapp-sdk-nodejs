# SmartThings SDK

## Platform API Reference


### Device Profiles

##### _deviceprofiles.list (query = {max: 500})_

##### _deviceprofiles.get (id)_

##### _deviceprofiles.create (data)_

##### _deviceprofiles.update (id, data)_


### Devices

##### _create(params)_
params:
* label -- display name of the device
* profileId -- device profile ID
* externalId (optional) -- ID of the device in the external service

##### _devices.delete (deviceId)_

##### _devices.get (deviceId)_

##### _devices.update (deviceId, data)_

##### _devices.sendEvents (deviceId, events)_

##### _devices.listInLocation ()_

##### _devices.listAll ()_

##### _devices.sendCommand (item, capability, command, arguments)_<br>_devices.sendCommand (item, [{capability:'switch', command:'on', arguments:[]}])_

##### _devices.sendCommands (items, capability, command, arguments)_<br>_devices.sendCommands (items, [{capability:'switch', command:'on', arguments:[]}])_

##### _devices.postCommands (deviceId, body)_

##### _devices.getState (deviceId)_

##### _devices.getComponentState (deviceId, componentId)_

##### _devices.getCapabilityState (deviceId, componentId, capabilityId)_

##### _devices.getHealth (deviceId)_

##### _devices.getAttributeValue (deviceId, capability, attribute)_

##### _devices.namedColor (color, sat = 100)_


### Installed Apps

##### _installedapps.list (locationId = null)_

##### _installedapps.get (id = null)_

##### _installedapps.update (id, data)_

##### _installedapps.getConfigs (id = null)_

##### _installedapps.getConfig (id = null, configId)_

##### _installedapps.deleteInstalledApp (id)_

##### _installedapps.listChildDevices ()_


### Locations

##### _locations.list (query = {max: 500})_

##### _locations.get (id = null)_

##### _locations.updateLocation (id, data)_

##### _locations.createLocation (data)_

##### _locations.deleteLocation (id)_

    
### Modes

##### _modes.list (query = {max: 500})_

##### _modes.get (id)_

##### _modes.update (id, data)_


### Scenes

##### _scenes.list (query = {max: 500})_

##### _scenes.getScene (id)_

##### _scenes.execute (id)_


### Rooms

##### _rooms.list (locationId = null)_

##### _rooms.get (id, locationId = null)_

##### _rooms.create (data, locationId = null)_

##### _rooms.update (id, data, locationId = null)_

##### _rooms.delete (id, locationId = null)_


### Schedules

##### _schedules.schedule (name, cronExpression)_

##### _schedules.runDaily (name, time)_

Accepts time setting, Date object, or ISO string

##### _schedules.runIn (name, delay)_

##### _schedules.unschedule (name)_

##### _schedules.unscheduleAll ()_


### Subscriptions

##### _subscriptions.list ()_

##### _subscriptions.get (name)_

##### _subscriptions.update (name, data)_

##### _subscriptions.unsubscribe (name)_

##### _subscriptions.unsubscribeAll ()_

##### _subscriptions.subscribeToDevices (devices, capability, attribute, subscriptionName, options={})_

##### _subscriptions.subscribeToCapability (capability, attribute, subscriptionName, options={})_

##### _subscriptions.subscribeToModeChange (subscriptionName)_

##### _subscriptions.subscribeToDeviceLifecycle (devices, subscriptionName)_

##### _subscriptions.subscribeToDeviceHealth (devices, subscriptionName)_

##### _subscriptions.subscribeToSecuritySystem (subscriptionName)_

##### _subscriptions.subscribeToHubHealth (subscriptionName)_

##### _subscriptions.subscribeToSceneLifecycle (subscriptionName)_
