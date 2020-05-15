const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const srcDir =           './docsrc'
const outDir =           './docs'
const smartAppInFile =   path.join(srcDir, 'classes/_smart_app_d_.smartapp.md')
const smartAppOutFile =  path.join(outDir, 'classes/_smart_app_d_.smartapp.md')
const sectionInFile =    path.join(srcDir, 'classes/_pages_section_d_.section.md')
const sectionOutFile =   path.join(outDir, 'classes/_pages_section_d_.section.md')
const classesInDir =     path.join(srcDir, 'classes')
const classesOutDir =    path.join(outDir, 'classes')
const enumsInDir =       path.join(srcDir, 'enums')
const enumsOutDir =      path.join(outDir, 'enums')
const interfacesInDir =  path.join(srcDir, 'interfaces')
const interfacesOutDir = path.join(outDir, 'interfaces')

	function processSmartAppClass() {
	let text = fs.readFileSync(smartAppInFile, 'UTF-8')
	const lines = text.split('\n')
	let skip = false
	let methods = false
	const methodLines = []
	let output = ''
	lines.forEach((line, index) => {
		if (index === 0) {
			output += `[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md)\n`
		} else if (line === '## Constructors') {
			methods = false
		} else if (methods) {
			methodLines.push(line)
		} else if (line.startsWith('# Class: ')) {
			output += '# ' + line.slice(9)
			output += '\n'
		} else if (line === '## Hierarchy') {
			skip = true
		} else if (line === '### Methods') {
			methods = true
		} else if (line === '###  constructor') {
			skip = false
			output += '## Constructor\n'
		} else if (line === '## Methods') {
			output += '## Methods\n'
			for (const m of methodLines) {
				output += m
				output += '\n'
			}
			skip = false
		} else if (!skip) {
			output += line
			output += '\n'
		}
	})
	fs.writeFileSync(smartAppOutFile, output, 'UTF-8')
}

function processSectionClass() {
	let text = fs.readFileSync(sectionInFile, 'UTF-8')
	const lines = text.split('\n')
	let skip = false
	let skip2 = false
	let output = ''
	let sectionOptionIndex = false
	let settingMethods = []
	lines.forEach((line, index) => {
		if (index === 0) {
			output += `[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md)`
		} else if (line.startsWith('# Class: ')) {
			output += '# ' + line.slice(9)
			output += '\n'
		} else if (line === '## Hierarchy') {
			skip = true
		} else if (line === '### Methods') {
			skip = false
			sectionOptionIndex = true
			output += '## Section Options\n'
		} else if (line === '## Constructors') {
			skip = true
			sectionOptionIndex = false
		} else if (line === '## Methods') {
			output += '## Setting Methods\n'
			for (const m of settingMethods) {
				output += settingLink(m)
				output += '\n'
			}
			skip = false
		} else if (sectionOptionIndex) {
			if (line.endsWith('setting)')) {
				settingMethods.push(line)
			} else {
				output += line
				output += '\n'
			}
		} else if (!skip) {
			if (line.startsWith('###  ')) {
				if (line.endsWith('Setting')) {
					skip2 = true
				} else {
					skip2 = false
				}
			}
			if (!skip2) {
				output += line
				output += '\n'
			}
		}
	})
	fs.writeFileSync(sectionOutFile, output, 'UTF-8')
}

function settingLink(line) {
	const p1 = line.indexOf('[')
	const p2 = line.indexOf(']')
	const name = line.slice(p1 + 1, p2)
	const dir = _.snakeCase(name)
	return `* [${name}](_pages_${dir}_d_.${name.toLowerCase()}.md)`
}

function processOtherClasses() {
	const files = fs.readdirSync(classesInDir)
	const classFiles = []
	for (const f of files) {
		//console.log(f)
		if (f.startsWith('_pages') && f !== '_pages_section_d_.section.md') {
			let output = ''
			const text = fs.readFileSync(`./docsrc/classes/${f}`, 'UTF-8')
			const lines = text.split('\n')
			let skip = false
			lines.forEach((line, index) => {
				if (index === 0) {
					const segs = line.split('›')
					if (f === '_pages_page_d_.page.md') {
						const path = `[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md)`
						output += `${path}\n`
					} else {
						const path = `[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) › ${segs[segs.length - 1]}`
						const path2 = `[SmartApp](../classes/_smart_app_d_.smartapp.md) › [Page](../classes/_pages_page_d_.page.md) › [Section](../classes/_pages_section_d_.section.md) › ${segs[segs.length - 1]}`
						output += `${path}\n`
						classFiles.push({name: f, path: path2})
					}
				} else if (line.startsWith('# Class: ')) {
					output += '# ' + line.slice(9)
					output += '\n'
				} else if (line === '## Hierarchy') {
					skip = true
				} else if (line === '### Methods') {
					skip = false
					output += '## Methods\n'
				} else if (line === '## Constructors') {
					skip = true
				} else if (line === '## Methods') {
					skip = false
				} else if (!skip) {
					output += line
					output += '\n'
				}
			})
			fs.writeFileSync(path.join(classesOutDir, f), output, 'UTF-8')
		}
	}
	return classFiles
}

function parsePath(seg) {
	const p0 = seg.indexOf('../modules/')
	const p1 = seg.indexOf('.md')
	const frag = seg.slice(p0 + '../modules/'.length, p1)
	const classFile = classFiles.find(it => it.name.startsWith(frag))
	return classFile ? classFile.path : '[Reference](../index.md) › [SmartApp](../classes/_smart_app_d_.smartapp.md)'
}

function processEnums() {
	const files = fs.readdirSync(enumsInDir)
	for (const f of files) {
		//console.log(f)
		let output = ''
		const text = fs.readFileSync(`./docsrc/enums/${f}`, 'UTF-8')
		const lines = text.split('\n')
		let skip = true
		lines.forEach((line, index) => {
			if (index === 0) {
				const segs = line.split('›')
				output += `${parsePath(segs[segs.length - 2])} › ${segs[segs.length - 1]}\n`
			} else if (line.startsWith('# Enumeration: ')) {
				output += '# ' + line.slice('# Enumeration: '.length)
				output += '\n'
			} else if (line === '### Enumeration members') {
				skip = true
				output += '## Enumeration members'
			} else if (line === '## Enumeration members') {
				skip = false
			} else if (!skip) {
				output += line
				output += '\n'
			}
		})
		fs.writeFileSync(path.join(enumsOutDir, f), output, 'UTF-8')
	}
}

function processInterfaces() {
	const files = fs.readdirSync(interfacesInDir)
	for (const f of files) {
		//console.log(f)
		let output = ''
		const text = fs.readFileSync(`./docsrc/interfaces/${f}`, 'UTF-8')
		const lines = text.split('\n')
		let skip = true
		lines.forEach((line, index) => {
			if (index === 0) {
				const segs = line.split('›')
				output += `[SmartApp](../classes/_smart_app_d_.smartapp.md) › ${segs[segs.length - 1]}\n`
			} else if (line.startsWith('# Interface: ')) {
				output += '# ' + line.slice('# Interface: '.length)
				output += '\n'
			} else if (line === '## Hierarchy') {
				skip = true
			} else if (line === '### Properties') {
				skip = false
				output += '## Properties\n'
			} else if (line === '## Properties') {
				skip = false
			} else if (line === '## Methods') {
				skip = false
			} else if (line === '### Methods') {
				skip = false
				output += '## Methods\n'
			} else if (!skip) {
				output += line
				output += '\n'
			}
		})
		fs.writeFileSync(path.join(interfacesOutDir, f), output, 'UTF-8')
	}
}

const removeDir = function(path) {
	if (fs.existsSync(path)) {
		const files = fs.readdirSync(path)

		if (files.length > 0) {
			files.forEach(function(filename) {
				if (fs.statSync(path + "/" + filename).isDirectory()) {
					removeDir(path + "/" + filename)
				} else {
					fs.unlinkSync(path + "/" + filename)
				}
			})
			fs.rmdirSync(path)
		} else {
			fs.rmdirSync(path)
		}
	} else {
		console.log("Directory path not found.")
	}
}

const classFiles = processOtherClasses()
processSmartAppClass()
processSectionClass()
processInterfaces()
processEnums()
console.log(`Processed documents coped to ${outDir}`)
removeDir(srcDir)
console.log(`Removed intermediate document dir ${srcDir}`)
