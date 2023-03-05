enum EColors {
	PRIMARY = 'primary',
	PRIMARY_HOVER = 'primary-hover',
	PRIMARY_SELECTED = 'primary-selected',
	POSITIVE = 'positive',
	POSITIVE_HOVER = 'positive-hover',
	POSITIVE_SELECTED = 'positive-selected',
	NEGATIVE = 'negative',
	NEGATIVE_HOVER = 'negative-hover',
	NEGATIVE_SELECTED = 'negative-selected',
	DARK = 'dark',
	WOLF_GRAY = 'wolf-grey',
	UI_GRAY = 'ui-grey',
	RIVERSTONE = 'riverstone',
	WHITE = 'white',
}

enum EColorsKind {
	PRIMARY = EColors.PRIMARY,
	POSITIVE = EColors.POSITIVE,
	NEGATIVE = EColors.NEGATIVE,
}

export { EColors, EColorsKind };
