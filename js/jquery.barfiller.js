/*
* File: jquery.barfiller.js
* Version: 1.0.0
* Description: A plugin that fills bars with a percentage you set.
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

    $.fn.barfiller = function (options) {

        var defaults = $.extend({
			barColor: '#16b597',
			tooltip: true,
			duration: 1000,
			animateOnResize: true
        }, options);
        
		/******************************
		Private Variables
		*******************************/         
        
        var object = $(this);
		var settings = $.extend(defaults, options);
		var barWidth = object.width();
		var fill = object.find('.fill');
		var toolTip = object.find('.tip');
		var fillPercentage = fill.attr('data-percentage');
		var resizeTimeout;
		
		/******************************
		Public Methods
		*******************************/         
        
        var methods = {
        	
			init: function() {
				return this.each(function () {
					methods.appendHTML();
					methods.setEventHandlers();
					methods.initializeItems();
				});
			},
			
			/******************************
			Append HTML
			*******************************/			
			
			appendHTML: function() {
				fill.css('background', settings.barColor);
				
				if(!settings.tooltip) {
					toolTip.css('display', 'none');
				}
				toolTip.text(fillPercentage + '%');
			},
			
			/******************************
			Set Event Handlers
			*******************************/
			setEventHandlers: function() {

				if(settings.animateOnResize) {
					$(window).on("resize", function(event){
						clearTimeout(resizeTimeout);
						resizeTimeout = setTimeout(function() { 
							methods.refill(); 
						}, 300);
					});				
				}
			},				

			/******************************
			Initialize
			*******************************/			
			
			initializeItems: function() {
				var pctWidth = methods.calculateFill(fillPercentage);
				methods.animateFill(pctWidth);
			},			
			
			refill: function() {
				fill.css('width', 0);
				toolTip.css('left', 0);
				barWidth = object.width();
				methods.initializeItems();
			},
			
			calculateFill: function(percentage) {
				percentage = percentage *  0.01;
				var finalWidth = barWidth * percentage;
				return finalWidth;
			},       
			
			animateFill: function(barWidth) {
				var toolTipOffset = barWidth - toolTip.width();
				fill.stop().animate({width: barWidth}, settings.duration);
				toolTip.stop().animate({left: '+=' + toolTipOffset}, settings.duration);
			}
			
		
        };
        
        if (methods[options]) { 	// $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);  
        } else {
            $.error( 'Method "' +  method + '" does not exist in barfiller plugin!');
        } 
};

})(jQuery);