import { useState } from "react";
import Button from "../components/Elements/Button";
import { NavBar } from "../components/NavBar";
import { RandomDogsService } from "../utils/services/RandomDogsService";

const RandomDogs = () => {
  const [image, setImage] = useState("");

  async function handleClick(): Promise<void> {
    const { data } = await RandomDogsService.getDog();
    if (!data.endsWith("jpg")) {
      return await handleClick();
    }

    setImage(data);
  }

  return (
    <div>
      <NavBar />
      <h1 className="title">Imagem de cachorros</h1>
      <div className="pageContent">
        <Button onClick={handleClick} variant={""} disabled={false}>
          Gerar imagem
        </Button>
        <div className="h-[60vh] justify-center">
          <img
            src={image}
            className={`max-h-[500px] max-w-[90%] object-contain rounded-lg shadow-md mx-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default RandomDogs;
