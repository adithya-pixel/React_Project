import { useState } from "react";
function  InputExample () {
  const [text , Settext] = useState("")
  const sethandle = (event) => {
    Settext (event.target.value);
  };
  return(
<div>
  <h1>welcome to page</h1>
 <input type="text" onChange={sethandle}/>
  <p>text is : {text}</p>
  </div>
  );

}
export default InputExample ;