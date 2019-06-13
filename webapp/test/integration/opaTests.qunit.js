/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Ui5_application/Ui5_app/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});