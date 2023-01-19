import { useState } from "react";
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
      <img src={image} />
      <button onClick={handleClick}>Procurar imagem</button>
    </div>
  );
};

export default RandomDogs;
