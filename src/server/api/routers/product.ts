import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const productRouter = createTRPCRouter({
  getByType: publicProcedure
    .input(
      z.object({
        type: z.string().trim(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.product.findMany({
        where: {
          dbType: input.type,
        },
      });
    }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string().trim(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.product.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
