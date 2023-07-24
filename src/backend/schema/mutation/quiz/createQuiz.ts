import { prisma } from '../../../../lib/prisma';
import { checkAuthority } from '../../../util/checkAuthority';
import { builder } from '../../builder';
import { Quiz } from '../../object/quiz';

const CreateQuizInput = builder.inputType('CreateQuizInput', {
  fields: (t) => ({
    quizListDatabaseId: t.string({ required: true }),
    question: t.string({ required: true, defaultValue: '' }),
    answer: t.string({ required: true, defaultValue: '' }),
    explanation: t.string({ required: true, defaultValue: '' }),
    otherAnswer: t.string({ required: true, defaultValue: '' }),
    source: t.string({ required: true, defaultValue: '' }),
    length: t.int({ required: true, defaultValue: 0 }),
  }),
});

builder.mutationFields((t) => ({
  createQuiz: t.prismaField({
    type: Quiz,
    args: {
      input: t.arg({ type: CreateQuizInput, required: true }),
    },
    resolve: async (_query, _root, args, ctx, _info) => {
      const quizList = await prisma.quizList.findUniqueOrThrow({
        where: { databaseId: args.input.quizListDatabaseId },
        include: { user: true },
      });
      if (quizList.user.userId !== ctx.currentUserId) {
        if (!await checkAuthority(ctx.currentUserId, 'ADMIN')) {
          throw new Error('権限がありません。');
        }
      }
      const ret = await prisma.quiz.create({
        data: {
          user: {
            connect: {
              userId: ctx.currentUserId,
            },
          },
          quizList: {
            connect: {
              databaseId: args.input.quizListDatabaseId,
            },
          },
          question: args.input.question,
          answer: args.input.answer,
          explanation: args.input.explanation,
          otherAnswer: args.input.otherAnswer,
          source: args.input.source,
          length: args.input.length,
        },
      });
      return ret;
    },
  }),
}));
