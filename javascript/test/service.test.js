import run from "../src/service";

describe("Template Service", () => {
  it("should throw an error if no input is given", async () => {
    await expect(run({})).rejects.toThrow();
  });
});
