import {render} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResCardList.json";

global.fetch = jest.fn( () => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render body component with Search", () => {
    render(<Body/>)
});