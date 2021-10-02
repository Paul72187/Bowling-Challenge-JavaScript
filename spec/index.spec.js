describe("BowlingGame", () => {
    it("can be made", () => {
        BowlingGame.make();
    });

    it("can roll a gutter ball", () => {
        let bowlinggame => BowlingGame.make();
        bowlinggame.roll(0);
    });
});