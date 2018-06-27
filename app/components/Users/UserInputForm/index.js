// @flow
import React from 'react';
import { Composed } from 'render-props-compose';
import ToggleStateRP from '@hypersprite/toggle-state-rp';
import FormDialog from './FormDialog';
import InputForm from './InputForm';
import StylesRP from './StylesRP';

type Props = {
  dialogText: string | typeof undefined,
  dialogTitle: string | typeof undefined,
  editId: string | typeof undefined,
  handleOnSubmit: () => void
};

const UserInputForm = (props: Props) => (
  <Composed
    renderPropName="render"
    components={[ToggleStateRP, StylesRP]}
    render={(tStateRP, rpStyles) => (
      <FormDialog {...rpStyles} {...tStateRP} {...props}>
        <InputForm
          {...rpStyles}
          dialogTitle={props.dialogTitle}
          dialogText={props.dialogText}
          handleOnSubmit={props.handleOnSubmit}
          closeForm={tStateRP.handleFalse}
          editId={props.editId}
        />
      </FormDialog>
    )}
  />
);

export default UserInputForm;
