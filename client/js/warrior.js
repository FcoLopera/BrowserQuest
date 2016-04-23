
define(['player'], function(Player) {
    
    const Warrior = Player.extend({
        init: function(id, name) {
            this._super(id, name, Types.Entities.WARRIOR);
        }
    });
    
    return Warrior;
});