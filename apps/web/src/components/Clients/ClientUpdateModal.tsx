import { ClientsService } from "../../utils/services/ClientsService";
import Button from "../Elements/Button";

export const ClientUpdateModal = ({ closeModal, client }: any) => {
  const handle = (e: any) => {
    e.preventDefault();
    const name = e.target["name"].value;
    const cpf = e.target["cpf"].value;
    const phone = e.target["phone"].value;
    const address = e.target["address"].value;
    const email = e.target["email"].value;
    ClientsService.updateClient(client._id, {
      name,
      cpf,
      phone,
      address,
      email,
    })
      .then((res) => console.log(res))
      .catch((e) => console.log("e", e.response.data));
  };

  return (
    <div className="fixed w-screen h-screen left-0 top-0 bg-primary transition-all flex items-center justify-center bg-opacity-80">
      <form
        onSubmit={handle}
        className="opacity-100 bg-[#fff] shadow-md rounded px-8 pt-8 pb-2 flex flex-col"
      >
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="name"
              placeholder={client.name}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="email"
              type="email"
              placeholder={client.email}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="cpf"
            >
              CPF
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="cpf"
              type="text"
              placeholder={client.cpf}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Telefone
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="phone"
              type="number"
              placeholder={client.phone}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="address"
            >
              Endereço
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="address"
              type="text"
              placeholder={client.address}
            />
          </div>
        </div>
        <div className="mr-8 md:flex gap-3 self-end mb-6">
          <Button onClick={() => {}} variant={""} disabled={false}>
            Adicionar
          </Button>
          <Button onClick={closeModal} variant="" disabled={false}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};
