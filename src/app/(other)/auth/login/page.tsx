import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import React from 'react';

import LoginForm from './_components/LoginForm';

interface LoginPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata = {
  title: 'ログイン - QuizWis',
};

/**
 * ログイン用のページ ログイン時のアクセスは禁止
 */
const LoginPage = async (props: LoginPageProps) => {
  const { searchParams } = props;

  const session = await getServerSession();
  const callback = searchParams.callbackUrl?.toString();

  // ログイン済みならコールバック先へリダイレクト
  if (session) {
    redirect(callback ?? '/');
  }

  return (
    <LoginForm callbackUrl={callback} />
  );
};

export default LoginPage;
