describe("BowlingGame", () => {
    it("can roll a gutter ball", () => {
        let bowlinggame => BowlingGame.make();
        bowlinggame.roll(0);
    });

    it("can score a gutter game", () => {
        let bowlinggame = BowlingGame.make();
        for (var i = 0; i < 20; i++) {
            bowlinggame.roll(0);
        }
        expect(game.score()).toBe(0);
    });
});