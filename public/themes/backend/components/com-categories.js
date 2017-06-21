/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(document, window, $) {
    'use strict';

    var Site = window.Site;

    $(document).ready(function($) {
        Site.run();
    });


    jsGrid.setDefaults({
        tableClass: "jsgrid-table table table-striped table-hover"
    });

    jsGrid.setDefaults("text", {
        _createTextBox: function() {
            return $("<input>").attr("type", "text").attr("class", "form-control input-sm");
        }
    });

    jsGrid.setDefaults("number", {
        _createTextBox: function() {
            return $("<input>").attr("type", "number").attr("class", "form-control input-sm");
        }
    });

    jsGrid.setDefaults("textarea", {
        _createTextBox: function() {
            return $("<input>").attr("type", "textarea").attr("class", "form-control");
        }
    });

    jsGrid.setDefaults("control", {
        _createGridButton: function(cls, tooltip, clickHandler) {
            var grid = this._grid;

            return $("<button>").addClass(this.buttonClass)
                .addClass(cls)
                .attr({
                    type: "button",
                    title: tooltip
                })
                .on("click", function(e) {
                    clickHandler(grid, e);
                });
        }
    });

    jsGrid.setDefaults("select", {
        _createSelect: function() {
            var $result = $("<select>").attr("class", "form-control input-sm"),
                valueField = this.valueField,
                textField = this.textField,
                selectedIndex = this.selectedIndex;

            $.each(this.items, function(index, item) {
                var value = valueField ? item[valueField] : index,
                    text = textField ? item[textField] : item;

                var $option = $("<option>")
                    .attr("value", value)
                    .text(text)
                    .appendTo($result);

                $option.prop("selected", (selectedIndex === index));
            });

            return $result;
        }
    });

    // Example Custom View
    // -------------------
    (function() {
        $('#customViews').jsGrid({
            height: "500px",
            width: "100%",

            filtering: false,
            editing: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 15,
            pageButtonCount: 5,

            controller: db,

            fields: [{
                name: "Name",
                type: "text",
                width: 150
            }, {
                name: "Age",
                type: "number",
                width: 70,
            }, {
                name: "Address",
                type: "text",
                width: 200
            }, {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            }, {
                name: "Married",
                type: "checkbox",
                title: "Is Married",
                sorting: false
            }, {
                type: "control",
                modeSwitchButton: false,
                editButton: true
            }]
        });

        $(".views").on("change", function() {
            var $cb = $(this);
            $("#customViews").jsGrid("option", $cb.attr("value"), $cb.is(":checked"));
        });
    })();

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

})(document, window, jQuery);

db.countries = [{
    Name: "",
    Id: 0
}, {
    Name: "United States",
    Id: 1
}, {
    Name: "Canada",
    Id: 2
}, {
    Name: "United Kingdom",
    Id: 3
}, {
    Name: "France",
    Id: 4
}, {
    Name: "Brazil",
    Id: 5
}, {
    Name: "China",
    Id: 6
}, {
    Name: "Russia",
    Id: 7
}];

