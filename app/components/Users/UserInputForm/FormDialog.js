import React from 'react';
import type { Children } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

type Props = {
  children: Children,
  dialogTitle: string,
  toggle: boolean,
  handleTrue: () => void,
  handleFalse: () => void
};

const FormDialog = (props: Props) => (
  <div>
    <Button onClick={props.handleTrue}>{props.dialogTitle}</Button>
    <Dialog
      open={props.toggle}
      onClose={props.handleFalse}
      aria-labelledby="form-dialog-title"
    >
      {props.children}
    </Dialog>
  </div>
);

export default FormDialog;
