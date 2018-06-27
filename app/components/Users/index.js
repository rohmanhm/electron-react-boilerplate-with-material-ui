// @flow
import * as React from 'react';
import { Composed } from 'render-props-compose';
import format from 'date-fns/format';
import StylesRP from './UsersStyles';
import UserView from './UsersView';
import TableCustomToolbar from '../form/TableCustomToolbar';
import TrashCan from '../TrashCan';

type Props = {
  trash: boolean,
  userAdd: () => void,
  userDelete: () => void,
  userFetch: () => void,
  userUpdate: () => void,
  usersFetch: () => void,
  users: []
};

type muiTableObjDataType = Array<{
  index: number,
  dataIndex: number
}>;

type formDataType = {
  id?: string,
  name: string,
  email: string,
  isAdmin: boolean | typeof undefined
};

const title = 'Users';

const columns = [
  {
    name: 'ID',
    options: {
      display: false
    }
  },
  {
    name: 'Name'
  },
  {
    name: 'Email'
  },
  {
    name: 'Admin'
  },
  {
    name: 'Created'
  }
];

const dataNames = ['id', 'name', 'email', 'isAdmin', 'createDate'];

export default class User extends React.Component<Props> {
  props: Props;
  constructor(props: Props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleMUITableDelete = this.handleMUITableDelete.bind(this);
    this.handleTrashCan = this.handleTrashCan.bind(this);
  }

  componentDidMount() {
    this.props.usersFetch({ isDeleted: false });
  }

  handleOnSubmit(formData: formDataType) {
    if (formData && formData.id) {
      this.props.userUpdate(formData);
    }
    this.props.userAdd(formData);
  }

  handleOnDelete(dataId: string) {
    this.props.userDelete(dataId, !this.props.trash);
  }

  handleMUITableDelete(muiTableObjData: muiTableObjDataType) {
    if (muiTableObjData && muiTableObjData.length) {
      muiTableObjData.map(row =>
        this.handleOnDelete(this.getData()[row.dataIndex][0])
      );
    }
  }

  handleTrashCan() {
    this.props.usersFetch({ isDeleted: !this.props.trash });
  }

  getData() {
    return this.props.users.map(user =>
      dataNames.map(col => {
        const val = user[col];
        switch (typeof val) {
          case 'boolean':
            return val === true ? 'Yes' : 'No';
          default:
            if (val.indexOf('T') === 10 && val.indexOf('.000Z') === 19) {
              return format(new Date(val), 'YYYY-MM-DD HH:MM a');
            }
            return val;
        }
      })
    );
  }

  render() {
    const { users, trash, ...restProps } = this.props;

    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: false,
      customToolbarSelect: selectedRows => (
        <TableCustomToolbar
          selectedRows={selectedRows}
          handleDelete={this.handleMUITableDelete}
          handleEdit={() => null}
        />
      )
    };

    return (
      <Composed
        renderPropName="render"
        components={[StylesRP]}
        render={rpStyles => (
          <div>
            <UserView
              {...rpStyles}
              {...restProps}
              handleOnSubmit={this.handleOnSubmit}
              title={title}
              data={this.getData()}
              columns={columns}
              options={options}
            />
            <TrashCan
              handler={this.handleTrashCan}
              text={trash ? `Exit Delted ${title}` : `Deleted ${title}`}
            />
          </div>
        )}
      />
    );
  }
}
