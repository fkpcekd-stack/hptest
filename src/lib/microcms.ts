import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string;
  category?: string;
  eyecatch?: { url: string; width: number; height: number };
};

export type Service = {
  id: string;
  title: string;
  description: string;
  detail: string;
  icon?: string;
  image?: { url: string; width: number; height: number };
  order?: number;
};

export type Work = {
  id: string;
  title: string;
  description: string;
  content: string;
  category?: string;
  image?: { url: string; width: number; height: number };
  publishedAt: string;
  technologies?: string[];
};

export async function getNewsList(limit = 10) {
  try {
    const data = await client.getList<News>({
      endpoint: 'news',
      queries: { limit, orders: '-publishedAt' },
    });
    return data;
  } catch {
    return { contents: [], totalCount: 0, offset: 0, limit };
  }
}

export async function getNewsDetail(contentId: string) {
  return client.getListDetail<News>({ endpoint: 'news', contentId });
}

export async function getServicesList(limit = 10) {
  try {
    const data = await client.getList<Service>({
      endpoint: 'services',
      queries: { limit, orders: 'order' },
    });
    return data;
  } catch {
    return { contents: [], totalCount: 0, offset: 0, limit };
  }
}

export async function getWorksList(limit = 10) {
  try {
    const data = await client.getList<Work>({
      endpoint: 'works',
      queries: { limit, orders: '-publishedAt' },
    });
    return data;
  } catch {
    return { contents: [], totalCount: 0, offset: 0, limit };
  }
}

export async function getWorkDetail(contentId: string) {
  return client.getListDetail<Work>({ endpoint: 'works', contentId });
}
