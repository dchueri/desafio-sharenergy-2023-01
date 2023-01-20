import { IClientCreate } from "../../interfaces/IClientCreate";
import { api } from "../api";

export class ClientsService {
  public static async getAllClients(): Promise<any> {
    const { data } = await api.get("clients");
    return data;
  }

  public static async createClient(client: IClientCreate): Promise<any> {
    const { data } = await api.post("clients", client);
    return data;
  }

  public static async updateClient(
    clientID: string,
    client: any
  ): Promise<any> {
    const clientFields = ["name", "cpf", "phone", "address", "email"];
    clientFields.map((field: string) =>
      client[field] == "" ? delete client[field] : null
    );
    const { data } = await api.patch(+"clients/" + clientID, client);
    return data;
  }

  public static async deleteClient(id: string): Promise<any> {
    const { data } = await api.delete("clients/" + id);
    return data;
  }
}
