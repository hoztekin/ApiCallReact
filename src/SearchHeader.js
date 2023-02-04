import { useState } from "react";

function SearcHeader({ search }) {
const [valueInput, setValue] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search(valueInput);
  };
  const handleChange = (event) =>{
    setValue( event.target.value);
  };
 
  return (
    <div className="SearchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne aramıştınız?</label>
        <input value={valueInput} onChange={handleChange}   />
        
      </form>
    </div>
  );
}

export default SearcHeader;
