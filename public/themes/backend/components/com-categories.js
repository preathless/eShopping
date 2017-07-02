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

            filtering: !0,
            editing: !0,
            sorting: !0,
            paging: !0,
            autoload: !0,
            pageSize: 15,
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