import "./App.css";
import SearcHeader from "./SearchHeader";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearcHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
