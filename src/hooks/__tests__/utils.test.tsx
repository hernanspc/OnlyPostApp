import axios, { AxiosStatic } from "axios";
import { responseUserWithPostMock, resPostUser5 } from "../../utils/const";
import { BASE_URL, fetchUsers, getPostsOfUser } from "../utils";

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

describe("fetchUsers", () => {
    describe("when API call is successful", () => {
        it("should return users list", async () => {
            // given
            axios.get.mockResolvedValueOnce(resPostUser5);

            // when
            const result = await getPostsOfUser((5).toString());

            // then
            expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/5/posts`);
            expect(result).toEqual(resPostUser5);
        });
    });

});
