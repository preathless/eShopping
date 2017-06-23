/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function() {

    var jsGridController = {

        loadData: function(filter) {
            return $.ajax({
                type: "GET",
                url: "/api/categories",
                data: filter
            });
        },
        // Insert New Row
        insertItem: function(item) {
            return $.ajax({
                type: "POST",
                url: "/api/categories",
                data: item
            });
        },
        // Update row
        updateItem: function(item) {
            return $.ajax({
                type: "PUT",
                url: "/api/categories",
                data: item
            });
        },
        // Delete row
        deleteItem: function(item) {
            return $.ajax({
                type: "DELETE",
                url: "/api/categories",
                data: item
            });
        },
    };

    window.jsGridController = jsGridController;

}());