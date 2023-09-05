import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { Header2 } from "./Header2";


export const PageHome = () => {
  const { loading, logout } = useAuth();
  const handlelogout = () => {
    logout();
  };

  if (loading) return <h2>loading</h2>;

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // const apiUrl = "https://api.unsplash.com/search/photos";
    // const autori = "nPhLgCjVpjHfZiSXri4UaUj1u9rxKkxf6mJzS8Ffd7w";

    const renderCharacter = async () => {
      const respuestaDelServidor = await fetch(
        "https://api.unsplash.com/search/photos?query=lapto&client_id=nPhLgCjVpjHfZiSXri4UaUj1u9rxKkxf6mJzS8Ffd7w"
      );
      const conversionJson = await respuestaDelServidor.json();
      setPhotos(conversionJson.results);
    };
    renderCharacter();
  }, []);


  return (
    <>
      <Header2 />
      <div className="w-full h-full flex justify-center">
        <div className="w-10/12 flex flex-wrap columns-5 my-auto h-full max-w-7xl gap-2">
          {photos.map((photo) => (
            <div key={photo.id} className="inline-flex">
              <section className="flex items-center box-content w-56">
                <img
                  src={photo.urls.small}
                  className="w-full flex"
                  alt={photo.description}
                />
              </section>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlelogout}>logout</button>
    </>
  );
};
