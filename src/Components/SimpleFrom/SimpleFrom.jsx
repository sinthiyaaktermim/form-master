

const SimpleFrom = () => {
  const handleAddtoSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log('btn clicked');
  }
  return (
    <div>
      <form onSubmit={handleAddtoSubmit}>
        <input type="email" name="email" id="" />
        <input type="phone" name="phone" id="" />
        
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleFrom;