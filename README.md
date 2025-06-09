# 🍕 Pizza Ordering App

A modern, responsive pizza ordering web application built with React, Redux Toolkit, React Router. Users can browse a menu, add pizzas to their cart, and proceed to checkout—all with a smooth, interactive UI.

---

## Features

- **Front Page Welcome:** Enter your name to personalize your experience.
- ![image](https://github.com/user-attachments/assets/364d027d-1a79-4276-9871-1123465d5057)


- **Dynamic Menu:** Browse pizzas fetched from a remote API, complete with images, ingredients, and prices.
![image](https://github.com/user-attachments/assets/65008bd8-275e-4166-a76c-036088ba6a08)


- **Add to Cart:** Add pizzas to your cart, with real-time updates and a sticky, animated footer cart summary.
- **Cart Management:** View, remove, or clear items in your cart. See the total price and proceed to checkout.
- ![image](https://github.com/user-attachments/assets/d5fb1af2-4e64-4c75-9f4c-694d6f874579)

- **Responsive Design:** Fully responsive for desktop, tablet, and mobile devices.
- **State Management:** Uses Redux Toolkit for cart state and TanStack Query for data fetching.
- **Routing:** Seamless navigation between pages using React Router.

---

##  Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [CSS Flexbox & Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

##  Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-username>/pizza-ordering-app.git
   cd pizza-ordering-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

##  Project Structure

```
src/
  components/
    Cart.jsx
    Cart.css
    Footer.jsx
    Footer.css
    FrontPage.jsx
    FrontPage.css
    Menu.jsx
    Menu.css
  features/
    cartSlice.js
  App.js
  index.js
  ...
```

---

## 🧑‍💻 Usage

- **Enter your name** on the front page and click "START ORDERING".
- **Browse the menu** and add pizzas to your cart.
- **View your cart** by clicking "OPEN CART" in the footer.
- **Remove items** or clear the cart as needed.
- **Proceed to checkout** (demo only).

---

##  Customization

- **Pizza Data:** The menu fetches pizza data from a public gist. You can change the API URL in `Menu.jsx`.
- **Styling:** All styles are in the `components/*.css` files. Adjust as needed for your brand.
- **State:** Cart logic is in `features/cartSlice.js`.

---

##  Responsive Design

- The app uses CSS Grid and Flexbox for layouts.
- Media queries ensure the menu and cart look great on all devices.

---

##  Scripts

- `npm start` — Run the app in development mode.
- `npm run build` — Build for production.
- `npm test` — Run tests (if any are added).

---

##  Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

##  License

[MIT](LICENSE)

---

## Acknowledgements

- [Create React App](https://create-react-app.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)

---

Enjoy your pizza! 🍕
