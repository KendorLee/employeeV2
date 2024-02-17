/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kendorcloud/employee2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
