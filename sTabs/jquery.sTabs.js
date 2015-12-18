/*

The MIT License (MIT)

Copyright (c) 2015 Alex

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

;
(function($, window, document, undefined) {

    //#region Public methods
    var pub = {

        //#region init
        init: function(options) {

            return this.each(function() {

                var $this = $(this),
                    data = $this.data('sTabs'),
                    sTabs = $('<div />', {
                        text: $this.attr('title')
                    });



                //#region If the plugin hasn't been initialized yet
                if (!data) {

                    options = $.extend($.fn.sTabs.defaults, options);

                    // Show all possibly hidden tabs.
                    // Normally we hide tabs with CSS by default for when those tabs should not appear with JS disabled.
                    if (options.sTabs.tabs.showHiddenTabs && options.sTabs.tabs.showHiddenTabs.length) {
                        for (var i = 0; i < options.sTabs.tabs.showHiddenTabs.length; i++) {
                            var tabId = options.sTabs.tabs.showHiddenTabs[i];
                            $(tabId).show();
                        }    
                    }

                    $(this).data('sTabs', {
                        target: $this,
                        sTabs: sTabs
                    });

                    var $tabs = $this
                      .find(".tab")
                      .find("a");

                    $this
                      .find(".tab.active")
                      .find("a")
                      .attr('tabindex','-1');



                    var $panelsContainer = $this.next();

                    $tabs.click(function (e) {

                      e.preventDefault();

                      var $clickedTab = $(this);
                      var clickedId = $clickedTab.attr("href");

                      if (!$clickedTab.hasClass("active")) {
                        
                        $this
                            .find(".tab.active")
                            .removeClass("active")
                            .removeAttr('tabindex');

                        $clickedTab
                            .parent()
                            .addClass("active")
                            .attr('tabindex','-1');

                        $panelsContainer
                            .find(".tab-pane.active")
                            .removeClass("active");

                        $(clickedId)
                            .addClass("active");

                      }

                    });

                    $.isFunction(options.onInitSuccess) && options.onInitSuccess.call(this);
                    $this.trigger("initSuccess.sTabs");
                }
                //#endregion
            });
        }

        
    };
    //#endregion

    //#region Plugin definition
    $.fn.sTabs = function(method) {

        //#region $.fn.sTabs.defaults
        $.fn.sTabs.defaults = {
            'sTabs': {
                 tabs: {
                    showHiddenTabs: []
                }
            },
            onInitSuccess: function() {

            }           

        };
        //#endregion

        //#region Public methods calling logic
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return pub.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sTabs');
        }
        //#endregion

    };
    //#endregion

})(jQuery, window, document);