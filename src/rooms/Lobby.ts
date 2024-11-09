import { Client, Room } from "colyseus";
import { LobbyState, Player } from "./schema/LobbyState";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class Lobby extends Room <LobbyState> {
  onCreate() {
    this.setState(new LobbyState());
  }
  async onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    // const user = await prisma.user.create({
    //   data: {
    //     gameSessionId: client.sessionId,
    //   },
    // });
    this.state.players.set(client.sessionId, new Player());
    console.log(this.state.players.entries());
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}