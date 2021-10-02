const BowlingGame = {
    make: function() {
        return Object.create(this.prototype);
    },

    prototype: {
        roll: function(pinsDown)
    }
}