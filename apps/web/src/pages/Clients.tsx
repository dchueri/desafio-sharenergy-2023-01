import { useEffect, useState } from "react";
import { ClientCreateModal } from "../components/Clients/ClientsCreateModal";
import ClientsTable from "../components/Clients/ClientsTable";
import Button from "../components/Elements/Button";
import { NavBar } from "../components/NavBar";
import { ClientsService } from "../utils/services/ClientsService";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleOpenCreateModal = () => setOpenCreateModal(true);
  const handleCloseCreateModal = () => setOpenCreateModal(false);

  useEffect(() => {
    if (clients.length == 0) {
      ClientsService.getAllClients().then((response) => setClients(response));
    }
  });

  return (
    <div>
      <NavBar />
      <h1 className="title">Clientes</h1>
      <div className="pageContent">
        <ClientsTable clients={clients} setClients={setClients} />
        <>
          <Button onClick={handleOpenCreateModal} variant={""} disabled={false}>
            Adicionar cliente
          </Button>
          {openCreateModal && (
            <ClientCreateModal closeModal={handleCloseCreateModal} />
          )}
        </>
      </div>
    </div>
  );
};

export default Clients;
