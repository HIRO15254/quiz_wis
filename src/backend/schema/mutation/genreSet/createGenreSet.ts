import { prisma } from '../../../../lib/prisma';
import { builder } from '../../builder';
import { GenreSet } from '../../object/genreSet';

const CreateGenreSetInput = builder.inputType('CreateGenreSetInput', {
  fields: (t) => ({
    name: t.string({ required: true }),
    description: t.string(),
  }),
});

builder.mutationFields((t) => ({
  createGenreSet: t.prismaField({
    type: GenreSet,
    args: {
      input: t.arg({ type: CreateGenreSetInput, required: true }),
    },
    resolve: async (_query, _root, args, ctx, _info) => {
      const ret = await prisma.genreSet.create({
        data: {
          user: {
            connect: {
              userId: ctx.currentUserId ?? '',
            },
          },
          name: args.input?.name,
          description: args.input?.description ?? '',
        },
      });
      return ret;
    },
  }),
}));
