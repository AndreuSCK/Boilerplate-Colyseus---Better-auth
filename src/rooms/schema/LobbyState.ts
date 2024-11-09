import { Schema, Context, type, MapSchema } from "@colyseus/schema";
export class Player extends Schema {
  @type("number") x: number = 100;
  @type("number") y: number = 100;
}
export class LobbyState extends Schema {
  @type("string") synchronizedProperty: string = "Hello world";
  @type({ map: Player }) players = new MapSchema<Player>();
}