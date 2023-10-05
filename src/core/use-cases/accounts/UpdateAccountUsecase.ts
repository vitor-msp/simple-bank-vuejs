import type { Customer } from "../../domain/Customer";
import type { IHttpGateway } from "../../gateways/IHttpGateway";

export class UpdateAccountUsecase {
  constructor(private readonly http: IHttpGateway) {}

  async execute(accountNumber: number, input: Customer): Promise<boolean> {
    try {
      await this.http.putAccount(accountNumber, input);
      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }
}
