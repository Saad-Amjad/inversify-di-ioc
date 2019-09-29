import { Container } from "inversify";
import { TYPES } from "./types/types";
import { Dough } from "./interfaces/dough.interface";
import { DoughEntity } from "./entities/dough.entity";
import { Salt } from "./interfaces/salt.interface";
import { Flour } from "./interfaces/flour.interface";
import { Water } from "./interfaces/water.interface";
import { YeastEntity } from "./entities/yeast.entity";
import { Yeast } from "./interfaces/yeast.interface";
import { FlourEntity } from "./entities/flour.entity";
import { SaltEntity } from "./entities/salt.entity";
import { WaterEntity } from "./entities/water.entity";

const pizzaContainer = new Container();

// pizzaContainer.bind<>().to();
pizzaContainer.bind<Dough>(TYPES.Dough).to(DoughEntity);
pizzaContainer.bind<Flour>(TYPES.Flour).to(FlourEntity);
pizzaContainer.bind<Salt>(TYPES.Salt).to(SaltEntity);
pizzaContainer.bind<Water>(TYPES.Water).to(WaterEntity);
pizzaContainer.bind<Yeast>(TYPES.Yeast).to(YeastEntity);

export { pizzaContainer }