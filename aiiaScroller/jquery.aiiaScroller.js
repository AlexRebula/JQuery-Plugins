(function ($) {

    //#region Public methods
    var pub = {

        //#region init
        init: function (options) {

            return this.each(function () {

                var $this = $(this),
                    data = $this.data('scroller'),
                    scroller = $('<div />', {
                        text: $this.attr('title')
                    });
                
                //#region If the plugin hasn't been initialized yet
                if (!data) {
                    
                    var selfParent = $this.parent();

                    options = $.extend($.fn.scroller.defaults, options);

                    var elementToSlide = $this.clone();
                    
                    $this.remove();
                    
                    var newPlaceholder = $("<div></div>")
                        .attr("id", options.scroller.placeholder.id)
                        .css(options.scroller.placeholder.style);

                    newPlaceholder.append(elementToSlide);
                        
                    var leftScrollerButton = $("<button></button>")
                        .attr("id", options.scroller.buttons.leftScrollerButton.id)
                        .addClass(options.scroller.buttons.styleID);

                    var rightScrollerButton = $("<button></button>")
                        .attr("id", options.scroller.buttons.rightScrollerButton.id)
                        .addClass(options.scroller.buttons.styleID);                    

                    
                    
                    selfParent
                        .append(leftScrollerButton)
                        .append(newPlaceholder)
                        .append(rightScrollerButton);
                    
                    selfParent.children().css({
                        'float': 'left'
                    });

                    $("." + options.scroller.buttons.styleID).css(options.scroller.buttons.style);

                    $("#" + options.scroller.buttons.leftScrollerButton.id).click(function () {
                        pub.slideRight(elementToSlide, options, this);
                    });

                    $("#" + options.scroller.buttons.rightScrollerButton.id).click(function () {
                        pub.slideLeft(elementToSlide, options, this);
                    });

                    $(this).data('scroller', {
                        target: $this,
                        scroller: scroller
                    });

                    $.isFunction(options.onInitSuccess) && options.onInitSuccess.call(this);

                    $this.trigger("initSuccess.scroller");
                }
                //#endregion
            });
        },
        //#endregion

        //#region show
        show: function () {
            // TODO: implement
            $.isFunction(options.onShowSuccess) && options.onShowSuccess.call(this);
            $this.trigger("showSuccess.scroller");
        },
        //#endregion

        //#region hide
        hide: function () {
            // TODO: implement
            $.isFunction(options.onHideSuccess) && options.onHideSuccess.call(this);
            $this.trigger("hideSuccess.scroller");
        },
        //#endregion

        //#region update
        update: function (content) {
            $.isFunction(options.onUpdateSuccess) && options.onUpdateSuccess.call(self);
            $(self).trigger("updateSuccess.scroller");
        },
        //#endregion

        //#region slideLeft
        slideLeft: function (elementToSlide, options, self) {
            
            var p = $("#" + options.scroller.placeholder.id).width();
            var s = elementToSlide.width();
            var m = (parseInt(elementToSlide.css('margin-left'),10)*(-1));            
            var x = p - s + m;
                
            var slideAmount = options.scroller.slideAmount;

            var checkAmount = (x*(-1)) - slideAmount;

            var slideLeftLimitReached = false;
            if (checkAmount < 0) {
                slideAmount = (x*(-1));
                slideLeftLimitReached = true;
            }
                

            var currentMargin = parseInt(elementToSlide.css('margin-left'), 10);
            elementToSlide.clearQueue().animate({
                'margin-left': (currentMargin - slideAmount) + 'px'
            }, function () {
                $.isFunction(options.onSlideLeftFinished) && options.onSlideLeftFinished.call(self);
                $(self).trigger("slideLeftSuccess.scroller");

                if (slideLeftLimitReached) {
                    $.isFunction(options.onSlideLeftLimitReached) && options.onSlideLeftLimitReached.call(self);
                    $(self).trigger("slideLeftLimitReached.scroller");
                }
            });
            
        },
        //#endregion

        //#region slideRight
        slideRight: function (elementToSlide, options, self) {

            var slideAmount = options.scroller.slideAmount;

            var m = (parseInt(elementToSlide.css('margin-left'),10)*(-1));

            var slideLeftLimitReached = false;
            if (m < slideAmount) {            
                slideAmount = m;
                slideLeftLimitReached = true;
            }   

            var currentMargin = parseInt(elementToSlide.css('margin-left'), 10);
            elementToSlide.clearQueue().animate({
                'margin-left': (currentMargin + slideAmount) + 'px'
            }, function () {
                $.isFunction(options.onSlideRightFinished) && options.onSlideRightFinished.call(self);
                $(self).trigger("slideRightSuccess.scroller");

                 if (slideLeftLimitReached) {
                    $.isFunction(options.onSlideRightLimitReached) && options.onSlideRightLimitReached.call(self);
                    $(self).trigger("slideLeftLimitReached.scroller");
                }
            });
        }
        //#endregion
    };
    //#endregion

    //#region Plugin definition
    $.fn.scroller = function (method) {

        //#region $.fn.scroller.defaults
        $.fn.scroller.defaults = {
            'scroller': {
                'slideAmount': 230,
                'slideSlideSpeed': 300,
                'placeholder': {
                    'id': 'scroller-placeholder',
                    'style': {
                        'width': '500px',
                        'overflow': 'hidden'
                    },
                    'styleID': 'scroller'
                },
                'buttons': {
                    'leftScrollerButton': {
                        'id': 'left-scroller-button',
                        'style': {
                            'width': '30px',
                            'height': '26px',
                            'cursor': 'pointer'
                        },                        
                    },
                    'rightScrollerButton': {
                        'id': 'right-scroller-button',
                        'style': {
                            'width': '30px',
                            'height': '26px',
                            'cursor': 'pointer'
                        }
                    },
                    'style': {
                        'width': '30px',
                        'height': '26px',
                        'cursor': 'pointer'
                    },
                    'styleID': 'scroller-button'
                }
            },
            onInitSuccess: function () {
                
            },
            onSlideLeftFinished: function () {
                
            },
            onSlideRightFinished: function () {
                
            },
            onSlideLeftLimitReached: function () {
                
            },
             onSlideRightLimitReached: function () {
                
            },

        };
        //#endregion

        //#region Public methods calling logic
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return pub.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }
        //#endregion

    };
    //#endregion

})(jQuery);