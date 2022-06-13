export type obj = { [key: string]: any };
export type Page = { comp: object, cont?: any };
export type PageMap = { [key: string]: Page };
export type OnPageChangeCallback = (page: string) => void;