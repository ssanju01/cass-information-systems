import React from "react";
import Notification from "./components/notification";
import { AppRoutes } from './navigation/app-routes';
import Loader from "./components/loader";
import Header from "./components/header";

export default function App() {
  return (
    <div>
      <Notification />
      <Loader />
      <Header />
      <div className="container mt-3">
        <AppRoutes />
      </div>
    </div>
  );
}