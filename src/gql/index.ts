import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type CreateGenreInput = {
  data: GenreInputData;
  genreSetId: Scalars['String']['input'];
  parentGenreId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGenreSetInput = {
  data: GenreSetInputData;
};

export type CreateQuizInput = {
  data: QuizInputData;
  quizListId: Scalars['String']['input'];
};

export type CreateQuizListInput = {
  data: QuizListInputData;
};

export type DeleteGenreInput = {
  id: Scalars['String']['input'];
};

export type DeleteGenreSetInput = {
  id: Scalars['String']['input'];
};

export type DeleteQuizInput = {
  id: Scalars['String']['input'];
};

export type DeleteQuizListInput = {
  id: Scalars['String']['input'];
};

export type DeleteUserInput = {
  userId: Scalars['String']['input'];
};

export type Genre = Node & {
  __typename?: 'Genre';
  childGenres: Array<Genre>;
  color: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  databaseId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genreSet: GenreSet;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentGenre?: Maybe<Genre>;
  quizzes: Array<Quiz>;
  ratio: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type GenreInputData = {
  color: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ratio: Scalars['Int']['input'];
};

export type GenreSet = Node & {
  __typename?: 'GenreSet';
  createdAt: Scalars['Date']['output'];
  databaseId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genres: Array<Genre>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  quizLists: Array<QuizList>;
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type GenreSetInputData = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GetGenreInput = {
  id: Scalars['String']['input'];
};

export type GetGenreSetInput = {
  id: Scalars['String']['input'];
};

export type GetQuizInput = {
  id: Scalars['String']['input'];
};

export type GetQuizListInput = {
  id: Scalars['String']['input'];
};

export type GetQuizzesInput = {
  listId: Scalars['String']['input'];
};

export type GetUserInput = {
  userId: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGenre: Genre;
  createGenreSet: GenreSet;
  createQuiz: Quiz;
  createQuizList: QuizList;
  deleteGenre: Genre;
  deleteGenreSet: GenreSet;
  deleteQuiz: Quiz;
  deleteQuizList: QuizList;
  deleteUser: User;
  updateGenre: Genre;
  updateGenreSet: GenreSet;
  updateLoginUser: User;
  updateQuiz: Quiz;
  updateQuizList: QuizList;
  updateUser: User;
};


export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};


export type MutationCreateGenreSetArgs = {
  input: CreateGenreSetInput;
};


export type MutationCreateQuizArgs = {
  input: CreateQuizInput;
};


export type MutationCreateQuizListArgs = {
  input: CreateQuizListInput;
};


export type MutationDeleteGenreArgs = {
  input: DeleteGenreInput;
};


export type MutationDeleteGenreSetArgs = {
  input: DeleteGenreSetInput;
};


export type MutationDeleteQuizArgs = {
  input: DeleteQuizInput;
};


export type MutationDeleteQuizListArgs = {
  input: DeleteQuizListInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationUpdateGenreArgs = {
  input: UpdateGenreInput;
};


export type MutationUpdateGenreSetArgs = {
  input: UpdateGenreSetInput;
};


export type MutationUpdateLoginUserArgs = {
  input: UpdateLoginUserInput;
};


export type MutationUpdateQuizArgs = {
  input: UpdateQuizInput;
};


export type MutationUpdateQuizListArgs = {
  input: UpdateQuizListInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getGenre: Genre;
  getGenreSet: GenreSet;
  getGenreSets: Array<GenreSet>;
  getQuiz: Quiz;
  getQuizList: QuizList;
  getQuizLists: Array<QuizList>;
  getQuizzes: Array<Quiz>;
  getUser: User;
  loginUser: User;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
};


export type QueryGetGenreArgs = {
  input: GetGenreInput;
};


export type QueryGetGenreSetArgs = {
  input: GetGenreSetInput;
};


export type QueryGetQuizArgs = {
  input: GetQuizInput;
};


export type QueryGetQuizListArgs = {
  input: GetQuizListInput;
};


export type QueryGetQuizzesArgs = {
  input: GetQuizzesInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type Quiz = Node & {
  __typename?: 'Quiz';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  databaseId: Scalars['String']['output'];
  explanation?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Genre>;
  id: Scalars['ID']['output'];
  length: Scalars['Int']['output'];
  otherAnswer?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  quizList: QuizList;
  source?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type QuizInputData = {
  answer?: InputMaybe<Scalars['String']['input']>;
  explanation?: InputMaybe<Scalars['String']['input']>;
  genreId?: InputMaybe<Scalars['String']['input']>;
  length?: Scalars['Int']['input'];
  otherAnswer?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export type QuizList = Node & {
  __typename?: 'QuizList';
  databaseId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genreSet?: Maybe<GenreSet>;
  goal?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  quizCount: Scalars['Int']['output'];
  quizzes: Array<Quiz>;
  user: User;
};

export type QuizListInputData = {
  description?: InputMaybe<Scalars['String']['input']>;
  genreSetId?: InputMaybe<Scalars['String']['input']>;
  goal?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type UpdateGenreInput = {
  data: GenreInputData;
  id: Scalars['String']['input'];
};

export type UpdateGenreSetInput = {
  data: GenreSetInputData;
  id: Scalars['String']['input'];
};

export type UpdateLoginUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newUserId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuizInput = {
  data: QuizInputData;
  id: Scalars['String']['input'];
};

export type UpdateQuizListInput = {
  data: QuizListInputData;
  id: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newUserId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type User = Node & {
  __typename?: 'User';
  createdAt: Scalars['Date']['output'];
  databaseId: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  genreSets: Array<GenreSet>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quizLists: Array<QuizList>;
  quizzes: Array<Quiz>;
  role: UserRole;
  updatedAt: Scalars['Date']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type GetLoginUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoginUserQuery = { __typename?: 'Query', loginUser: { __typename?: 'User', id: string, image?: string | null, name?: string | null, userId?: string | null, email?: string | null } };

export type UpdateLoginUserMutationVariables = Exact<{
  input: UpdateLoginUserInput;
}>;


export type UpdateLoginUserMutation = { __typename?: 'Mutation', updateLoginUser: { __typename?: 'User', id: string, image?: string | null, name?: string | null, userId?: string | null, email?: string | null } };

export type GenreDataFragment = { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string };

export type GenreSetDataFragment = { __typename?: 'GenreSet', id: string, name: string, description?: string | null };

export type QuizDataFragment = { __typename?: 'Quiz', id: string, question?: string | null, answer?: string | null, otherAnswer?: string | null, explanation?: string | null, source?: string | null, length: number, genre?: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } | null };

export type QuizListDataFragment = { __typename?: 'QuizList', id: string, name: string, description?: string | null, quizCount: number, goal?: number | null, genreSet?: { __typename?: 'GenreSet', name: string, id: string } | null };

export type CreateGenreMutationVariables = Exact<{
  input: CreateGenreInput;
}>;


export type CreateGenreMutation = { __typename?: 'Mutation', createGenre: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } };

export type UpdateGenreMutationVariables = Exact<{
  input: UpdateGenreInput;
}>;


export type UpdateGenreMutation = { __typename?: 'Mutation', updateGenre: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } };

export type DeleteGenreMutationVariables = Exact<{
  input: DeleteGenreInput;
}>;


export type DeleteGenreMutation = { __typename?: 'Mutation', deleteGenre: { __typename?: 'Genre', id: string } };

export type CreateGenreSetMutationVariables = Exact<{
  input: CreateGenreSetInput;
}>;


export type CreateGenreSetMutation = { __typename?: 'Mutation', createGenreSet: { __typename?: 'GenreSet', id: string, name: string, description?: string | null } };

export type UpdateGenreSetMutationVariables = Exact<{
  input: UpdateGenreSetInput;
}>;


export type UpdateGenreSetMutation = { __typename?: 'Mutation', updateGenreSet: { __typename?: 'GenreSet', id: string, name: string, description?: string | null } };

export type DeleteGenreSetMutationVariables = Exact<{
  input: DeleteGenreSetInput;
}>;


export type DeleteGenreSetMutation = { __typename?: 'Mutation', deleteGenreSet: { __typename?: 'GenreSet', id: string } };

export type CreateQuizMutationVariables = Exact<{
  input: CreateQuizInput;
}>;


export type CreateQuizMutation = { __typename?: 'Mutation', createQuiz: { __typename?: 'Quiz', id: string, question?: string | null, answer?: string | null, otherAnswer?: string | null, explanation?: string | null, source?: string | null, length: number, genre?: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } | null } };

export type UpdateQuizMutationVariables = Exact<{
  input: UpdateQuizInput;
}>;


export type UpdateQuizMutation = { __typename?: 'Mutation', updateQuiz: { __typename?: 'Quiz', id: string, question?: string | null, answer?: string | null, otherAnswer?: string | null, explanation?: string | null, source?: string | null, length: number, genre?: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } | null } };

export type DeleteQuizMutationVariables = Exact<{
  input: DeleteQuizInput;
}>;


export type DeleteQuizMutation = { __typename?: 'Mutation', deleteQuiz: { __typename?: 'Quiz', id: string } };

export type CreateQuizListMutationVariables = Exact<{
  input: CreateQuizListInput;
}>;


export type CreateQuizListMutation = { __typename?: 'Mutation', createQuizList: { __typename?: 'QuizList', id: string, name: string, description?: string | null, quizCount: number, goal?: number | null, genreSet?: { __typename?: 'GenreSet', name: string, id: string } | null } };

export type UpdateQuizListMutationVariables = Exact<{
  input: UpdateQuizListInput;
}>;


export type UpdateQuizListMutation = { __typename?: 'Mutation', updateQuizList: { __typename?: 'QuizList', id: string, name: string, description?: string | null, quizCount: number, goal?: number | null, genreSet?: { __typename?: 'GenreSet', name: string, id: string } | null } };

export type DeleteQuizListMutationVariables = Exact<{
  input: DeleteQuizListInput;
}>;


export type DeleteQuizListMutation = { __typename?: 'Mutation', deleteQuizList: { __typename?: 'QuizList', id: string } };

export type GetGenreQueryVariables = Exact<{
  input: GetGenreInput;
}>;


export type GetGenreQuery = { __typename?: 'Query', getGenre: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } };

export type GetGenreDetailPageDataQueryVariables = Exact<{
  input: GetGenreSetInput;
}>;


export type GetGenreDetailPageDataQuery = { __typename?: 'Query', getGenreSet: { __typename?: 'GenreSet', id: string, name: string, description?: string | null, genres: Array<{ __typename?: 'Genre', createdAt: any, id: string, description?: string | null, name: string, ratio: number, color: string, parentGenre?: { __typename?: 'Genre', id: string } | null, childGenres: Array<{ __typename?: 'Genre', id: string }> }> } };

export type GetGenreSetQueryVariables = Exact<{
  input: GetGenreSetInput;
}>;


export type GetGenreSetQuery = { __typename?: 'Query', getGenreSet: { __typename?: 'GenreSet', id: string, name: string, description?: string | null } };

export type GetGenreSetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenreSetsQuery = { __typename?: 'Query', getGenreSets: Array<{ __typename?: 'GenreSet', id: string, name: string, description?: string | null }> };

export type GetGenresFromQuizListQueryVariables = Exact<{
  input: GetQuizListInput;
}>;


export type GetGenresFromQuizListQuery = { __typename?: 'Query', getQuizList: { __typename?: 'QuizList', genreSet?: { __typename?: 'GenreSet', genres: Array<{ __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string, parentGenre?: { __typename?: 'Genre', id: string } | null, childGenres: Array<{ __typename?: 'Genre', id: string }> }> } | null } };

export type GetQuizQueryVariables = Exact<{
  input: GetQuizInput;
}>;


export type GetQuizQuery = { __typename?: 'Query', getQuiz: { __typename?: 'Quiz', id: string, question?: string | null, answer?: string | null, otherAnswer?: string | null, explanation?: string | null, source?: string | null, length: number, genre?: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } | null } };

export type GetQuizListQueryVariables = Exact<{
  input: GetQuizListInput;
}>;


export type GetQuizListQuery = { __typename?: 'Query', getQuizList: { __typename?: 'QuizList', id: string, name: string, description?: string | null, quizCount: number, goal?: number | null, genreSet?: { __typename?: 'GenreSet', name: string, id: string } | null } };

export type GetQuizListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuizListsQuery = { __typename?: 'Query', getQuizLists: Array<{ __typename?: 'QuizList', id: string, name: string, description?: string | null, quizCount: number, goal?: number | null, genreSet?: { __typename?: 'GenreSet', name: string, id: string } | null }> };

export type GetQuizzesQueryVariables = Exact<{
  input: GetQuizzesInput;
}>;


export type GetQuizzesQuery = { __typename?: 'Query', getQuizzes: Array<{ __typename?: 'Quiz', id: string, question?: string | null, answer?: string | null, otherAnswer?: string | null, explanation?: string | null, source?: string | null, length: number, genre?: { __typename?: 'Genre', id: string, description?: string | null, name: string, ratio: number, color: string } | null }> };

export const GenreSetDataFragmentDoc = gql`
    fragment GenreSetData on GenreSet {
  id
  name
  description
}
    `;
export const GenreDataFragmentDoc = gql`
    fragment GenreData on Genre {
  id
  description
  name
  ratio
  color
}
    `;
export const QuizDataFragmentDoc = gql`
    fragment QuizData on Quiz {
  id
  question
  answer
  otherAnswer
  explanation
  source
  length
  genre {
    ...GenreData
  }
}
    ${GenreDataFragmentDoc}`;
export const QuizListDataFragmentDoc = gql`
    fragment QuizListData on QuizList {
  id
  name
  description
  quizCount
  goal
  genreSet {
    name
    id
  }
}
    `;
export const GetLoginUserDocument = gql`
    query GetLoginUser {
  loginUser {
    id
    image
    name
    userId
    email
  }
}
    `;

/**
 * __useGetLoginUserQuery__
 *
 * To run a query within a React component, call `useGetLoginUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoginUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoginUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoginUserQuery(baseOptions?: Apollo.QueryHookOptions<GetLoginUserQuery, GetLoginUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoginUserQuery, GetLoginUserQueryVariables>(GetLoginUserDocument, options);
      }
export function useGetLoginUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoginUserQuery, GetLoginUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoginUserQuery, GetLoginUserQueryVariables>(GetLoginUserDocument, options);
        }
export function useGetLoginUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLoginUserQuery, GetLoginUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLoginUserQuery, GetLoginUserQueryVariables>(GetLoginUserDocument, options);
        }
export type GetLoginUserQueryHookResult = ReturnType<typeof useGetLoginUserQuery>;
export type GetLoginUserLazyQueryHookResult = ReturnType<typeof useGetLoginUserLazyQuery>;
export type GetLoginUserSuspenseQueryHookResult = ReturnType<typeof useGetLoginUserSuspenseQuery>;
export type GetLoginUserQueryResult = Apollo.QueryResult<GetLoginUserQuery, GetLoginUserQueryVariables>;
export const UpdateLoginUserDocument = gql`
    mutation UpdateLoginUser($input: UpdateLoginUserInput!) {
  updateLoginUser(input: $input) {
    id
    image
    name
    userId
    email
  }
}
    `;
export type UpdateLoginUserMutationFn = Apollo.MutationFunction<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>;

/**
 * __useUpdateLoginUserMutation__
 *
 * To run a mutation, you first call `useUpdateLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoginUserMutation, { data, loading, error }] = useUpdateLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>(UpdateLoginUserDocument, options);
      }
export type UpdateLoginUserMutationHookResult = ReturnType<typeof useUpdateLoginUserMutation>;
export type UpdateLoginUserMutationResult = Apollo.MutationResult<UpdateLoginUserMutation>;
export type UpdateLoginUserMutationOptions = Apollo.BaseMutationOptions<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>;
export const CreateGenreDocument = gql`
    mutation CreateGenre($input: CreateGenreInput!) {
  createGenre(input: $input) {
    ...GenreData
  }
}
    ${GenreDataFragmentDoc}`;
export type CreateGenreMutationFn = Apollo.MutationFunction<CreateGenreMutation, CreateGenreMutationVariables>;

/**
 * __useCreateGenreMutation__
 *
 * To run a mutation, you first call `useCreateGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGenreMutation, { data, loading, error }] = useCreateGenreMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGenreMutation(baseOptions?: Apollo.MutationHookOptions<CreateGenreMutation, CreateGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGenreMutation, CreateGenreMutationVariables>(CreateGenreDocument, options);
      }
export type CreateGenreMutationHookResult = ReturnType<typeof useCreateGenreMutation>;
export type CreateGenreMutationResult = Apollo.MutationResult<CreateGenreMutation>;
export type CreateGenreMutationOptions = Apollo.BaseMutationOptions<CreateGenreMutation, CreateGenreMutationVariables>;
export const UpdateGenreDocument = gql`
    mutation UpdateGenre($input: UpdateGenreInput!) {
  updateGenre(input: $input) {
    ...GenreData
  }
}
    ${GenreDataFragmentDoc}`;
export type UpdateGenreMutationFn = Apollo.MutationFunction<UpdateGenreMutation, UpdateGenreMutationVariables>;

/**
 * __useUpdateGenreMutation__
 *
 * To run a mutation, you first call `useUpdateGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGenreMutation, { data, loading, error }] = useUpdateGenreMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGenreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGenreMutation, UpdateGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGenreMutation, UpdateGenreMutationVariables>(UpdateGenreDocument, options);
      }
export type UpdateGenreMutationHookResult = ReturnType<typeof useUpdateGenreMutation>;
export type UpdateGenreMutationResult = Apollo.MutationResult<UpdateGenreMutation>;
export type UpdateGenreMutationOptions = Apollo.BaseMutationOptions<UpdateGenreMutation, UpdateGenreMutationVariables>;
export const DeleteGenreDocument = gql`
    mutation DeleteGenre($input: DeleteGenreInput!) {
  deleteGenre(input: $input) {
    id
  }
}
    `;
export type DeleteGenreMutationFn = Apollo.MutationFunction<DeleteGenreMutation, DeleteGenreMutationVariables>;

/**
 * __useDeleteGenreMutation__
 *
 * To run a mutation, you first call `useDeleteGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGenreMutation, { data, loading, error }] = useDeleteGenreMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteGenreMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGenreMutation, DeleteGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGenreMutation, DeleteGenreMutationVariables>(DeleteGenreDocument, options);
      }
export type DeleteGenreMutationHookResult = ReturnType<typeof useDeleteGenreMutation>;
export type DeleteGenreMutationResult = Apollo.MutationResult<DeleteGenreMutation>;
export type DeleteGenreMutationOptions = Apollo.BaseMutationOptions<DeleteGenreMutation, DeleteGenreMutationVariables>;
export const CreateGenreSetDocument = gql`
    mutation CreateGenreSet($input: CreateGenreSetInput!) {
  createGenreSet(input: $input) {
    ...GenreSetData
  }
}
    ${GenreSetDataFragmentDoc}`;
export type CreateGenreSetMutationFn = Apollo.MutationFunction<CreateGenreSetMutation, CreateGenreSetMutationVariables>;

/**
 * __useCreateGenreSetMutation__
 *
 * To run a mutation, you first call `useCreateGenreSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGenreSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGenreSetMutation, { data, loading, error }] = useCreateGenreSetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGenreSetMutation(baseOptions?: Apollo.MutationHookOptions<CreateGenreSetMutation, CreateGenreSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGenreSetMutation, CreateGenreSetMutationVariables>(CreateGenreSetDocument, options);
      }
export type CreateGenreSetMutationHookResult = ReturnType<typeof useCreateGenreSetMutation>;
export type CreateGenreSetMutationResult = Apollo.MutationResult<CreateGenreSetMutation>;
export type CreateGenreSetMutationOptions = Apollo.BaseMutationOptions<CreateGenreSetMutation, CreateGenreSetMutationVariables>;
export const UpdateGenreSetDocument = gql`
    mutation UpdateGenreSet($input: UpdateGenreSetInput!) {
  updateGenreSet(input: $input) {
    ...GenreSetData
  }
}
    ${GenreSetDataFragmentDoc}`;
export type UpdateGenreSetMutationFn = Apollo.MutationFunction<UpdateGenreSetMutation, UpdateGenreSetMutationVariables>;

/**
 * __useUpdateGenreSetMutation__
 *
 * To run a mutation, you first call `useUpdateGenreSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGenreSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGenreSetMutation, { data, loading, error }] = useUpdateGenreSetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGenreSetMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGenreSetMutation, UpdateGenreSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGenreSetMutation, UpdateGenreSetMutationVariables>(UpdateGenreSetDocument, options);
      }
export type UpdateGenreSetMutationHookResult = ReturnType<typeof useUpdateGenreSetMutation>;
export type UpdateGenreSetMutationResult = Apollo.MutationResult<UpdateGenreSetMutation>;
export type UpdateGenreSetMutationOptions = Apollo.BaseMutationOptions<UpdateGenreSetMutation, UpdateGenreSetMutationVariables>;
export const DeleteGenreSetDocument = gql`
    mutation DeleteGenreSet($input: DeleteGenreSetInput!) {
  deleteGenreSet(input: $input) {
    id
  }
}
    `;
export type DeleteGenreSetMutationFn = Apollo.MutationFunction<DeleteGenreSetMutation, DeleteGenreSetMutationVariables>;

/**
 * __useDeleteGenreSetMutation__
 *
 * To run a mutation, you first call `useDeleteGenreSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGenreSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGenreSetMutation, { data, loading, error }] = useDeleteGenreSetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteGenreSetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGenreSetMutation, DeleteGenreSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGenreSetMutation, DeleteGenreSetMutationVariables>(DeleteGenreSetDocument, options);
      }
export type DeleteGenreSetMutationHookResult = ReturnType<typeof useDeleteGenreSetMutation>;
export type DeleteGenreSetMutationResult = Apollo.MutationResult<DeleteGenreSetMutation>;
export type DeleteGenreSetMutationOptions = Apollo.BaseMutationOptions<DeleteGenreSetMutation, DeleteGenreSetMutationVariables>;
export const CreateQuizDocument = gql`
    mutation CreateQuiz($input: CreateQuizInput!) {
  createQuiz(input: $input) {
    ...QuizData
  }
}
    ${QuizDataFragmentDoc}`;
export type CreateQuizMutationFn = Apollo.MutationFunction<CreateQuizMutation, CreateQuizMutationVariables>;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizMutation, CreateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuizMutation, CreateQuizMutationVariables>(CreateQuizDocument, options);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<CreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<CreateQuizMutation, CreateQuizMutationVariables>;
export const UpdateQuizDocument = gql`
    mutation UpdateQuiz($input: UpdateQuizInput!) {
  updateQuiz(input: $input) {
    ...QuizData
  }
}
    ${QuizDataFragmentDoc}`;
export type UpdateQuizMutationFn = Apollo.MutationFunction<UpdateQuizMutation, UpdateQuizMutationVariables>;

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateQuizMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizMutation, UpdateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuizMutation, UpdateQuizMutationVariables>(UpdateQuizDocument, options);
      }
export type UpdateQuizMutationHookResult = ReturnType<typeof useUpdateQuizMutation>;
export type UpdateQuizMutationResult = Apollo.MutationResult<UpdateQuizMutation>;
export type UpdateQuizMutationOptions = Apollo.BaseMutationOptions<UpdateQuizMutation, UpdateQuizMutationVariables>;
export const DeleteQuizDocument = gql`
    mutation DeleteQuiz($input: DeleteQuizInput!) {
  deleteQuiz(input: $input) {
    id
  }
}
    `;
export type DeleteQuizMutationFn = Apollo.MutationFunction<DeleteQuizMutation, DeleteQuizMutationVariables>;

/**
 * __useDeleteQuizMutation__
 *
 * To run a mutation, you first call `useDeleteQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizMutation, { data, loading, error }] = useDeleteQuizMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteQuizMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuizMutation, DeleteQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuizMutation, DeleteQuizMutationVariables>(DeleteQuizDocument, options);
      }
export type DeleteQuizMutationHookResult = ReturnType<typeof useDeleteQuizMutation>;
export type DeleteQuizMutationResult = Apollo.MutationResult<DeleteQuizMutation>;
export type DeleteQuizMutationOptions = Apollo.BaseMutationOptions<DeleteQuizMutation, DeleteQuizMutationVariables>;
export const CreateQuizListDocument = gql`
    mutation CreateQuizList($input: CreateQuizListInput!) {
  createQuizList(input: $input) {
    ...QuizListData
  }
}
    ${QuizListDataFragmentDoc}`;
export type CreateQuizListMutationFn = Apollo.MutationFunction<CreateQuizListMutation, CreateQuizListMutationVariables>;

/**
 * __useCreateQuizListMutation__
 *
 * To run a mutation, you first call `useCreateQuizListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizListMutation, { data, loading, error }] = useCreateQuizListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQuizListMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizListMutation, CreateQuizListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuizListMutation, CreateQuizListMutationVariables>(CreateQuizListDocument, options);
      }
export type CreateQuizListMutationHookResult = ReturnType<typeof useCreateQuizListMutation>;
export type CreateQuizListMutationResult = Apollo.MutationResult<CreateQuizListMutation>;
export type CreateQuizListMutationOptions = Apollo.BaseMutationOptions<CreateQuizListMutation, CreateQuizListMutationVariables>;
export const UpdateQuizListDocument = gql`
    mutation UpdateQuizList($input: UpdateQuizListInput!) {
  updateQuizList(input: $input) {
    ...QuizListData
  }
}
    ${QuizListDataFragmentDoc}`;
export type UpdateQuizListMutationFn = Apollo.MutationFunction<UpdateQuizListMutation, UpdateQuizListMutationVariables>;

/**
 * __useUpdateQuizListMutation__
 *
 * To run a mutation, you first call `useUpdateQuizListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizListMutation, { data, loading, error }] = useUpdateQuizListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateQuizListMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizListMutation, UpdateQuizListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuizListMutation, UpdateQuizListMutationVariables>(UpdateQuizListDocument, options);
      }
export type UpdateQuizListMutationHookResult = ReturnType<typeof useUpdateQuizListMutation>;
export type UpdateQuizListMutationResult = Apollo.MutationResult<UpdateQuizListMutation>;
export type UpdateQuizListMutationOptions = Apollo.BaseMutationOptions<UpdateQuizListMutation, UpdateQuizListMutationVariables>;
export const DeleteQuizListDocument = gql`
    mutation DeleteQuizList($input: DeleteQuizListInput!) {
  deleteQuizList(input: $input) {
    id
  }
}
    `;
export type DeleteQuizListMutationFn = Apollo.MutationFunction<DeleteQuizListMutation, DeleteQuizListMutationVariables>;

/**
 * __useDeleteQuizListMutation__
 *
 * To run a mutation, you first call `useDeleteQuizListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizListMutation, { data, loading, error }] = useDeleteQuizListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteQuizListMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuizListMutation, DeleteQuizListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuizListMutation, DeleteQuizListMutationVariables>(DeleteQuizListDocument, options);
      }
export type DeleteQuizListMutationHookResult = ReturnType<typeof useDeleteQuizListMutation>;
export type DeleteQuizListMutationResult = Apollo.MutationResult<DeleteQuizListMutation>;
export type DeleteQuizListMutationOptions = Apollo.BaseMutationOptions<DeleteQuizListMutation, DeleteQuizListMutationVariables>;
export const GetGenreDocument = gql`
    query GetGenre($input: GetGenreInput!) {
  getGenre(input: $input) {
    ...GenreData
  }
}
    ${GenreDataFragmentDoc}`;

/**
 * __useGetGenreQuery__
 *
 * To run a query within a React component, call `useGetGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGenreQuery(baseOptions: Apollo.QueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
      }
export function useGetGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
        }
export function useGetGenreSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
        }
export type GetGenreQueryHookResult = ReturnType<typeof useGetGenreQuery>;
export type GetGenreLazyQueryHookResult = ReturnType<typeof useGetGenreLazyQuery>;
export type GetGenreSuspenseQueryHookResult = ReturnType<typeof useGetGenreSuspenseQuery>;
export type GetGenreQueryResult = Apollo.QueryResult<GetGenreQuery, GetGenreQueryVariables>;
export const GetGenreDetailPageDataDocument = gql`
    query GetGenreDetailPageData($input: GetGenreSetInput!) {
  getGenreSet(input: $input) {
    ...GenreSetData
    genres {
      ...GenreData
      parentGenre {
        id
      }
      childGenres {
        id
      }
      createdAt
    }
  }
}
    ${GenreSetDataFragmentDoc}
${GenreDataFragmentDoc}`;

/**
 * __useGetGenreDetailPageDataQuery__
 *
 * To run a query within a React component, call `useGetGenreDetailPageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreDetailPageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreDetailPageDataQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGenreDetailPageDataQuery(baseOptions: Apollo.QueryHookOptions<GetGenreDetailPageDataQuery, GetGenreDetailPageDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreDetailPageDataQuery, GetGenreDetailPageDataQueryVariables>(GetGenreDetailPageDataDocument, options);
      }
export function useGetGenreDetailPageDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreDetailPageDataQuery, GetGenreDetailPageDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreDetailPageDataQuery, GetGenreDetailPageDataQueryVariables>(GetGenreDetailPageDataDocument, options);
        }
export function useGetGenreDetailPageDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGenreDetailPageDataQuery, GetGenreDetailPageDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenreDetailPageDataQuery, GetGenreDetailPageDataQueryVariables>(GetGenreDetailPageDataDocument, options);
        }
export type GetGenreDetailPageDataQueryHookResult = ReturnType<typeof useGetGenreDetailPageDataQuery>;
export type GetGenreDetailPageDataLazyQueryHookResult = ReturnType<typeof useGetGenreDetailPageDataLazyQuery>;
export type GetGenreDetailPageDataSuspenseQueryHookResult = ReturnType<typeof useGetGenreDetailPageDataSuspenseQuery>;
export type GetGenreDetailPageDataQueryResult = Apollo.QueryResult<GetGenreDetailPageDataQuery, GetGenreDetailPageDataQueryVariables>;
export const GetGenreSetDocument = gql`
    query GetGenreSet($input: GetGenreSetInput!) {
  getGenreSet(input: $input) {
    ...GenreSetData
  }
}
    ${GenreSetDataFragmentDoc}`;

/**
 * __useGetGenreSetQuery__
 *
 * To run a query within a React component, call `useGetGenreSetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreSetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreSetQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGenreSetQuery(baseOptions: Apollo.QueryHookOptions<GetGenreSetQuery, GetGenreSetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreSetQuery, GetGenreSetQueryVariables>(GetGenreSetDocument, options);
      }
export function useGetGenreSetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreSetQuery, GetGenreSetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreSetQuery, GetGenreSetQueryVariables>(GetGenreSetDocument, options);
        }
export function useGetGenreSetSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGenreSetQuery, GetGenreSetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenreSetQuery, GetGenreSetQueryVariables>(GetGenreSetDocument, options);
        }
export type GetGenreSetQueryHookResult = ReturnType<typeof useGetGenreSetQuery>;
export type GetGenreSetLazyQueryHookResult = ReturnType<typeof useGetGenreSetLazyQuery>;
export type GetGenreSetSuspenseQueryHookResult = ReturnType<typeof useGetGenreSetSuspenseQuery>;
export type GetGenreSetQueryResult = Apollo.QueryResult<GetGenreSetQuery, GetGenreSetQueryVariables>;
export const GetGenreSetsDocument = gql`
    query GetGenreSets {
  getGenreSets {
    ...GenreSetData
  }
}
    ${GenreSetDataFragmentDoc}`;

/**
 * __useGetGenreSetsQuery__
 *
 * To run a query within a React component, call `useGetGenreSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreSetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenreSetsQuery(baseOptions?: Apollo.QueryHookOptions<GetGenreSetsQuery, GetGenreSetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreSetsQuery, GetGenreSetsQueryVariables>(GetGenreSetsDocument, options);
      }
export function useGetGenreSetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreSetsQuery, GetGenreSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreSetsQuery, GetGenreSetsQueryVariables>(GetGenreSetsDocument, options);
        }
export function useGetGenreSetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGenreSetsQuery, GetGenreSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenreSetsQuery, GetGenreSetsQueryVariables>(GetGenreSetsDocument, options);
        }
export type GetGenreSetsQueryHookResult = ReturnType<typeof useGetGenreSetsQuery>;
export type GetGenreSetsLazyQueryHookResult = ReturnType<typeof useGetGenreSetsLazyQuery>;
export type GetGenreSetsSuspenseQueryHookResult = ReturnType<typeof useGetGenreSetsSuspenseQuery>;
export type GetGenreSetsQueryResult = Apollo.QueryResult<GetGenreSetsQuery, GetGenreSetsQueryVariables>;
export const GetGenresFromQuizListDocument = gql`
    query GetGenresFromQuizList($input: GetQuizListInput!) {
  getQuizList(input: $input) {
    genreSet {
      genres {
        ...GenreData
        parentGenre {
          id
        }
        childGenres {
          id
        }
      }
    }
  }
}
    ${GenreDataFragmentDoc}`;

/**
 * __useGetGenresFromQuizListQuery__
 *
 * To run a query within a React component, call `useGetGenresFromQuizListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresFromQuizListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresFromQuizListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGenresFromQuizListQuery(baseOptions: Apollo.QueryHookOptions<GetGenresFromQuizListQuery, GetGenresFromQuizListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenresFromQuizListQuery, GetGenresFromQuizListQueryVariables>(GetGenresFromQuizListDocument, options);
      }
export function useGetGenresFromQuizListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenresFromQuizListQuery, GetGenresFromQuizListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenresFromQuizListQuery, GetGenresFromQuizListQueryVariables>(GetGenresFromQuizListDocument, options);
        }
export function useGetGenresFromQuizListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGenresFromQuizListQuery, GetGenresFromQuizListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenresFromQuizListQuery, GetGenresFromQuizListQueryVariables>(GetGenresFromQuizListDocument, options);
        }
export type GetGenresFromQuizListQueryHookResult = ReturnType<typeof useGetGenresFromQuizListQuery>;
export type GetGenresFromQuizListLazyQueryHookResult = ReturnType<typeof useGetGenresFromQuizListLazyQuery>;
export type GetGenresFromQuizListSuspenseQueryHookResult = ReturnType<typeof useGetGenresFromQuizListSuspenseQuery>;
export type GetGenresFromQuizListQueryResult = Apollo.QueryResult<GetGenresFromQuizListQuery, GetGenresFromQuizListQueryVariables>;
export const GetQuizDocument = gql`
    query GetQuiz($input: GetQuizInput!) {
  getQuiz(input: $input) {
    ...QuizData
  }
}
    ${QuizDataFragmentDoc}`;

/**
 * __useGetQuizQuery__
 *
 * To run a query within a React component, call `useGetQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetQuizQuery(baseOptions: Apollo.QueryHookOptions<GetQuizQuery, GetQuizQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizQuery, GetQuizQueryVariables>(GetQuizDocument, options);
      }
export function useGetQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizQuery, GetQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizQuery, GetQuizQueryVariables>(GetQuizDocument, options);
        }
export function useGetQuizSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuizQuery, GetQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuizQuery, GetQuizQueryVariables>(GetQuizDocument, options);
        }
export type GetQuizQueryHookResult = ReturnType<typeof useGetQuizQuery>;
export type GetQuizLazyQueryHookResult = ReturnType<typeof useGetQuizLazyQuery>;
export type GetQuizSuspenseQueryHookResult = ReturnType<typeof useGetQuizSuspenseQuery>;
export type GetQuizQueryResult = Apollo.QueryResult<GetQuizQuery, GetQuizQueryVariables>;
export const GetQuizListDocument = gql`
    query GetQuizList($input: GetQuizListInput!) {
  getQuizList(input: $input) {
    ...QuizListData
  }
}
    ${QuizListDataFragmentDoc}`;

/**
 * __useGetQuizListQuery__
 *
 * To run a query within a React component, call `useGetQuizListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetQuizListQuery(baseOptions: Apollo.QueryHookOptions<GetQuizListQuery, GetQuizListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizListQuery, GetQuizListQueryVariables>(GetQuizListDocument, options);
      }
export function useGetQuizListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizListQuery, GetQuizListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizListQuery, GetQuizListQueryVariables>(GetQuizListDocument, options);
        }
export function useGetQuizListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuizListQuery, GetQuizListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuizListQuery, GetQuizListQueryVariables>(GetQuizListDocument, options);
        }
export type GetQuizListQueryHookResult = ReturnType<typeof useGetQuizListQuery>;
export type GetQuizListLazyQueryHookResult = ReturnType<typeof useGetQuizListLazyQuery>;
export type GetQuizListSuspenseQueryHookResult = ReturnType<typeof useGetQuizListSuspenseQuery>;
export type GetQuizListQueryResult = Apollo.QueryResult<GetQuizListQuery, GetQuizListQueryVariables>;
export const GetQuizListsDocument = gql`
    query GetQuizLists {
  getQuizLists {
    ...QuizListData
  }
}
    ${QuizListDataFragmentDoc}`;

/**
 * __useGetQuizListsQuery__
 *
 * To run a query within a React component, call `useGetQuizListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuizListsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuizListsQuery, GetQuizListsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizListsQuery, GetQuizListsQueryVariables>(GetQuizListsDocument, options);
      }
export function useGetQuizListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizListsQuery, GetQuizListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizListsQuery, GetQuizListsQueryVariables>(GetQuizListsDocument, options);
        }
export function useGetQuizListsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuizListsQuery, GetQuizListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuizListsQuery, GetQuizListsQueryVariables>(GetQuizListsDocument, options);
        }
export type GetQuizListsQueryHookResult = ReturnType<typeof useGetQuizListsQuery>;
export type GetQuizListsLazyQueryHookResult = ReturnType<typeof useGetQuizListsLazyQuery>;
export type GetQuizListsSuspenseQueryHookResult = ReturnType<typeof useGetQuizListsSuspenseQuery>;
export type GetQuizListsQueryResult = Apollo.QueryResult<GetQuizListsQuery, GetQuizListsQueryVariables>;
export const GetQuizzesDocument = gql`
    query GetQuizzes($input: GetQuizzesInput!) {
  getQuizzes(input: $input) {
    ...QuizData
  }
}
    ${QuizDataFragmentDoc}`;

/**
 * __useGetQuizzesQuery__
 *
 * To run a query within a React component, call `useGetQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizzesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetQuizzesQuery(baseOptions: Apollo.QueryHookOptions<GetQuizzesQuery, GetQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizzesQuery, GetQuizzesQueryVariables>(GetQuizzesDocument, options);
      }
export function useGetQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizzesQuery, GetQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizzesQuery, GetQuizzesQueryVariables>(GetQuizzesDocument, options);
        }
export function useGetQuizzesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuizzesQuery, GetQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuizzesQuery, GetQuizzesQueryVariables>(GetQuizzesDocument, options);
        }
export type GetQuizzesQueryHookResult = ReturnType<typeof useGetQuizzesQuery>;
export type GetQuizzesLazyQueryHookResult = ReturnType<typeof useGetQuizzesLazyQuery>;
export type GetQuizzesSuspenseQueryHookResult = ReturnType<typeof useGetQuizzesSuspenseQuery>;
export type GetQuizzesQueryResult = Apollo.QueryResult<GetQuizzesQuery, GetQuizzesQueryVariables>;