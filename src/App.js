import './App.css';
import SearcHeader from './SearchHeader';
import searchImages from './api'

function App() {
  

  const handleSubmit = (term) => {
    searchImages(term);
  };

  return (
    <div className="App">
      <SearcHeader search={handleSubmit} />
    </div>
  );
}

export default App;
