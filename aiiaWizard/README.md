jquery.aiiaWizard.js
====================

**You can skip the plugin description below and head at the very bottom to see the 43 seconds long VIDEO of the plugin in action. Or you can click [here](https://www.youtube.com/watch?v=D2Q54aKHE6w).**

## Motivation for creating the aiiaWizard jQuery plugin

Imagine you have a complex HTML form that the user must fill in. Wouldn't it be better to break down the form into several steps?

Oh... I know you'll probably say..."Why would you make a plugin that already exists?". :) Well, why not? It's true, there are some great plugins out there that do just that. In fact this plugin was inspired by the excellent ["jQuery Steps" plugin, created by Rafael Staib](http://www.jquery-steps.com). And I am sure that if you Google you'll find more of them... 

However I decided to do one myself as an experiment and because for some reason Rafael's plugin was mising some things that I needed at the moment and there was also a bug when initializing other jQuery plugins within the Steps plugin. For example the Google maps plugin would not initialize for some reason.

With your comments and perhaps your contributions maybe I can make things better and take it to another level, so please, feel free to give your thoughts - positive and negative. I'll be very grateful.

## Plugin description

The aiiaWizard plugin is **Twitter Bootstrap 3.x oriented**, thus **responsive**. It takes your input form elements (or any other HTML element for that matter) and breaks them down into as many steps as you set them to. In fact, in some way the result is very similar to the ["Twitter Bootstrap tab plugin](http://getbootstrap.com/javascript/#tabs), but instead of tabs and corresponding content panels, you have **progress buttons and steps**. Steps are the elements that hold your form / HTML content.

You can also compare this plugin to a carousel, but then again it is not a carousel. Well, maybe I'll update the plugin so that it will have different modes (tabs, slider, carousel...). But right now it serves for one purpose only and that is creating a Wizard with steps, plain and simple. The aiiaPlugin may as well be a hybrid between the Tabs Twitter Bootstrap and the carousel plugin if you like.

### Animations

Right now there is just one animation available and that is a default horizontal slide with no special easing effects whatsoever.

## Usage

```html
<div id="wizard" class="aiia-wizard" style="display: none;">

	<div class="aiia-wizard-step">
		<h1>This is the first step title</h1>
		... your html content goes here ...
	</div>

	<div class="aiia-wizard-step">
		<h1>This is the second step title</h1>
		... your html content goes here ...
	</div>

	<div class="aiia-wizard-step">
		<h1>This is the third step title</h1>
		... your html content goes here ...
	</div>

	<div class="aiia-wizard-step">
		<h1>This is the fourth step title</h1>
		... your html content goes here ...
	</div>

</div>
```

```javascript
$(document).ready(function () {
	$("#wizard").aiiaWizard();
});
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
						'font-size': '20px',
						'float': 'right',
						'font-size': '20px',
						'margin-top': '2px',
						'margin-left': '7px'
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
						'font-size': '20px',
						'float': 'left',
							'font-size': '20px',
							'margin-top': '2px',
							'margin-right': '7px'
					}
				},
				icon: {
					css: {
						'font-size': '24px'
					}
				}
			},
			'css': {
				//'padding-bottom': '10px'
			},
			finish: {
				text: {
					css: {
						'font-size': '20px',
						'float': 'left',
						'font-size': '20px',
						'margin-top': '2px',
						'margin-right': '7px'
					}
				}
			},
			'css': {
				//'padding-bottom': '10px'
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
		},
		onButtonPreviousClick: function () {
			// By defining this callback you must then explicitly call the "previous" method
			// in order to slide to the next step.
			alert("onButtonPreviousClick");
                    	$("#wizard").aiiaWizard('previous');
		},
		onButtonNextClick: function () {
			// By defining this callback you must then explicitly call the "next" method
			// in order to slide to the next step.
			alert("onButtonNextClick");
                    	$("#wizard").aiiaWizard('next');
		}
	});
```

## Methods

Coming soon...

## Demo

Click at the image below to see the demo video.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=D2Q54aKHE6w
" target="_blank"><img src="http://img.youtube.com/vi/D2Q54aKHE6w/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="100%" border="10" /></a>
