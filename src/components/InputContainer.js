import { useState } from "react";
import ShowInputButton from "./ShowInptButton";
import TodoInput from "./TodoInput";

const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);

  const onClose = () => {
    setShowTodoInput(false);
  };

  return (
    <>
      {showTodoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </>
  );
};

export default InputContainer;
