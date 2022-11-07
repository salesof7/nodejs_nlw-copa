import { FastifyRequest } from "fastify";

export async function ensureAuthenticate(request: FastifyRequest) {
  await request.jwtVerify();
}
