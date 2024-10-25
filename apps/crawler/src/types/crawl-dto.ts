import type { CrawledData } from "@prisma/database/types";

export type GenericDataItem = Record<string, unknown>;
export type GenericDataList = GenericDataItem[];

export type SelectorRequestDto = {
  name: string;
  selector: string;
};

export type CrawlDataResponseDto = CrawledData;
