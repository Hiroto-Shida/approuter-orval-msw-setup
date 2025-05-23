/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * Colors API
 * 色API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import type { ColorListResponse, ErrorResponse } from "../schemas";

import { customFetch } from "../customFetch";

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

/**
 * 色を含む配列を取得します
 * @summary 色の一覧を返す
 */
export const getGetApiColorsUrl = () => {
  return `/api/colors`;
};

export const getApiColors = async (
  options?: RequestInit
): Promise<ColorListResponse> => {
  return customFetch<ColorListResponse>(getGetApiColorsUrl(), {
    ...options,
    method: "GET",
  });
};

export const getGetApiColorsQueryKey = () => {
  return [`/api/colors`] as const;
};

export const getGetApiColorsQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiColors>>,
  TError = ErrorResponse
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiColors>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiColorsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiColors>>> = ({
    signal,
  }) => getApiColors({ signal, ...requestOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiColors>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetApiColorsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiColors>>
>;
export type GetApiColorsQueryError = ErrorResponse;

/**
 * @summary 色の一覧を返す
 */

export function useGetApiColors<
  TData = Awaited<ReturnType<typeof getApiColors>>,
  TError = ErrorResponse
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiColors>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetApiColorsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
