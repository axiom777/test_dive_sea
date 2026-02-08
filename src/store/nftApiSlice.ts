import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { NFTItem, CoinGeckoNFT } from '../types';
import { getRandomImage, generateRandomBid, generateRandomEndTime } from '../utils/helpers';

export const nftApi = createApi({
  reducerPath: 'nftApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3',
  }),
  endpoints: (builder) => ({
    getNFTs: builder.query<NFTItem[], void>({
      query: () => '/nfts/list',
      transformResponse: (response: CoinGeckoNFT[]) => {
        // Transform data and add random values
        return response.slice(0, 10).map((item, index) => ({
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          image: getRandomImage(index),
          currentBid: generateRandomBid(),
          endTime: generateRandomEndTime()
        }));
      },
    }),
  }),
});

export const { useGetNFTsQuery } = nftApi;
