describe("Google", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should display the home page", async () => {
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
