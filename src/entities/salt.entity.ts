import { injectable } from "inversify";
import { Salt } from "../interfaces/salt.interface";

@injectable()
export class SaltEntity implements Salt {

    public constructor() {
        console.log('Salt class initiated');
    }

    public get(): string {
        return 'You need nothing but salt as your first ingredient!';
    }
}