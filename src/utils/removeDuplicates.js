export const removeDuplicate = (catalogue, key='id') =>
	[...catalogue].filter((item, index, self) => index === self.findIndex(t => t[key] === item[key]));