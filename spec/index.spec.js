describe("BowlingGame", () => {
    let bowlinggame;

    beforeEach(() => {
        bowlinggame = BowlingGame.make;
    });

    it("can score a gutter game", () => {
        bowlinggame.roll([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(bowlinggame.score()).toBe(0);
    });

    it("can score a game of ones", () => {
        bowlinggame.roll([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        expect(bowlinggame.score()).toBe(20);
    });

    it("can score a spare", () => {
        bowlinggame.roll([1, 9, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(bowlinggame.score()).toBe(16);
    })

    function roll(rolls) {
        for (var i = 0; i < rolls.length; i++) {
            bowlinggame.roll(rolls[i]);
        }
    }
});