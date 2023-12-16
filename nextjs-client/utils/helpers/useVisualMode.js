import { useState } from "react";

export default function useVisualMode(initialMode){
  initialMode = initialMode.toUpperCase()
  const [mode, setMode] = useState(initialMode);

  function transition(newMode){
    newMode = newMode.toUpperCase()
    setMode(newMode)
  }

  return {mode, transition}
}