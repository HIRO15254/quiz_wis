import { decodeGlobalID } from '@pothos/plugin-relay';

import { prisma } from '../../../../lib/prisma';
import { checkAuthority } from '../../../util/checkAuthority';
import { builder } from '../../builder';
import { GenreSet } from '../../object/genreSet';

const GetGenreSetInput = builder.inputType('GetGenreSetInput', {
  fields: (t) => ({
    id: t.string({ required: true }),
  }),
});

builder.queryField('getGenreSet', (t) => t.prismaField({
  type: GenreSet,
  args: { input: t.arg({ type: GetGenreSetInput, required: true }) },
  resolve: async (
    _query,
    _root,
    args,
    ctx,
    _info,
  ) => {
    const { typename, id: databaseId } = decodeGlobalID(args.input.id);
    if (typename !== 'GenreSet') {
      throw new Error('IDの型が違います。');
    }
    const genreSet = await prisma.genreSet.findUniqueOrThrow({
      where: { databaseId },
      include: {
        user: true,
        genres: {
          orderBy: {
            createdAt: 'asc',
          },
          include: {
            childGenres: {
              orderBy: {
                createdAt: 'asc',
              },
            },
          },
        },
      },
    });
    if (genreSet.user.userId !== ctx.currentUserId) {
      if (!await checkAuthority(ctx.currentUserId ?? '', 'ADMIN')) {
        throw new Error('権限がありません。');
      }
    }
    return genreSet;
  },
}));
