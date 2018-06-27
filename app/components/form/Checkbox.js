import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
  input: {},
  meta: mixed
};

export default ({
  input: { checked, name, onChange, ...restInput },
  meta,
  ...rest
}: Props) => (
  <Checkbox
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    checked={!!checked}
  />
);
