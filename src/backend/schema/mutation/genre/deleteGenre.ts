import { decodeGlobalID } from '@pothos/plugin-relay';

import { prisma } from '../../../../lib/prisma';
import { checkAuthority } from '../../../util/checkAuthority';
import { builder } from '../../builder';
import { Genre } from '../../object/genre';

const DeleteGenreInput = builder.inputType('DeleteGenreInput', {
  fields: (t) => ({
    id: t.string({ required: true }),
  }),
});

builder.mutationFields((t) => ({
  deleteGenre: t.prismaField({
    type: Genre,
    args: {
      input: t.arg({ type: DeleteGenreInput, required: true }),
    },
    resolve: async (
      _query,
      _root,
      args,
      ctx,
      _info,
    ) => {
      const { typename, id: databaseId } = decodeGlobalID(args.input.id);
      if (typename !== 'Genre') {
        throw new Error('GenreのIDの型が違います。');
      }
      const genre = await prisma.genre.findUniqueOrThrow({
        where: { databaseId },
        include: { genreSet: { include: { user: true } } },
      });
      if (genre.genreSet.user.userId !== ctx.currentUserId) {
        if (!await checkAuthority(ctx.currentUserId, 'ADMIN')) {
          throw new Error('権限がありません。');
        }
      }
      return prisma.genre.delete({
        where: { databaseId },
      });
    },
  }),
}));
