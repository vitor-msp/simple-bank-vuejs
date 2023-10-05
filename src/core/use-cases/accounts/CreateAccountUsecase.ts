import type { Account } from "../../domain/Account";
import type { Customer } from "../../domain/Customer";
import type { IHttpGateway } from "../../gateways/IHttpGateway";

export class CreateAccountUsecase {
  constructor(private readonly http: IHttpGateway) {}

  async execute(input: Customer): Promise<Account | null> {
    try {
      return await this.http.postAccount(input);
    } catch (error) {
      alert(error);
      return null;
    }
  }
}
