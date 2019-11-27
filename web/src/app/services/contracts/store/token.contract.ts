import { DateTimeContract } from '../common/date-time.contract'

export interface TokenContract {
  id: string
  token?: string
  expiry?: DateTimeContract
  status?: boolean
  tokenType: string
  expiresIn: string
  accessToken: string
  refreshToken: string
}
