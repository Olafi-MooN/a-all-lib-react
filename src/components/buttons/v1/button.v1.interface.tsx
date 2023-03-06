import { ButtonHTMLAttributes } from 'react';
import { ConfigHtmlProps } from '../../../@types/ConfigHtmlProps';
import { Kinds } from '../../../@types/Kind';

interface IAllButtonConfigV1Props {
	size: ConfigHtmlProps.size;
	bg_color: ConfigHtmlProps.bg_color;
	radius: ConfigHtmlProps.radius;
	color: ConfigHtmlProps.color;
	font_size: ConfigHtmlProps.size;
}

interface IAllButtonV1Props extends ButtonHTMLAttributes<any> {
	children?: React.ReactNode;
	configStyle: IAllButtonConfigV1Props;
	kind?: Kinds.AllButtonKind;
}

export type { IAllButtonV1Props, IAllButtonConfigV1Props };
