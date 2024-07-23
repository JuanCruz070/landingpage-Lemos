import React from 'react';
import './App.css';
import { Benefits } from './components/benefits';
import { NavBar } from './components/navbar';
import { ItemListContainer } from './components/itemListContainer';
import { CartWidget } from './components/cartwidget';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      
      return (
        <div className="container">
          <NavBar />
          <ItemListContainer />
          <CartWidget/>
          <Benefits />
        </div>
      );
    },
  },
  {
    path: "/prueba",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      
      return (
        <div className="container">
          <NavBar />
          <ItemListContainer />
          <CartWidget/>
          <Benefits />
        </div>
      );
    },
  },
]);


export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

