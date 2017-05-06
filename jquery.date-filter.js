// Date Filter V1 by Maedi Prichard
// http://maedi.com/code/date-filter
(function ($) {

  $.fn.dateFilter = function(options) {

    // Defaults.
    var settings = $.extend({
      cutoff: new Date(),
      buffer: -1,
      emptyText: "Sorry, no results."
    }, options);

    // Wind cutoff back in time by buffer amount.
    settings.cutoff.setDate(settings.cutoff.getDate() + settings.buffer);

    // Get parent element.
    var parent = this.parent();

    // Remove items.
    this.each(function() {
      // Get date.
      var date = new Date($(this).data('date-filter'));

      // Remove item if younger than cutoff + buffer
      if (date.getTime() < settings.cutoff.getTime()) {
        this.remove();
      }
    });

    // Empty text.
    if (parent.prop('childElementCount') == 0) {
      parent.html('<p>' + settings.emptyText + '</p>');
    }

    // Return self so chainable for jQuery.
    return this;
  };

}(jQuery));
