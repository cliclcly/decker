var m = require("mithril")

var Resources = {
	linesOfCode: 0,
	writeCode: function() {
		Resources.linesOfCode++
		console.log("writing code: " + Resources.linesOfCode)
	}
}

module.exports = Resources
