import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { userRoutes } from "./routes/user.routes";
import { poolRoutes } from "./routes/pool.routes";
import { gameRoutes } from "./routes/game.routes";
import { guessRoutes } from "./routes/guess.routes";
import { authRoutes } from "./routes/auth.routes";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: "f60b71828a39b0a8524b903b15a5d0df",
  });

  await fastify.register(poolRoutes);
  await fastify.register(gameRoutes);
  await fastify.register(userRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(authRoutes);

  await fastify.listen({ port: 3333 });
}

bootstrap();
