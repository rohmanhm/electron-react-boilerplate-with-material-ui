import React from 'react';
import MUIDataTable from 'mui-datatables';
import UserInputForm from './UserInputForm';

type Props = {
  data: Array,
  handleOnSubmit: () => void,
  title: string
};

export default ({ handleOnSubmit, title, ...userTable }: Props) => (
  <div>
    <h3>{title}</h3>
    <UserInputForm
      dialogTitle="Add User"
      dialogText="Name and Email are required"
      handleOnSubmit={handleOnSubmit}
    />
    <div style={{ width: '80%' }}>
      <MUIDataTable {...userTable} onRowsDelete={event => console.log(event)} />
    </div>
  </div>
);
