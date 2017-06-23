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

(function(document, window, $) {
    // 'use strict';

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

    axios.get('/api/getCateParent')
        .then(function(response) {
            var categories = response.data;
            initGrid(categories);
        }).catch(function(err) {
            alert(err.message);
        });

    function initGrid(categories) {

        $('#customViews').jsGrid({
            height: "400px",
            width: "100%",

            filtering: false,
            editing: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 10,
            pageButtonCount: 5,

            controller: jsGridController,

            fields: [{
                title: "ID",
                name: "cateId",
                type: "text",
                width: 50,
                align: "center",
                filtering: false,
                validate: "required"
            }, {
                title: "Name",
                name: "cateNm",
                type: "text",
                width: 150,
                validate: "required"
            }, {
                title: "Parent",
                name: "catePrnt",
                type: "select",
                items: categories,
                valueField: "cateId",
                textField: "cateNm",
                valueType: "number|string"
            }, {
                title: "Active Flag",
                name: "activeFlag",
                type: "checkbox",
                sorting: false,
                filtering: false
            }, {
                title: "Delete Flag",
                name: "deleteFlag",
                type: "checkbox",
                sorting: false,
                filtering: false
            }, {
                type: "control",
                modeSwitchButton: false,
                editButton: true
            }],

            onItemUpdating: function(args) {
                alert("Specify the name of the item!");
            }

        });

        $(".views").on("click", function() {
            var $cb = $(this);
            $("#customViews").jsGrid("option", $cb.attr("value"));
        });
    }

})(document, window, jQuery);