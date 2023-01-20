import axios from "axios";
import { IClientCreate } from "../../interfaces/IClientCreate";
import { ApiConnection } from "../ApiConnection";

export class ClientsService extends ApiConnection {
  public static async getAllClients(): Promise<any> {
    const { data } = await axios.get(this.apiUrl + "clients");
    return data;
  }

  public static async createClient(client: IClientCreate): Promise<any> {
    const { data } = await axios.post(this.apiUrl + "clients", client);
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
    const { data } = await axios.patch(
      this.apiUrl + "clients/" + clientID,
      client
    );
    return data;
  }

  public static async deleteClient(id: string): Promise<any> {
    const { data } = await axios.delete(this.apiUrl + "clients/" + id);
    return data;
  }
}
