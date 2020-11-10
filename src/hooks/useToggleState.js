import { useState } from "react";

export default (initialState) => {
  const [state, setState] = useState(initialState);
  const toggleState = (state) => setState(!state);
  return [state, toggleState];
};
