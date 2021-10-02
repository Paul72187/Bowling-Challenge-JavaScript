it("should score all gutter balls", () => {
    const scoreCard = `-- -- -- -- -- -- -- -- -- --`;

    expect(score(scoreCard)).toEqual(0);
})