import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  return (
    <>
      <div>
        <button
          type="button"
          class="btn btn-primary m-1"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          class="btn btn-success m-1"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter a number"
          className="number-input m-1 "
          ref={inputElement}
        />
        <button type="button" class="btn btn-info mx-1" onClick={handleAdd}>
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
