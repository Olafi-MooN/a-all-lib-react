import { EColors } from './Colors';
import { ESize } from './Size';

namespace ConfigHtmlProps {
	export type size = keyof typeof ESize;
	export type bg_color = keyof typeof EColors | string;
	export type color = keyof typeof EColors | string;
	export type radius = keyof typeof ESize;
}

export type { ConfigHtmlProps };
