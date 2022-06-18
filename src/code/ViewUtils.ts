export default class ViewUtils {
    public static hide(e: HTMLElement) {
        if (e.className.substring(0, 6) === 'hidden') return;
        e.className = 'hidden' + e.className;
    }

    public static show(e: HTMLElement) {
        if (e.className.substring(0, 6) !== 'hidden') return;
        e.className = e.className.slice(6, e.className.length);
    }
}