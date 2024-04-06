import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should load Header Component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    // 1st way - prefer way
    const loginButton = screen.getByRole("button", {name: "Login"});
    //2nd way
    //const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with Cart button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
  
  
    //const loginButton = screen.getByText("Cart🛒 (0 Items)");
    const loginButton = screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
  
  
    
    const loginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});