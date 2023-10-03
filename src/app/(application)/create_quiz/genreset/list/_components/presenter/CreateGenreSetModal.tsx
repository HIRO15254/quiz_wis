// 各種import
import {
  Button, Group, Modal, ModalProps, Stack,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { getHotkeyHandler } from '@mantine/hooks';
import React from 'react';

import { CreateGenreSetInput } from 'gql';

import { GenreSetForm } from './GenreSetForm';

export interface Props extends ModalProps {
  form: UseFormReturnType<CreateGenreSetInput>;
  onSubmit: () => void;
  submitButtonLoading?: boolean;
}

/**
 * ジャンルセットを作成するモーダル
 */
export const CreateGenreSetModal: React.FC<Props> = (props) => {
  const {
    form,
    onSubmit,
    submitButtonLoading = false,
    ...other
  } = props;

  return (
    <Modal
      title="新規ジャンルセット作成"
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', onSubmit],
      ])}
      {...other}
    >
      <form onSubmit={onSubmit}>
        <Stack>
          <GenreSetForm form={form} />
          <Group position="right">
            <Button
              type="submit"
              loading={submitButtonLoading}
            >
              作成
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};