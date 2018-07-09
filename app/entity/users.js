import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: 'User',
  columns: {
    id: {
      type: 'string',
      primary: true,
      generated: 'uuid'
    },
    name: {
      type: 'text'
    },
    nik: {
      type: 'text'
    },
    address: {
      type: 'text',
      nullable: true
    },
    class: {
      type: 'text',
      nullable: true
    },
    createDate: {
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP'
    },
    updateDate: {
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP'
    }
  }
});
