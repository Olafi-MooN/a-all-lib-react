import React from 'react';
import { IAllButtonV1Props, IAllButtonConfigV1Props } from './button.v1.interface';
import { objectToClassName } from '../../../utils/ObjectToClassName';
import './button.v1.scss';

const AllButton = (props: IAllButtonV1Props) => {
	const configStyle = objectToClassName({ ...props?.configStyle, kind: props.kind });

	return <button {...props} className={`a-all_btn-v1 ${configStyle} ${props?.className}`} />;
};

AllButton.defaultProps = {
	configStyle: {
		bg_color: 'PRIMARY',
		size: 'LARGE',
		radius: 'SMALL',
		color: 'WHITE',
		font_size: 'MEDIUM',
	} as IAllButtonConfigV1Props,
	kind: 'SECONDARY',
} as IAllButtonV1Props;

export { AllButton };
