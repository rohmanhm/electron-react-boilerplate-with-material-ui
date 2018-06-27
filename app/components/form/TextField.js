import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  input: {},
  meta: mixed
};

export default ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}: Props) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
);
