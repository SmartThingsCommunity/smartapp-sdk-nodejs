## [4.0.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v3.0.2...v4.0.0) (2023-02-01)


### ⚠ BREAKING CHANGES

* remove deprecated color-setting feature (#239)

### Features

* remove deprecated color-setting feature ([#239](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/239)) ([d8449bc](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/d8449bc78ad383c64c6df1e3d9668055863ac518))

## [3.0.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v3.0.1...v3.0.2) (2023-02-01)


### Bug Fixes

* update dependencies ([#240](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/240)) ([abe793d](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/abe793db09195ad69b18217f42472b14ae8cb05f))

### [3.0.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v3.0.0...v3.0.1) (2022-12-13)


### Bug Fixes

* specify main as the semantic release branch ([#235](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/235)) ([75d34c3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/75d34c31e179133f94c55be40b80509357bade7f))
* support other API urls for API_ONLY apps ([#234](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/234)) ([22578a6](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/22578a6abadb54cd9ebe5d58d028487d5ec5b62a))

## [3.0.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.6.2...v3.0.0) (2022-08-11)


### ⚠ BREAKING CHANGES

* The SmartThingsClient (context.api) has been updated
which includes breaking changes to select devices and apps methods.
The SDK will also no longer write OAuth client details to the context
store if it is configured.

### Features

* update Core SDK to v5 ([#227](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/227)) ([e0e374c](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/e0e374c871c64e985db6caeb5099a814172284ec))

### [2.6.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.6.1...v2.6.2) (2022-04-12)


### Bug Fixes

* **deps:** npm audit ([#220](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/220)) ([6f229cc](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/6f229cccf84a94ca58b0fd9a38414e2c4a32c0b6))

### [2.6.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.6.0...v2.6.1) (2022-01-27)


### Bug Fixes

* **deps:** npm audit ([#215](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/215)) ([7ad8032](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/7ad803267928096d256b0b0d06cb01acdb2d8f11))

## [2.6.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.5.5...v2.6.0) (2021-09-13)


### Features

* Exported Page class to support unit testing of SmartApps ([#206](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/206)) ([0af7ef9](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/0af7ef9680673a445e7cf034cff70e3e68428f64))

### [2.5.5](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.5.4...v2.5.5) (2021-09-01)


### Bug Fixes

* Fixed bug when making API calls from page handlers in installed apps ([#205](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/205)) ([34b50d5](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/34b50d51f0aaad618d22f20c0e3261f4b1986716))

### [2.5.4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.5.3...v2.5.4) (2021-07-08)


### Bug Fixes

* await async updated handlers during install ([#202](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/202)) ([834c176](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/834c17642edcf58920b6f3ecaa20997cd4e7bb1b)), closes [#200](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/200)

### [2.5.3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.5.2...v2.5.3) (2021-06-02)


### Bug Fixes

* **Initialization:** add return type annotations ([#198](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/198)) ([b4b1afc](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/b4b1afcf2bde579ad0e97a3435f50eac71927600))

### [2.5.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.5.1...v2.5.2) (2021-05-13)


### Bug Fixes

* Handle re-written URLs in HTTP signature validation ([#196](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/196)) ([69b89c5](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/69b89c52bba7386952590880a9a19484444c8f68))

### [2.5.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.5.0...v2.5.1) (2021-05-11)


### Bug Fixes

* **deps:** npm audit ([#195](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/195)) ([fdbf767](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/fdbf7676dc97d27c26caebb9e776da42e1d5c067))

## [2.5.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.4.5...v2.5.0) (2021-02-02)


### Features

* Added optional handler for CONFIGURATION/INITIALIZE event ([#183](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/183)) ([4179093](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/41790938f80aa34dd79333d47187b4e6bc62e14b))

### [2.4.5](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.4.4...v2.4.5) (2021-01-26)


### Bug Fixes

* Add Accept-Language to API calls when locale is set ([#182](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/182)) ([7dfe817](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/7dfe8179b7f8243d6d24808cfb39a8c03757d85b))

### [2.4.4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.4.3...v2.4.4) (2021-01-07)


### Bug Fixes

* Updated axios and core-sdk versions ([#179](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/179)) ([770dfee](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/770dfee10604ce604e0ca9d902dd2a595ceda3dc))

### [2.4.3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.4.2...v2.4.3) (2020-11-18)


### Bug Fixes

* Added modules docs ([#172](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/172)) ([ec9d6eb](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/ec9d6eb1ca47ce53d70a0884bdc1614541f5a99b))

### [2.4.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.4.1...v2.4.2) (2020-09-22)


### Bug Fixes

* Add await to context store put operations ([#166](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/166)) ([da45caf](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/da45caf84a1582896da4af182f360e4bb3e70e92))

### [2.4.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.4.0...v2.4.1) (2020-09-17)


### Bug Fixes

* Updated core SDK to fix subscription create bug ([#163](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/163)) ([c30f062](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/c30f062824037af82b17053046458e6b8dbb738c))

## [2.4.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.3.1...v2.4.0) (2020-09-04)


### Features

* Support async lambda event handlers ([#161](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/161)) ([3ff8f5b](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/3ff8f5bbbeff13767f1b98916114983b9bba7af9))

### [2.3.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.3.0...v2.3.1) (2020-08-28)


### Bug Fixes

* Construct proper authenticator type ([#157](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/157)) ([36d2eb3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/36d2eb388cb16671c501d799547976e9d12cb1b5))
* log missing event handlers ([#158](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/158)) ([8ba2b46](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/8ba2b469e8736f21d13bf5a72966f9d0364b31b0))

## [2.3.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.2.0...v2.3.0) (2020-08-21)


### Features

* Return 422 status for missing event handlers ([#156](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/156)) ([6b04c4a](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/6b04c4a7b7f113b72c9985555c9a31c153fa2318))

## [2.2.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.1.0...v2.2.0) (2020-06-01)


### Features

* Typescript types ([#149](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/149)) ([acaadb8](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/acaadb8f41e8a6bd54aed2e2e87a2ec01026f300))

## [2.1.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v2.0.0...v2.1.0) (2020-04-07)


### Features

* Updated core SDK for service support and bug fixes ([#146](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/146)) ([415cb49](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/415cb49f7c06716478464d8d450deb210cd8000c))

## [2.0.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.18.0...v2.0.0) (2020-03-18)


### ⚠ BREAKING CHANGES

* some incompatibilities in list methods and http error handling

* BREAKING CHANGE: Core API integration (#143) ([c66988d](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/c66988ddb3616b02663841dae1989c3bb0577b15)), closes [#143](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/143)

## [1.18.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.17.0...v1.18.0) (2020-03-12)


### Features

* Return executeData in response to EXECUTE lifecycle event ([#141](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/141)) ([6aa0340](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/6aa0340f923c5353fdd9081ba47bcf929ba3331a))

## [1.17.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.16.0...v1.17.0) (2020-03-04)


### Features

* Removed auto-confirmation for API Access apps ([#142](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/142)) ([43694a2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/43694a26675c0c63961b959ff1723298c9b76599))

## [1.16.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.15.1...v1.16.0) (2020-03-02)


### Features

* Synchronize only refreshes to preserve multi-threading ([#140](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/140)) ([b2fb57b](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/b2fb57be393a85d92b91eda8a6127a289e28f74b))

### [1.15.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.15.0...v1.15.1) (2020-01-02)


### Bug Fixes

* package.json, package-lock.json & .snyk to reduce vulnerabilities ([#130](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/130)) ([600cede](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/600ceded58a210dc05b7501a1d2ccbfea597a9a3))

## [1.15.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.14.2...v1.15.0) (2019-12-24)


### Features

* Added support for rules API ([#133](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/133)) ([738a6da](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/738a6da4ee3ecaa3d0ab15863e804163d3eecb66))

### [1.14.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.14.1...v1.14.2) (2019-12-24)


### Bug Fixes

* reverted text-setting change at [#127](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/127) as [#131](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/131) merged ([#134](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/134)) ([ab57673](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/ab57673ab69384e839cfb4964dc6d80f9eb85e03))

### [1.14.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.14.0...v1.14.1) (2019-12-23)


### Bug Fixes

* applied translateDefaultValue to SectionSettings to ensure compatibility ([#131](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/131)) ([02b3bfb](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/02b3bfb0f7be9144086d62a6e6f44c7b0f0d42d3))

## [1.14.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.13.6...v1.14.0) (2019-12-10)


### Features

* Added switch to disable translating of options ([#129](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/129)) ([82c0d54](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/82c0d541ef79eefc0ade8d1ea6ad1aa6203eb273))

### [1.13.6](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.13.5...v1.13.6) (2019-12-09)


### Bug Fixes

* Log responses as well as events for lambdas as is done for webhooks ([#128](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/128)) ([929f401](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/929f4014a1d7e37037dc06f76eddc62b4fc0c3ff))

### [1.13.5](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.13.4...v1.13.5) (2019-10-14)


### Bug Fixes

* Corrected bug in automatic refresh of tokens ([#120](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/120)) ([affa856](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/affa856d0bf450eb96c43cf4e66efef25e253556))

### [1.13.4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.13.3...v1.13.4) (2019-10-08)


### Bug Fixes

* update dependencies ([#119](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/119)) ([2e29498](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/2e29498b526a192cbbaa9c4fb357e08d53512392))

### [1.13.3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.13.2...v1.13.3) (2019-10-08)


### Bug Fixes

* package.json & .snyk to reduce vulnerabilities ([#118](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/118)) ([841cec9](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/841cec9e8be76ece5fecf4730ebbe8445d094ac1))

### [1.13.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.13.1...v1.13.2) (2019-09-26)


### Bug Fixes

* release semaphore when sequential api throws non-401 errors ([#117](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/117)) ([2fa347e](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/2fa347ea503d27c9691282d2ea0fbd222d4f4e7a))

### [1.13.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.13.0...v1.13.1) (2019-09-24)


### Bug Fixes

* catch 404 exception from device health for unenrolled devices ([#116](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/116)) ([f8f3ba5](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/f8f3ba584759f5d3caa16b47dc69c8e6e9d18f7e))

## [1.13.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.12.0...v1.13.0) (2019-09-24)


### Features

* Pass event time to handlers ([#115](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/115)) ([d71e259](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/d71e2592376d17d9fecf83a49f80dabeec5d5b37))

## [1.12.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.11.0...v1.12.0) (2019-09-24)


### Features

* EnumSettings i18n ([#110](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/110)) ([fb82636](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/fb82636b15f93160d9064e56e1338173be78b9b8))

## [1.11.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.10.1...v1.11.0) (2019-09-17)


### Features

* Change to be able to set localized postMessage in decimal-setting ([#114](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/114)) ([824674a](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/824674aa857d68eab2a074d4b29caf514fe3298f))

### [1.10.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.10.0...v1.10.1) (2019-09-06)


### Bug Fixes

* hardened acquisition of language in smart-app-context ([#112](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/112)) ([e8593d4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/e8593d46689dd0d2da29b88f7ae9bd8340e3d771))

## [1.10.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.9.0...v1.10.0) (2019-08-27)


### Features

* additional app event types ([#106](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/106)) ([ba3ed36](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/ba3ed368ffe67e318948b4e0468e029d3e707ac6))

## [1.9.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.8.1...v1.9.0) (2019-08-20)


### Features

* added method to list devices in a room ([#105](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/105)) ([001420a](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/001420a9d8acdc583ab2ba99e32bb5219ea5889f))

### [1.8.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.8.0...v1.8.1) (2019-08-02)


### Bug Fixes

* pagecallback does not return smartapp instance ([#104](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/104)) ([d5e499d](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/d5e499d34fd104191f8964acefe714666943d2d7))

## [1.8.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.7.0...v1.8.0) (2019-07-26)


### Features

* corrected handlers for non-device event types ([#99](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/99)) ([990280e](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/990280e2eadfd5073e70175c6bfb4346fb285ae0))

## [1.7.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.6.0...v1.7.0) (2019-07-24)


### Features

* Added default page handler ([#92](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/92)) ([86f0bef](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/86f0bef9911660c76be2d8394d9a1989362dda53))

## [1.6.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.5.1...v1.6.0) (2019-07-23)


### Features

* Added rooms API ([#91](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/91)) ([8421be4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/8421be455921d44a2c36894a32cc503a618b8fe7))

### [1.5.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.5.0...v1.5.1) (2019-07-23)


### Bug Fixes

* Bug in configuration/page retrieveTokens when no ctx store ([#96](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/96)) ([63ef46a](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/63ef46a172e8be2e827782ac7899f7a65c5f3a0a))

## [1.5.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.4.3...v1.5.0) (2019-07-22)


### Features

* Allow API calls while rendering pages in installed app ([#90](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/90)) ([1601918](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/1601918b073642be628e435e823edff249343a77))

### [1.4.3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.4.2...v1.4.3) (2019-07-22)


### Bug Fixes

* bugs in devices by capability query and section name localization ([#93](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/93)) ([2711cd4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/2711cd42871e36b825c64946860fbc8b431a511a))

### [1.4.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.4.1...v1.4.2) (2019-07-21)


### Bug Fixes

* removed resolveWithFull response that is a beaking change ([#94](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/94)) ([755e21b](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/755e21b10c226f1d08d81d803cc81eefcca4b9c3))

### [1.4.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.4.0...v1.4.1) (2019-07-20)


### Bug Fixes

* Output stack trace for uncaught exceptions in handler ([#89](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/89)) ([c13e655](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/c13e6559edccad3f504fa6b600bf159371d00402))

## [1.4.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.3.2...v1.4.0) (2019-07-19)


### Features

* Accept lists of device commands ([#88](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/88)) ([bed23a0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/bed23a03b670890d92601f47df9b351cf862bc13))

### [1.3.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.3.1...v1.3.2) (2019-07-19)


### Bug Fixes

* **context:** Fix npe prone code ([#87](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/87)) ([39757bf](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/39757bfbed02aa10c8583934cf17740c4e0a6915))

### [1.3.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.3.0...v1.3.1) (2019-07-11)


### Bug Fixes

* Fix broken Ping lifecycle authorization due to Issue-77 addition ([#83](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/83)) ([2399c40](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/2399c40e8c827713adc7b7d45c628fee52087efc))

## [1.3.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.2.4...v1.3.0) (2019-07-11)


### Features

* Add support for async confirmation ([#78](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/78)) ([dd14a6f](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/dd14a6f9833868c0e1aa3e1e1e767874bfc24053)), closes [#77](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/77)

### [1.2.4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.2.3...v1.2.4) (2019-07-08)


### Bug Fixes

* .snyk, package.json & package-lock.json to reduce vulnerabilities ([#76](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/76)) ([7225e45](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/7225e45cef96d4406c26b322ce25b32cfa389644))

### [1.2.3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.2.2...v1.2.3) (2019-07-08)


### Bug Fixes

* .snyk, package.json & package-lock.json to reduce vulnerabilities ([#75](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/75)) ([3e0df34](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/3e0df3440ba6d5d5148c8c035f3f719864eeba97))

### [1.2.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.2.1...v1.2.2) (2019-05-07)


### Bug Fixes

* Call npm script semantic-release ([#69](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/69)) ([5d8cb36](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/5d8cb36855c082ade2f837870cdce53846cdddb1))
* fix publish ci script ([#70](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/70)) ([f6761d0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/f6761d03d0706d06a6d0af0f8bc1ede2fe3588fa))

### [1.2.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.2.0...v1.2.1) (2019-05-06)


### Bug Fixes

* Allow context initialization without data store ([#68](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/68)) ([7e7046a](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/7e7046a9264c5164d5c2869a4297e991bf96a4c4))

## [1.2.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.1.3...v1.2.0) (2019-04-24)


### Features

* Added default unhandled promise rejection handler ([#67](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/67)) ([1869a9c](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/1869a9cdb7cc5956421b90390d560fd019551446))

### [1.1.3](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.1.2...v1.1.3) (2019-04-20)


### Bug Fixes

* set _defaultRequired=false ([#65](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/65)) ([a2d168f](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/a2d168fd880fd88038210a2eb4ed0122f27a3bf8))

### [1.1.2](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.1.1...v1.1.2) (2019-04-18)


### Bug Fixes

* autocompletions with jsdocs ([#63](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/63)) ([5895d6b](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/5895d6bbe07434176256c9863d1d875d97da0959))

### [1.1.1](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.1.0...v1.1.1) (2019-04-14)

## [1.1.0](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.0.5...v1.1.0) (2019-04-13)


### Features

* resubmit property for configuration lifecycle ([#59](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/59)) ([f78ae10](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/f78ae1069bad5aaa3d3fcfdc96a65e72b25d6668))

### [1.0.5](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.0.4...v1.0.5) (2019-04-13)


### Bug Fixes

* configureLogger() chain ([#58](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/58)) ([d66cb18](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/d66cb18da126217b9a41ea6be1bf771cbd1e2d8a))

### [1.0.4](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/compare/v1.0.3...v1.0.4) (2019-04-07)


### Bug Fixes

* add checkout to publish step ([cf0c8ad](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/cf0c8ad9675b05ba55a71b682fdc56cb2db5e8f6))
* Added delete api request method ([#51](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/51)) ([e8a3869](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/e8a3869d1ffb42811c59d4b03a695a623fb3fbea))
* set _defaultRequired = true ([e56b903](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/commit/e56b90389e12d360ab21d28446810bcd7a048df5)), closes [#48](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/issues/48)
