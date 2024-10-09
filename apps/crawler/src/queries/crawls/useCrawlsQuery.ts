import { useQuery } from "@tanstack/react-query"
import { FactoryKeys } from "queries/factory";
import { CrawlDataResponseDto } from "types/crawl-dto";

export const useCrawlsQuery = (initialData: CrawlDataResponseDto[] = []) => {
  return useQuery<CrawlDataResponseDto[]>({
    queryKey: FactoryKeys.crawls.lists(),
    queryFn: async () => {
      const response = await fetch("/api/crawls");
      const data = await response.json();
      return data;
    },
    initialData,
  });
}