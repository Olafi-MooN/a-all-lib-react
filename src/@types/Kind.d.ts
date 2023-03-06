enum EKind {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	TERTIARY = 'tertiary',
}

namespace Kinds {
	export type AllButtonKind = keyof typeof EKind;
}

export { EKind, Kinds };
