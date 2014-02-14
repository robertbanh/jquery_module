/*!
 * module.js
 *
 * Sample module file
 *
 */
(function(window, $, PubSub) {
    "use strict";

    /*
     * variables
     *
     */
    var _x = localStorage.x;

    /*
     * Private methods
     *
     */
    function _getStuff()
    {
        console.log('getting stuff');
    };

    /*
     * Public methods
     *
     */
    var methods = {

        /*
         * fetch stuff function
         *
         */
        fetchStuff : function() {

            if (_x)
                return true;

            return false;
        }

    }

    // namespace
    window.CustomModule = methods;

})(window, jQuery, PubSub);


$(document).ready(function() {

    $('.class_x').on('click', function(e){
        CustomModule.fetchStuff();
    });
});
