import { injectable, inject } from "inversify";
import { Flour } from "../interfaces/flour.interface";
import { Water } from "../interfaces/water.interface";
import { TYPES } from "../types/types";

@injectable()
export class FlourEntity implements Flour {

    public water: Water;

    public constructor(
        @inject(TYPES.Water) water: Water,
    ) {
        console.log('Flour class initiated');
        this.water = water;
    }

    public getWater(): Water {
        return this.water;
    }
}