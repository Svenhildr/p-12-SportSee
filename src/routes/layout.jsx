// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from '../components/Sidebar/Sidenav';
import "../index.scss";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Sidebar />
        <Outlet />
        </main>
    </div>
  );
}