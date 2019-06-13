sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Ui5_application.Ui5_app.controller.View1", {
		onInit: function () {
			var oTable = this.byId("table0");

			var oTemplate = new sap.m.ColumnListItem({
				cells: [new sap.m.Text({
						text: "{AppId}"
					}), new sap.m.Text({
						text: "{AppName}"
					}),
					new sap.m.Text({
						text: "{AppType}"
					}),
						new sap.m.Text({
						text: "{AppModule}"
					})
				]
			});

			var sServiceUrl = "/sap/opu/odata/sap/ZFCAT_LOGS_SRV";

			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);

			oTable.setModel(oModel);
			oTable.bindAggregation("items", {
				path: "/zfcat_logSet",
			 	template: oTemplate
			 });
		}
	});
});