import { useRef, type RefObject } from "react";
import "./App.css";

function App() {
  const dateInputRef: RefObject<HTMLInputElement | null> = useRef(null);
  const ddayPRef: RefObject<HTMLParagraphElement | null> = useRef(null);

  const handleDateInputChange = () => {
    if (!dateInputRef.current || !ddayPRef.current) return;

    const enteredDate = new Date(dateInputRef.current.value);
    const now = new Date();

    enteredDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffDate =
      (enteredDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

    ddayPRef.current.textContent =
      diffDate !== 0
        ? (diffDate > 0 ? "D-" : "D+") + String(Math.abs(diffDate))
        : "D-Day";
  };

  return (
    <>
      <h1 className="titleH1">DDay</h1>
      <input type="date" ref={dateInputRef} onChange={handleDateInputChange} />
      <p ref={ddayPRef}></p>
    </>
  );
}

export default App;
