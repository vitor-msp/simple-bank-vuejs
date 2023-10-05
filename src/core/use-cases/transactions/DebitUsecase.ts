import type { Debit } from '../../domain/Debit'
import type { IHttpGateway } from '../../gateways/IHttpGateway'

export class DebitUsecase {
  constructor(private readonly http: IHttpGateway) {}

  async execute(accountNumber: number, input: Debit): Promise<boolean> {
    try {
      await this.http.postDebit(accountNumber, input)
      return true
    } catch (error) {
      alert(error)
      return false
    }
  }
}
