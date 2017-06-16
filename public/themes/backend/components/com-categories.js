/**
 *
 */
$(document).ready(function() {
    $('#myTable').jsGrid({

        // Size
        height: "500px",
        width: "100%",

        //
        filtering   : false,
        editing     : true,
        sorting     : true,
        paging      : true,
        autoload    : true,

        pageSize    : 15,
        pageButtonCount: 5,

        deleteConfirm: "Do you really want to delete the client?",

        controller: jsGridController,

        fields: [{
            name: "cateNm",
            type: "text",
            width: 150
        }, {
            name: "catePrnt",
            type: "text",
            width: 70
        }, {
            type: "control"
        }]
    });
});

const jsGridController = (function() {
    return {
        // Search Data
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
}());