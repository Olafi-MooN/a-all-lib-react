import { ButtonHTMLAttributes } from 'react';
import { ConfigHtmlProps } from '../../../@types/ConfigHtmlProps';
interface IAllButtonConfigV1Props {
	size: ConfigHtmlProps.size;
	bg_color: ConfigHtmlProps.bg_color;
	radius: ConfigHtmlProps.radius;
	color: ConfigHtmlProps.color;
}

/**
 * @name Button
 * @description Button component
 */
interface IAllButtonV1Props extends ButtonHTMLAttributes<any> {
	children?: React.ReactNode;
	// configStyle?: IAllButtonConfigV1Props;
	configStyle: IAllButtonConfigV1Props;
}

export type { IAllButtonV1Props, IAllButtonConfigV1Props };
