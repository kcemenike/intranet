import { ImageContract } from './image.contract'
import { ModelBaseContract } from './model-base.contract'
import { ActionsContract } from '../webgets/actions.contract'

export interface UserContract extends ModelBaseContract {
  name?: string;
  type?: string;
  // avatar?: ImageContract;
  actions?: ActionsContract[]
  ceatorId?: string;
  organisationId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  // dateOfBirth?: DateTimeContract
  email?: string;
  password?: string;
  // type?: UserType;
  rememberToken?: string;
  // avatar?: string[];
  image?: string[];
  token?: string;
  organisation?: any;
}

