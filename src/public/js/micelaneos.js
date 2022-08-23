(function($) {
 
    // Declaración del plugin.
    // Example: 
    // $(element_conten_imput).serializeObj();
    $.fn.serializeObj = function(options) {
   
       // Obtenemos los parámetros.
       options = $.extend({}, $.fn.serializeObj.defaultOptions, options);
       var value={};
      this.find('[name]').each(function() {
        var element = $(this);
        value[element.attr('name')] = element.val().replace(/&amp;/g, '&').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
       //  element.addClass(options.element_class);
       //  element.css('color', 'blue');
       console.log(element)
   // return element;
      });
   
    //   return JSON.stringify(value)
    return value;
    }
   
   })(jQuery);