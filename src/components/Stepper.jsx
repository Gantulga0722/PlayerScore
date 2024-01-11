import "../styles/stepper.css";
import { MinusButton, PlusButton } from "./Button";

export default function Stepper() {
  return (
    <div className="stepper">
      <MinusButton />
      <div className="score">1</div>
      <PlusButton />
    </div>
  );
}
