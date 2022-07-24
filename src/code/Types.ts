export type obj = { [key: string]: any };
export type Page = { comp: object, cont?: any };
export type PageMap = { [key: string]: Page };
export type OnPageChangeCallback = (page: string) => void;
export type Engraving = { key: string, type: string, class?: string, name: string, desc: string };
export type Engravings = { [key: string]: Engraving };
export type Book = { eKey: string, points: string };
export type BuildEng = { eKey: string, level: number };
export type Region = {full: string, short: string};

export type Build = {
    pClass: string,
    engravings: BuildEng[],
    equippedBooks: Book[],
    reqPoints: number
};