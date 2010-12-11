(function($) { $.fn.extend({ _is: $.fn.is, is: function(s) { return s ? this._is(s) : !!this.length;} }); })(jQuery)
