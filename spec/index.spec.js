describe("BowlingGame", () => {
    let bowlinggame;

    beforeEach(() => {
        bowlinggame = BowlingGame.make;
    });

    it("can score a gutter game", () => {
        for (var i = 0; i < 20; i++) {
            bowlinggame.roll(0);
        }
        expect(bowlinggame.score()).toBe(0);
    });

    it("can score a game of ones", () => {
        for (var i = 0; i < 20; i++) {
            bowlinggame.roll(1);
        }
        expect(bowlinggame.score()).toBe(20);
    });
});