import React from 'react';
import { AIconsV1Props } from './icon.v1.interface';

const AIconsV1 = (props: Partial<AIconsV1Props>) => (
	<i className="material-icons" {...props}>
		{props?.name}
	</i>
);

export { AIconsV1 };
