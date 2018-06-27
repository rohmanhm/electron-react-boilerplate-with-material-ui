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
    email: {
      type: 'text'
    },
    isAdmin: {
      type: 'boolean',
      default: false
    },
    isDeleted: {
      type: 'boolean',
      default: false
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
