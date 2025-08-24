import React, { useEffect, useRef } from 'react';

const RefFrom = () => {
  const nameRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value);

  }
  useEffect(() => {
    nameRef.current.focus();
  },[])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} className="outline-2" type="text" name="name" />
        <br />
        <input className="outline-2" type="email" name="email" id="" />
        <br />
        <input className="outline-2" type="password" name="password" required id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefFrom;
