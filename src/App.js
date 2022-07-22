import "./App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";
import ListPhoto from "./components/ListPhoto";
import { useState, useEffect } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [tag, setTag] = useState("");


  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=mountain&per_page=24&format=json&nojsoncallback=1"
      ).then((response) => response.json());
    
      setItems(data.photos.photo);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
      ).then((response) => response.json());
     
      setItems(data.photos.photo);
    };
    getData();
  }, [tag]);

  const handleTagClick = async (tag) => {
    let data = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
    ).then((response) => response.json());

    setItems(data.photos.photo);
    setTag(tag);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="block">
          <h1 className="block-title">Snapshot</h1>
          <Form tag={tag} setTag={setTag} />
          <Nav items={items} handleTagClick={handleTagClick} />
        </div>
        <div>
          <h2 className="section-title">{tag} Pictures</h2>
          <div className="photo-container">
            <div>
              <ul>
                {items.map((a) => (
                  <ListPhoto
                    key={a.id}
                    farm={a.farm}
                    server={a.server}
                    secret={a.secret}
                    id={a.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
