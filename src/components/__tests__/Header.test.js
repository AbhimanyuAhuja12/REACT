const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

test("should render Header Component with a car items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart:(0 items)");

  // const loginButton = screen.getByText("Login");

  expect(cartItems).toBeInTheDocument();
});

test("should render Header Component with  cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // you can use a Regex where you don't have to define the proper string
  // regex(Regular expreession allows developers to match the string against a pattern)
  const cartItems = screen.getByText(/Cart/);

 

  expect(cartItems).toBeInTheDocument();
});

test("should change login btn to logout onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

  // simulating click
   fireEvent.click(loginButton);

   const logoutButton = screen.getByRole("button", { name: "Logout" });
  
    expect(logoutButton).toBeInTheDocument();
  });


