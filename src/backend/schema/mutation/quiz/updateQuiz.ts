import { prisma } from '../../../../lib/prisma';
import { checkAuthority } from '../../../util/checkAuthority';
import { builder } from '../../builder';
import { Quiz } from '../../object/quiz';

const UpdateQuizInput = builder.inputType('UpdateQuizInput', {
  fields: (t) => ({
    quizDatabaseId: t.string({ required: true }),
    question: t.string(),
    answer: t.string(),
    explanation: t.string(),
    otherAnswer: t.string(),
    source: t.string(),
  }),
});

builder.mutationFields((t) => ({
  updateQuiz: t.prismaField({
    type: Quiz,
    args: {
      input: t.arg({ type: UpdateQuizInput, required: true }),
    },
    resolve: async (_query, _root, args, ctx, _info) => {
      const quiz = await prisma.quiz.findUniqueOrThrow({
        where: { databaseId: args.input?.quizDatabaseId ?? '' },
        include: { user: true },
      });
      if (quiz.user.userId !== ctx.currentUserId) {
        if (!await checkAuthority(ctx.currentUserId ?? '', 'ADMIN')) {
          throw new Error('権限がありません。');
        }
      }
      const ret = await prisma.quiz.update({
        where: { databaseId: args.input?.quizDatabaseId ?? '' },
        data: {
          question: args.input?.question,
          answer: args.input?.answer,
          explanation: args.input?.explanation,
          otherAnswer: args.input?.otherAnswer,
          source: args.input?.source,
        },
      });
      return ret;
    },
  }),
}));
