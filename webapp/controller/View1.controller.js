sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Ui5_application.Ui5_app.controller.View1", {
		onInit: function () {
			var oTable = this.byId("table0");

			var oTemplate = new sap.m.ColumnListItem({
				cells: [new sap.m.Text({
						text: "{EmployeeId}"
					}), new sap.m.Text({
						text: "{EmployeeName}"
					}),
					new sap.m.Text({
						text: "{EmployeeEmail}"
					}),
						new sap.m.Text({
						text: "{EmployeePhoneNo}"
					})
				]
			});

			var sServiceUrl = "/sap/opu/odata/sap/ZODATA_EMP_SRV";

			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);

			oTable.setModel(oModel);
			oTable.bindAggregation("items", {
				path: "/employee_odataSet",
			 	template: oTemplate
			 });
		}
	});
});