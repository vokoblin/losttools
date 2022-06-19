import type { Book, Build, BuildEng } from "./Types";

export default class BuildCalculator {
    private readonly MAXP_ACCES = 40;
    private readonly MAXP_BOOKS = 24;
    private readonly MAXP_STONE = 20;
    private readonly MAXP_ALL = this.MAXP_ACCES + this.MAXP_BOOKS + this.MAXP_STONE;

    private build: Build = {
        engravings: [],
        equipedBooks: [],
        reqPoints: 0
    };
    private books: Book[] = [];

    public getBuild(): Build {
        return this.build;
    }

    public setBuild(build: Build) {
        build.reqPoints = this.calculateReqPoints(build.engravings);
        this.build = build;
    }

    public isValid(build: Build): boolean {
        const reqPoints = this.calculateReqPoints(build.engravings);
        return reqPoints < this.MAXP_ALL && reqPoints > 0;
    }

    public createBooksFromBuild(): void {
        if (this.isInSyncWithBuild(this.books)) return;
        this.books = this.build.engravings.map(e => { return { eKey: e.eKey, points: '0' } });
    }

    public getBooks(): Book[] {
        return this.books;
    }

    private calculateReqPoints(engravings: BuildEng[]): number {
        let reqPoints = 0;
        engravings.forEach(engraving => {
            reqPoints += engraving.level * 5;
        });

        return reqPoints;
    }

    private isInSyncWithBuild(storage: any[]) {
        return Object.keys(this.build.engravings)
            .every(k => this.build.engravings[k].eKey === storage[k]?.eKey);
    }
}