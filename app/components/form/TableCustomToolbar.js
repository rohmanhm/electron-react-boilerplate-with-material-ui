import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  classes: {},
  handleDelete: () => void,
  handleEdit: () => void,
  selectedRows: {
    lookup?: {},
    data: Array<{
      index: number,
      dataIndex: number
    }>
  }
};

const defaultToolbarSelectStyles = {
  iconButton: {
    marginRight: '24px',
    top: '50%',
    display: 'inline-block',
    position: 'relative',
    transform: 'translateY(-50%)'
  },
  deleteIcon: {
    color: '#000'
  }
};

class TableCustomToolbar extends React.Component<Props> {
  render() {
    const { classes, handleDelete, handleEdit, selectedRows } = this.props;
    return (
      <div className="custom-toolbar-select">
        <Tooltip title="Edit">
          <IconButton
            className={classes.iconButton}
            onClick={handleEdit(selectedRows.data)}
          >
            <EditIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            className={classes.iconButton}
            onClick={() => handleDelete(selectedRows.data)}
          >
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, {
  name: 'TableCustomToolbar'
})(TableCustomToolbar);
