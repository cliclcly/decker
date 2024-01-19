var m = require("mithril")
var Resources = require("../models/Resources")

module.exports = {
	view: function() {
		return [
			m(".resources", "You have " + Resources.linesOfCode + " lines of code."),
			m("button.button", {
				onclick: function() {
					Resources.writeCode()
				}
			}, "Write Code")
		]
	}
}
