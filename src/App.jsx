import { useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { ResetButton } from "./components/Button";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Card />
      <Card />
      <Card />
      <div className="bottom">{ResetButton()}</div>
    </div>
  );
}
