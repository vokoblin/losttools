export type obj = { [key: string]: any };
export type Page = { comp: object, cont?: any };
export type PageMap = { [key: string]: Page };
export type OnPageChangeCallback = (page: string) => void;
export type Engraving = { key: string, type: string, class?: string, name: string, desc: string };
export type BuildEng =  {engraving: Engraving, level: number};
export type Build = BuildEng[];