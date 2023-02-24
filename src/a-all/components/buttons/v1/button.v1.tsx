import React from 'react';
import { IAllButtonV1Props } from './button.v1.interface';

const AllButton = (props: IAllButtonV1Props) => {
  return <button {...props} />;
};

export { AllButton };
