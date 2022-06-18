import type { Build } from "./Types";

export default class BuildCalculator {
    private readonly MAXP_ACCES = 40;
    private readonly MAXP_BOOKS = 24;
    private readonly MAXP_STONE = 20;
    private readonly MAXP_ALL = this.MAXP_ACCES + this.MAXP_BOOKS + this.MAXP_STONE;

    private build: Build = [];

    public getBuild(): Build {
        return this.build;
    }

    public setBuild(build: Build) {
        this.build = build;
    }

    public isValid(build: Build): boolean {
        let reqPoints = 0;
        build.forEach(engraving => {
            reqPoints += engraving.level * 5;
        });

        return reqPoints < this.MAXP_ALL;
    }
}