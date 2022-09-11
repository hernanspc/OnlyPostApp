import axios, { AxiosStatic } from "axios";
import { responseUserWithPostMock } from "../../utils/const";
import { BASE_URL, fetchUsers } from "../utils";

jest.mock("axios");

interface AxiosMock extends AxiosStatic {
    mockResolvedValue: Function
    mockRejectedValue: Function
}

const mockAxios = axios as AxiosMock
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
