import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Dough } from "./interfaces/dough.interface";
import { TYPES } from "./types/types";

@injectable()
export class Pizza {

    public dough;

    public constructor(@inject(TYPES.Dough) dough: Dough) {
        console.log('Pizza class initiated');
        this.dough = dough;
    }
}
