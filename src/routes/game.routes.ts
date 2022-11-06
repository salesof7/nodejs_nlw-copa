import { FastifyInstance } from "fastify";
import { prisma } from "../database/prismaClient";

export function gameRoutes(fastify: FastifyInstance) {
  fastify.get("/games/count", async () => {
    const count = await prisma.game.count();

    return { count };
  });
}
