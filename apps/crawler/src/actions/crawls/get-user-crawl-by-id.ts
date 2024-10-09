import db from '@prisma/database';
import { CrawlDataResponseDto } from 'types/crawl-dto';

type GetUserCrawlByIdArgs = {
  userId: string;
  id: number;
};
export async function getUserCrawlById({ userId, id }: GetUserCrawlByIdArgs) {
  try {
    const crawl = await db.crawledData.findFirst({
      where: { userId, id },
    });
    return crawl as unknown as CrawlDataResponseDto;
  } catch (error) {
    throw error;
  }
}
