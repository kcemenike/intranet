import { Injectable, InjectionToken, Inject } from '@angular/core'
import { titleCase, plural } from '../../services/core/utils.functions'
import { LinkActionTypes } from '../../services/core/const.service'
import { JSONContract, ActionsContract } from '../contracts';

export const PRIVILEGE_ENTITIES_DATA = new InjectionToken<Object>('privilge.entities.data')
export const PRIVILEGE_USERS_DATA = new InjectionToken<Object>('privilge.users.data')

export interface PrivilegeActions{
  collection: () => ActionsContract[]
  solo: (entityId: string) => ActionsContract[]
  entity: (entityId: string) => ActionsContract[]
  form: () => ActionsContract[]
  menu: () => ActionsContract[]
}

@Injectable()
export class PrivilegeService<U = JSONContract>{

  private entityName: string
  private user: U
  private privileges: {
    entities: JSONContract
    users: JSONContract
  }
  
  constructor(
    @Inject(PRIVILEGE_ENTITIES_DATA) entities: JSONContract,
    @Inject(PRIVILEGE_USERS_DATA) users: JSONContract,
  ) {
    this.privileges = { entities, users }
  }

  of(user: U){
    this.user = user
    return this
  }

  on(entityName: string){
    this.entityName = entityName.toLowerCase()
    return this
  }

  actions(): PrivilegeActions{
    return {
      collection: () => this.collectionActions(),
      solo: (entityId: string) => this.soloActions(entityId),
      entity: (entityId: string) => this.entityActions(entityId),
      form: () => this.formActions(),
      menu: () => this.menu(),
    }
  }

  menu(): ActionsContract[] {
    return this.userEntities().map((entity) => {
      entity = entity.replace(/_/g, ' ')
      return {
        title: plural(titleCase(entity)),
        url: '/' + entity.toLowerCase()
      }
    })
  }

  collectionActions(): ActionsContract[] {
    return [
      ...((this.creatable() && this.canCreate()) ? [{
        title: 'Create New ' + titleCase(this.entityName),
        icon: 'create_new_folder',
        data: {
          type: LinkActionTypes.CREATE,
          $event: this.entityName,
          url: `${this.entityName}/create`,
        },
      }] : []),
      ...((['staff', 'admin'].includes(this.userType())) ? [{
        title: 'Change Layout',
        icon: 'change_history',
        children: [
          {
            title: 'Card Layout',
            icon: 'view_module',
            data: {
              type: LinkActionTypes.CHANGE_LAYOUT,
              $event: 'card',
              url: '/',
            },
          },
          {
            title: 'Table Layout',
            icon: 'view_list',
            data: {
              type: LinkActionTypes.CHANGE_LAYOUT,
              $event: 'table',
              url: '/',
            },
          },
        ],
      }
      ] : [])
    ]
      
  }
  
  formActions(): ActionsContract[] {
    return (this.readable() && this.canRead()) ? [
        {
          title: 'Back to Collection',
          icon: 'chevron_left',
          data: {
            type: LinkActionTypes.BACK,
          },
          children: [],
        },
      ] : []
  }
  
  soloActions(entityId?: string): ActionsContract[] {
    return [ ...((this.readable() && this.canRead()) ? [{
        title: 'Back to Collection',
        icon: 'chevron_left',
        data: {
          type: LinkActionTypes.BACK,
        },
        children: [],
      },] : []),
      {
        children: [
          ...((this.updateable() && this.canUpdate()) ? [{
            title: 'Edit',
            data: {
              type: LinkActionTypes.EDIT,
              $event: entityId,
              url: `/${this.entityName}/${entityId}/edit`,
            },
          }] : []),
          ...((this.deleteable() && this.canDelete()) ? [{
            title: 'Delete',
            data: {
              type: LinkActionTypes.DELETE,
              $event: entityId,
              url: `/${this.entityName}/${entityId}/delete`,
            },
          }] : []),
        ],
      },
    ]
  }
  
  entityActions(entityId?: string): ActionsContract[] {
    return [ 
        ...((this.readable() && this.canRead()) ? [{
          title: '',
          icon: 'visibility',
          data: {
            type: LinkActionTypes.VIEW,
            $event: entityId,
            url: `/${this.entityName}/${entityId}`,
          },
        }] : []),
        {
          children: [
            ...((this.updateable() && this.canUpdate()) ? [{
              title: 'Edit',
              data: {
                type: LinkActionTypes.EDIT,
                $event: entityId,
                url: `/${this.entityName}/${entityId}/edit`,
              },
            }] : []),
            ...((this.deleteable() && this.canDelete()) ? [{
              title: 'Delete',
              data: {
                type: LinkActionTypes.DELETE,
                $event: entityId,
                url: `/${this.entityName}/${entityId}/delete`,
              },
            }] : []),
          ],
        },
      ]
  }

  private canCreate(): boolean{
    return this.can('create')
  }

  private canRead(): boolean{
    return this.can('read')
  }

  private canUpdate(): boolean{
    return this.can('update')
  }

  private canDelete(): boolean{
    return this.can('delete')
  }

  private can(type): boolean{
    return !!(this.entityName && this.userPrivileges()[this.entityName] && this.userPrivileges()[this.entityName].includes(type))
  }

  private creatable(): boolean{
    return this.able('create')
  }

  private readable(): boolean{
    return this.able('read')
  }

  private updateable(): boolean{
    return this.able('update')
  }

  private deleteable(): boolean{
    return this.able('delete')
  }

  private able(type: string): boolean{
    return !!(this.entityName &&  this.entities()[this.entityName] && this.entities()[this.entityName].includes(type))
  }

  private userEntities(){
    return Object.keys(this.userPrivileges())
  }

  private userPrivileges(){
    return this.users()[this.userType()];
  }

  private userType(){
    return this.user['type']
  }

  private userTypes(){
    return Object.keys(this.users())
  }

  private users(){
    return this.privileges.users
  }

  private entities(){
    return this.privileges.entities
  }
}
