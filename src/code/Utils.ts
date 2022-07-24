export default class Utils {
	public static firstToUpper(str: string): string {
		return str[0].toUpperCase() + str.substring(1);
	}

	public static camelToSnakeCase(str: string): string {
		return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
	}

	public static toEngravingFormat(str: string): string {
		return str.replace(/(^[a-z]|-[a-z])/g, l => (l.length > 1 ? l.substring(1) : l).toUpperCase());
	}
}