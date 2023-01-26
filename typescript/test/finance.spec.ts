import "mocha";
import { assert } from "chai";
import { selectStock } from "../src/finance";


describe("selectStock test", () => {
    it("should return 55", () => {
        const savings = 250;
        const current_value = [175,133,109,210,97];
        const future_value = [200,125,128,228,133];
        const result = selectStock(savings, current_value, future_value)
        assert.equal(result, 55);
    });
    it("should return 227", () => {
        const savings = 450;
        const current_value = [220,135,209,110,84];
        const future_value = [95,299,201,99,147];
        const result = selectStock(savings, current_value, future_value)
        assert.equal(result, 227);
    });
});