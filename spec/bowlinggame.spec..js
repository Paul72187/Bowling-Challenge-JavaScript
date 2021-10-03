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
    });

    it("can score a spare"), () => {
        bowlinggame.roll([10, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(bowlinggame.score()).toBe(22);
    }

    it("can score a perfect game", () => {
        bowlinggame.roll([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
        expect(bowlinggame.score()).toBe(300);
    });
});