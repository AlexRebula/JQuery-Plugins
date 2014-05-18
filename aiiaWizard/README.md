jquery.aiiaWizard.js
====================

IMPORTANT: Before you continue reading this or before you download the plugin, take in consideration that this is my first attempt to publish this specific plugin and that it still lacks of some options and functionalities, but other than that I am sure that for basic needs it should do.

## Motivation for creating the aiiaWizard jQuery plugin

Imagine you have a complex input form that the user must fill in. Wouldn't it be better to break down the form into several steps?

Oh... I know you'll probably say..."Why would you make a plugin that already exists?". :) Well, why not? It's true, there are some great plugins out there that do just that. In fact this plugin was inspired by the excellent ["jQuery Steps" plugin, created by Rafael Staib](http://www.jquery-steps.com). And I am sure that if you Google you'll more of them... 

However I decided to do one myself as an experiment and because for some reason Rafael's plugin was mising some things that I needed at the moment and there was also a bug when initializing other jQuery plugins within the Steps plugin. For examplem the Google maps plugin would not initialize for some reason. Another reason that I created it was because I love jQuery and this is my chance to learn more about jQuery plugins. 

So, feel free to comment on my code, because I know it is not perfect. With your comments and perhaps your contributions maybe I can make things better and take it to another level, so please, feel free to give your thoughts - positive and negative. Believe me, I'll be very grateful.

## Plugin description

The aiiaWizard plugin is **Twitter Bootstrap 3.x oriented**, thus **responsive**. It takes your input form elements and breaks them down into as many steps as you set it to. In fact, in some way the result is very similar to the Tabs plugin, but instead of tabs and corresponding content panels, you have **progress buttons and steps**. Steps are the elements that hold your form parts perhaps or any other HTML content.

You can also compare this plugin to a carousel, but then again it is not a carousel. Well, maybe I'll update the plugin so that it will have different modes (tabs, slider, carousel...). But right now it serves for one purpose only and that is creating a Wizzard with steps, plaing and simple. The aiiaPlugin may as well be a hybrid between the Tabs Twitter Bootstrap plugin if you like.

### Animations

Right now there is just one animation available and that is a default horizontal slide with no special easing effects whatsoever, but I'l try to improve that ASAP. It simply wasn't a prioprity right now.

## Usage

```html
<div id="wizard" class="aiia-wizard" style="display: none;">

    <div class="aiia-wizard-step">
        <h1>This is the first step title</h1>
        ... your html ccontent goes here ...
    </div>

    <div class="aiia-wizard-step">
        <h1>This is the first step title</h1>
        ... your html ccontent goes here ...
    </div>

    <div class="aiia-wizard-step">
        <h1>This is the first step title</h1>
        ... your html ccontent goes here ...
    </div>

    <div class="aiia-wizard-step">
        <h1>This is the first step title</h1>
        ... your html ccontent goes here ...
    </div>

</div>
```

```javascript
<script>
	$(document).ready(function () {
		$("#wizard").aiiaWizard();
	});
</script>
```

## Options

Right now there are limited options available, but still better than nothing. :) Will update as I go along developing the plugin. Below is the default options JSON object that you can pass to the plugin when inititializing.

```javascript
{
    aiiaWizard: {
        minHeight: 400,
        localization: {
            buttons: {
                next: 'Next',
                previous: 'Previous',
                finish: 'Finish'
            }
        },
        progressButtons: {
            borderBottom: {
                css: {
                    'border-width': '4px',
                    'border-color': '#E6E6E6'
                }
            },
            css: {
                'padding': '0 43px',

            },
            markActive: false,
            completed: {
            	css: {
            		'background-color': '#E6E6E6'
            	},
            	icon: {
            		cssClass: 'glyphicon glyphicon-ok-sign',
            		css: {
            			'position': 'absolute',
            			'top': '-20px',
            			'right': '-17px',
            			'font-size': '4em',
            			'color': 'green'
            		}
            	}
            }
        },
        steps: {
            title: {
                number: {
                    css: {
                        'background-color': '#E6E6E6',
                        '-webkit-border-radius': '300px',
                        '-moz-border-radius': '300px',
                        'border-radius': '300px',
                        'color': '#FFFFFF',
                        'float': 'left',
                        'font-size': '36px',
                        'height': '70px',
                        'margin-right': '10px',
                        'text-align': 'center',
                        'width': '70px',
                        'font-weight': 'bold',
                        'padding-top': '8px'
                    }
                },
                text: {
                    css: {
                        'color': '#158CBA',
                        'font-size': '36px',
                        'float': 'left',
                        'font-size': '36px',
                        'margin-top': '8px'
                    }
                }
            },
            content: {

            }
        },
        buttons: {
            previous: {
                text: {
                    css: {
                        //'font-size': '24px'
                    }
                },
                icon: {
                    css: {
                        'font-size': '24px'
                    }
                }
                
            },
            next: {
                text: {
                    css: {
                        //'font-size': '24px'
                    }
                },
                icon: {
                    css: {
                        'font-size': '24px'
                    }
                }
            },
            'css': {
                'padding-bottom': '10px'
            }
        }
    }
}
```


## Callbacks

The same as options, there are limited number of callbacks available right now...

```javascript
$("#wizard").aiiaWizard({
    onInitSuccess: function () {
        //alert("init success");
    },
    onSlideLeftLimitReached: function () {
        //alert("onSlideLeftLimitReached success");
    },
    onSlideLeftFinished: function () {
        //alert("onSlideLeftFinished success");
    },
    onSlideRightLimitReached: function () {
        //alert("onSlideRightLimitReached success");
    },
    onSlideRightFinished: function () {
        //alert("onSlideRightFinished success");
    }
});
```javascript

## Methods

Coming soon...