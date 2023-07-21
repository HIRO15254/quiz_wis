'use client';

// 各種import
import {
  ActionIcon,
  Anchor,
  Button, Group, Skeleton, Stack, Table, Text, Tooltip,
} from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import React from 'react';

// Propsの型定義
interface QuizListData {
  id: string;
  databaseId: string;
  name: string;
  description?: string | null | undefined;
  genreSet?: {
    databaseId: string;
    name: string;
  } | null | undefined;
}

interface QuizListTableProps {
  loading: boolean;
  data: QuizListData[];
  openCreateQuizListModal: () => void;
  openDeleteQuizListModal: (databaseId: string) => void;
  openEditQuizListModal: (databaseId: string) => void;
}

/**
 * 説明
 */
export const QuizListTable: React.FC<QuizListTableProps> = (props) => {
  const {
    data,
    loading,
    openCreateQuizListModal,
    openDeleteQuizListModal,
    openEditQuizListModal,
  } = props;

  // 部分的なコンポーネントの宣言
  const rows = data.map((quizList) => (
    <tr key={quizList.id}>
      <td>
        <Anchor href={`quizlists/${quizList.databaseId}`}>
          {quizList.name}
        </Anchor>
      </td>
      <td>
        { quizList.description && (
          <Text>
            {quizList.description}
          </Text>
        )}
        { !quizList.description && (
          <Text c="dimmed">
            説明文はありません
          </Text>
        )}
      </td>
      <td>
        { quizList.genreSet && (
          <Anchor href={`genresets/${quizList.genreSet.databaseId}`}>
            {quizList.genreSet.name}
          </Anchor>
        )}
        { !quizList.genreSet && (
          <Text c="dimmed">
            未割り当て
          </Text>
        )}
      </td>
      <td>
        <Group spacing={3}>
          <ActionIcon
            size="lg"
            color="blue"
            onClick={() => openEditQuizListModal(quizList.databaseId)}
          >
            <Tooltip label="編集">
              <IconPencil size="1.5rem" stroke={1.4} />
            </Tooltip>
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => openDeleteQuizListModal(quizList.databaseId)}
            color="red"
          >
            <Tooltip label="削除">
              <IconTrash size="1.5rem" stroke={1.4} />
            </Tooltip>
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  // 実際のコンポーネント
  if (!loading && data.length === 0) {
    return (
      <Stack align="center" m="sm">
        <Text size="lg">問題リストがありません</Text>
        <Button
          onClick={openCreateQuizListModal}
          leftIcon={<IconPlus />}
        >
          新規問題リスト
        </Button>
      </Stack>
    );
  }
  return (
    <Skeleton visible={loading}>
      <Group position="right">
        <Button
          onClick={openCreateQuizListModal}
          leftIcon={<IconPlus />}
        >
          新規問題リスト
        </Button>
      </Group>
      <Table
        mt="md"
        highlightOnHover
        fontSize="md"
      >
        <thead>
          <tr>
            <th style={{ minWidth: 80 }}>リスト名</th>
            <th>説明</th>
            <th>使用ジャンルセット</th>
            <th style={{ width: 120 }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </Skeleton>
  );
};
