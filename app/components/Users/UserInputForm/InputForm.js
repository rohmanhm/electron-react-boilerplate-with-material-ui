// @flow
import React from 'react';
import { Form, Field } from 'react-final-form';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '../../form/TextField';
import Checkbox from '../../form/Checkbox';

type Props = {
  classes: {
    root: string
  },
  closeForm: () => void,
  dialogTitle: string,
  dialogText: string,
  handleOnSubmit: () => void
};

const InputForm = (props: Props) => (
  <div className={props.classes.root}>
    <Form
      onSubmit={props.handleOnSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">{props.dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>{props.dialogText}</DialogContentText>
            <FormGroup>
              <Field
                label="Name"
                name="name"
                component={TextField}
                type="text"
              />
              <Field
                label="Email"
                name="email"
                component={TextField}
                type="text"
              />
              <FormControlLabel
                control={
                  <Field name="isAdmin" component={Checkbox} type="checkbox" />
                }
                label="Admin"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              color={pristine ? 'default' : 'primary'}
              variant={pristine ? 'text' : 'raised'}
              disabled={submitting || pristine}
            >
              Submit
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </Button>
            <Button onClick={props.closeForm} color="primary">
              Cancel
            </Button>
            {submitting && <LinearProgress />}
          </DialogActions>
        </form>
      )}
    />
  </div>
);

export default InputForm;
