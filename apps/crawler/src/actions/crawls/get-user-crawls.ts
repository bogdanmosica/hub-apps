import db from '@prisma/database';
import { CrawlDataResponseDto } from 'types/crawl-dto';

export async function getUserCrawls(userId: string) {
  try {
    const crawls = await db.crawledData.findMany({
      where: { userId },
    });
    return crawls as unknown as CrawlDataResponseDto[];
  } catch (error) {
    throw error;
  }
}