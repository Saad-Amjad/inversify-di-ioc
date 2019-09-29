import { Flour } from "./flour.interface";
import { Yeast } from "./yeast.interface";

export interface Dough {
    getFlour(): Flour;
    getYeast(): Yeast;
}