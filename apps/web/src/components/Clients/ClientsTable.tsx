import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Skeleton } from "@mui/material";
import { formatToCPF, formatToPhone } from "brazilian-values";
import { Dispatch, useState } from "react";
import { IClient } from "../../interfaces/IClient";
import { ClientsService } from "../../utils/services/ClientsService";
import Button from "../Elements/Button";
import { ClientUpdateModal } from "./ClientUpdateModal";

const ClientsTable = ({
  clients,
  setClients,
}: {
  clients: IClient[];
  setClients: Dispatch<any>;
}) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  function handleDeleteClient(_id: string): void {
    ClientsService.deleteClient(_id).then(() =>
      setClients(clients.filter((e) => e._id != _id))
    );
  }

  return (
    <div className="w-fit shadow-lg min-w-[450px] mx-auto rounded-xl">
      <table className="block overflow-x-auto rounded-xl">
        <thead className="p-1 bg-secondary text-[#fff] border-cyan-700 min-w-full">
          <tr>
            <th className="tableHead min-w-[15vw]">Nome</th>
            <th className="tableHead min-w-[15vw]">E-mail</th>
            <th className="tableHead min-w-[15vw]">Telefone</th>
            <th className="tableHead min-w-[15vw]">CPF</th>
            <th className="tableHead min-w-[15vw]">Endereço</th>
            <th className="tableHead"></th>
          </tr>
        </thead>
        <tbody>
          {clients.map(
            (
              { _id, name, email, phone, address, cpf }: IClient,
              index: number
            ) => {
              let bgColor;
              index % 2 == 0
                ? (bgColor = "bg-white")
                : (bgColor = "bg-[#F4F7FA]");

              return (
                <tr key={index} className={`${bgColor}`}>
                  <td className="tableRow font-bold">{name}</td>
                  <td className="tableRow">{email}</td>
                  <td className="tableRow text-center">
                    {formatToPhone(phone)}
                  </td>
                  <td className="tableRow text-center">{formatToCPF(cpf)}</td>
                  <td className="tableRow">{address}</td>
                  <td className="tableRow flex gap-3">
                    <Button
                      onClick={handleOpenUpdateModal}
                      color={""}
                      disabled={false}
                    >
                      <EditIcon sx={{ width: "15px", height: "15px" }} />
                    </Button>
                    <Button
                      onClick={() => handleDeleteClient(_id)}
                      color={"error"}
                      disabled={false}
                    >
                      <DeleteForeverIcon
                        sx={{ width: "15px", height: "15px" }}
                      />
                    </Button>
                  </td>
                  {openUpdateModal && (
                    <ClientUpdateModal
                      closeModal={handleCloseUpdateModal}
                      client={{ _id, name, email, phone, address, cpf }}
                    />
                  )}
                </tr>
              );
            }
          )}
        </tbody>
        {clients.length == 0 ? (
          <Skeleton
            variant="rectangular"
            sx={{ width: "full", height: "15vh" }}
          />
        ) : null}
      </table>
    </div>
  );
};

export default ClientsTable;
