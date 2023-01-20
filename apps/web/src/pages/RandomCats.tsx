import { FormEvent, useState } from "react";
import { RandomCatsService } from "../utils/services/RandomCatsService";

const RandomCats = () => {
  const [catImage, setCatImage] = useState("https://http.cat/200");
  const [inputCode, setInputCode] = useState<string>("");

  async function handleSearchImage(e: FormEvent) {
    e.preventDefault();
    if (inputCode) {
      const imageRequest = await RandomCatsService.getCatImage(
        parseInt(inputCode)
      );
      if (imageRequest != catImage) {
        setCatImage(imageRequest);
      }
    }
  }

  return (
    <div>
      <h1 className="title">RandomCats</h1>
      <input type={"number"} onChange={(e) => setInputCode(e.target.value)} />
      <button onClick={handleSearchImage}>Gerar Imagem</button>
      <img
        src={catImage}
        className={`max-h-[400px] max-w-[90%] object-contain mt-4 rounded-lg shadow-md `}
      />
    </div>
  );
};

export default RandomCats;
