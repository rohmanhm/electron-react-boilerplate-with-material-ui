import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  handler: () => void,
  text: string
};

const TrashCan = ({ handler, text }: Props) => (
  <Button onClick={handler}>{text}</Button>
);

export default TrashCan;
