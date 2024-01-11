import "../styles/button.css";
import { PlusIcon, MinusIcon } from "./Icons";

export function PlusButton() {
  return <button className="plus_btn">{PlusIcon()}</button>;
}

export function MinusButton() {
  return <button className="minus_btn">{MinusIcon()}</button>;
}

export function ResetButton() {
  return <button className="reset_btn">Reset</button>;
}
