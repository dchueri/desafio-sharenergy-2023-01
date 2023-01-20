import { FormEvent, useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import { NavBar } from "../components/NavBar";
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
      <NavBar />
      <h1 className="title">Gatos HTTP</h1>
      <div className="pageContent">
        <div className="flex">
          <Input
            value={inputCode}
            setValue={setInputCode}
            placeholder={"Digite um código..."}
            type={"number"}
          />
          <Button onClick={handleSearchImage} variant={""} disabled={false}>
            Gerar imagem
          </Button>
        </div>
        <img
          src={catImage}
          className={`max-h-[500px] max-w-[90%] object-contain mt-4 rounded-lg shadow-md `}
        />
      </div>
    </div>
  );
};

export default RandomCats;
