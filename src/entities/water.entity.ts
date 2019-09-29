import { injectable, inject } from "inversify";
import { Water } from "../interfaces/water.interface";
import { TYPES } from "../types/types";
import { Salt } from "../interfaces/salt.interface";

@injectable()
export class WaterEntity implements Water {

    public salt: Salt;

    public constructor(
        @inject(TYPES.Salt) salt: Salt,
    ) {
        console.log('Water class initiated');
        this.salt = salt;
    }

    public getSalt(): Salt {
        return this.salt;
    }
}