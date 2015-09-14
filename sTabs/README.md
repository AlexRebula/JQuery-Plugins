sTabs
===================

A simple, light-weight jQuery plugin that creates tabs and panes. All the plugin does is to apply the "active" class name to the appropriate html elements in the html markup (such as tabs and panes).

The plugin works in combination of a customized CSS styles that you need to create. So make sure to apply your custom CSS styles in order to have properly styled tabs and panes.

## Expected HTML markup exmample

```html
<div class="tabs-container">
    <ul class="tabs" id="myTabs">
        <li class="tab active">
            <a href="#content1">List View</a>
        </li>
        <li class="tab">
            <a href="#content1">Map View</a>
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