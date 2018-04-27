export class CommonTools {
	public static getSysdate(): Date {
		return new Date(Date.now() - (new Date().getTimezoneOffset()) * 6e4);
	}
}