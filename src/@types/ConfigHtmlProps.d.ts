import { EColors } from './Colors';
import { ESize } from './Size';

namespace ConfigHtmlProps {
	export type size = keyof typeof ESize;
	export type bg_color = keyof typeof EColors;
	export type color = keyof typeof EColors;
	export type radius = '1' | '2' | '3' | '4';
}

export type { ConfigHtmlProps };
