$(document).ready(function() {
    
    $('.class_x').bind('click', function(e){
        CustomModule.update_price(this);
    });
});


// custom module
var CustomModule = (function($) {
    var _cache = {};
    
    // private methods
    var _get_price = function(thisObj) 
    {
        var val = $(thisObj).find(':selected').val();
        
        if (_cache[val]) 
        {
            CustomModule.update_price_view(thisObj, _cache[val]);
            return;
        }
        
        $.ajax({
            url: '/ajax-blah',
            type: 'post',
            data: { value: val },
        }).done(function(re){
            _cache[val] = re;
            CustomModule.update_price_view(thisObj, re);
        });
        
    };
    
    
    // public methods
    return {
        
        update_price: function(thisObj)
        {
            _get_price(thisObj);
        },
        
        update_price_view: function(thisObj, data)
        {
            $(thisObj).parents('form').find('.baseprice').html(data);
        }
    }
    
})(jQuery);

    


