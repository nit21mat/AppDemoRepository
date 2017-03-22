jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/acc/training/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/acc/training/test/integration/pages/App",
	"com/acc/training/test/integration/pages/Browser",
	"com/acc/training/test/integration/pages/Master",
	"com/acc/training/test/integration/pages/Detail",
	"com/acc/training/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.acc.training.view."
	});

	sap.ui.require([
		"com/acc/training/test/integration/NavigationJourneyPhone",
		"com/acc/training/test/integration/NotFoundJourneyPhone",
		"com/acc/training/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});