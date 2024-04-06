import MOCK_DATA from "../mocks/resCardMock.json";
import RestuarantCard, { withPromotedLabel } from "../RestuarantCard";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"

it("Should render restaurantcard componet with prop data ", () => {
    render(<RestuarantCard image= {MOCK_DATA}/>);

    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument();
})

it("Should render promoted restaurantcard componet with prop data ", () => {
    const ResturantCardPromoted = withPromotedLabel(RestuarantCard);
    render(<ResturantCardPromoted image= {MOCK_DATA}/>);
    

    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
})