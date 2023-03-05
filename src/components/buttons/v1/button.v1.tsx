import React from 'react';
import { IAllButtonV1Props, IAllButtonConfigV1Props } from './button.v1.interface';
import { objectToClassName } from '../../../utils/ObjectToClassName';
import './button.v1.scss';

const AllButton = (props: IAllButtonV1Props) => {
	const configStyle = objectToClassName(props?.configStyle);

	return <button {...props} className={`a-all_btn-v1 ${configStyle} ${props?.className}`} />;
};

AllButton.defaultProps = {
	configStyle: {
		bg_color: 'PRIMARY',
		size: 'LARGE',
		radius: '1',
		color: 'PRIMARY',
	} as IAllButtonConfigV1Props,
};

export { AllButton };
