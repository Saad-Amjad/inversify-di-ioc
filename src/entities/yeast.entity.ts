import { injectable, inject } from "inversify";
import { Water } from "../interfaces/water.interface";
import { TYPES } from "../types/types";
import { Yeast } from "../interfaces/yeast.interface";

@injectable()
export class YeastEntity implements Yeast {

    public water: Water;

    public constructor(
        @inject(TYPES.Water) water: Water,
    ) {
        console.log('Yeast class initiated');
        this.water = water;
    }

    public getWater(): Water {
        return this.water;
    }
}