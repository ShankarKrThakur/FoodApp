import { render , screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {

    test("render contact us page", () => {
        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("should load buttoon inside contact component", () => {
        render(<Contact/>)
    
        //const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    test("should load input text inside contact component", () => {
        render(<Contact/>)
    
        
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });
    //same as test
    it("should load 2 input boxes on the contact component", () => {
        render(<Contact/>)
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        //expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    });
});

