jQuery.sap.registerModulePath('controllers', '/js/controllers/');
jQuery.sap.registerModulePath('views', '/js/views/');

jQuery.sap.require('controllers.smallTable');
jQuery.sap.require('views.smallTable');

// create some dummy JSON data
var data = {
	actionName: "Say Hello"
};

// instantiate the View
var myView = sap.ui.xmlview({viewContent:smallTableView});

// create a Model and assign it to the View
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(data);
myView.setModel(oModel);

// put the View onto the screen
myView.placeAt('content');