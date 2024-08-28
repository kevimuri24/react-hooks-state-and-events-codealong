import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleToggle(){
    setIsOn((isOn) => !isOn );
  }

  const color = isOn? "lightGreen" : "red";  // Toggle color based on current state

  return <button onClick={handleToggle} style ={{background : color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
