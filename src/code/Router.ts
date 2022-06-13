import LandingPage from "../components/pages/Landing.svelte";
import BuildCalculator from "../components/build_calc/BuildCalculator.svelte";
import ErrorPage from "../components/pages/Error.svelte";
import type { Page, PageMap, OnPageChangeCallback } from "./Types";

export default class Router {
    public static activePage: Page;

    private static pages: PageMap = {
        'build_calculator': {comp: BuildCalculator},
        'landing': {comp: LandingPage},
    };

    private static callbacks: OnPageChangeCallback[] = [];

    public static subscribe(callback: OnPageChangeCallback) {
        this.callbacks.push(callback);
    }

    public static goTo(page = "") {
        this.activePage = this.getPageOr404(page);

        // Calling all the callbacks to update components
        this.callbacks.forEach(c => c(page))
    }

    private static getPageOr404(page: string): Page {
        let found = this.pages[page];

        if (!found) {
            found = {
                comp: ErrorPage, 
                cont: '404: Page not found!'
            }
        }

        return found;
    }
}