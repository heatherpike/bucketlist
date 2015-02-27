app.factory('itemsFactory', function ($http) {

    return {
        getItems: function () {
            return $http.get('/items').then(function (response) {
                return response.data;
            });
        },

        addNewItem: function (item) {
            console.log("called add item");
            return $http.post('/items', item);
        }
    };

});