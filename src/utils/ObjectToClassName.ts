type TypeObjectToClassName<T = string | any> = {
	[x: string]: T;
};

const objectToClassName = (obj: TypeObjectToClassName): string => {
	if (!obj || Object.keys(obj).length === 0) {
		return '';
	}

	const classNameParts = Object.entries(obj).map(([key, value]) => `a-all_${key}-${value?.toLocaleLowerCase()}`);

	return classNameParts.join(' ');
};

export { objectToClassName };
