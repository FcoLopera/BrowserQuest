define(function() {
    
    const Exceptions = {
        
        LootException: Class.extend({
            init: function(message) {
                this.message = message;
            }
        })
    };
    
    return Exceptions;
});