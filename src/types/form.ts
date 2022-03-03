import { FormEventHandler } from 'react';

export interface IForm {
  className?: string;
  onSubmit?: FormEventHandler;
}
