
define(['character'], function(Character) {
    
    const Mob = Character.extend({
        init: function(id, kind) {
            this._super(id, kind);
        
            this.aggroRange = 1;
            this.isAggressive = true;
        }
    });
    
    return Mob;
});