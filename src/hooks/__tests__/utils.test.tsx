import axios, { AxiosStatic } from "axios";
import { responseUserWithPostMock } from "../../utils/const";
import { BASE_URL, fetchUsers } from "../utils";

jest.mock("axios");
// ok
(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({});


describe("fetchUsers", () => {
    describe("when API call is successful", () => {
        it("should return users list", async () => {
            // given
            axios.get.mockResolvedValueOnce(responseUserWithPostMock);

            // when
            const result = await fetchUsers();

            // then
            expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}`);
            expect(result).toEqual(responseUserWithPostMock);
        });
    });

});
