app.controller('listController', function ($scope, itemsFactory) {
	$scope.newItem = {};

	var setItems = function (items) {
		console.log("called setItems", items);
		$scope.items = items;
	};

	var getThenSetAllItems = function () {
		itemsFactory.getItems().then(setItems);
	}

	$scope.submitNewItem = function(newItem) {
		console.log("called submitNewItem");
		itemsFactory.addNewItem(newItem).then(function(data) {
			$scope.items.push(data);
		});
	};

	getThenSetAllItems();
})