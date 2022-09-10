import { userApi } from "../userApi";

describe("function axios userApi", () => {

    it("Axios instance standart test", async () => {
        expect(typeof userApi).toBe('function');
    });
}); 