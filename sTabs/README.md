sTabs
===================

A simple, light-weight jQuery plugin that creates tabs and panes. All the plugin does is to apply the "active" class name to the appropriate html elements in the html markup (such as tabs and panes).

The plugin works in combination of a customized CSS styles that you need to create. So make sure to apply your custom CSS styles in order to have properly styled tabs and panes.

## Basic CSS rules

```css
.tab-pane {
	display: none;
}

.tab-pane.active {
	display: block;
}

.tabs {
	margin: 0;
	padding: 0;
	display: inline-block;

}

.tab {
	float:left;
	list-style: none;
	margin-right: 10px;
}

```

## Expected HTML markup example

```html
<div class="tabs-container">
    <ul class="tabs" id="myTabs">
        <li class="tab active">
            <a href="#content1">Tab1</a>
        </li>
        <li class="tab">
            <a href="#content1">Tab2</a>
        </li>
    </ul>
    <div class="tab-content">        
        <div id="content1" class="tab-pane active">
            My content 1.
        </div>
        <div id="content2" class="tab-pane">        	        
        	My content 2.
        </div>        
    </div>
</div>
```

## Plugin usage

```javascript
$("#myTabs").sTabs();
```
