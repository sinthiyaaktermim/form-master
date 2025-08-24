import { useState } from "react";


const StateFulForm = () => {
  const [email, setEmail] = useState(null);
  const handleSubmit = e => {
    console.log('btn clicked');
  }
  
  console.log(email);
  const handleAddSubmit = e => {
    e.preventDefault();
    setEmail(e.target.value);
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}
      
      >
        <input
          className="outline-2"
          onChange={handleAddSubmit}
          type="text"
          name="name"
        />
        <br />
        <input className="outline-2" type="email" name="email" id="" />
        <br />
        <input className="outline-2" type="password" name="password" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default StateFulForm;