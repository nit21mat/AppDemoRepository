jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SOASearchResultSet in the list

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
		"com/acc/training/test/integration/MasterJourney",
		"com/acc/training/test/integration/NavigationJourney",
		"com/acc/training/test/integration/NotFoundJourney",
		"com/acc/training/test/integration/BusyJourney",
		"com/acc/training/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});