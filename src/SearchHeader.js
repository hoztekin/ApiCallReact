

function SearcHeader({ search }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search('halil');
  };
  return (
    <div className="SearchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne aramıştınız?</label>
        <input   />
      </form>
    </div>
  );
}

export default SearcHeader;
