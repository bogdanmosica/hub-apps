export type GenericDataItem = Record<string, unknown>;
export type GenericDataList = GenericDataItem[];

export type SelectorRequestDto = {
  name: string;
  selector: string;
};

export type CrawlDataResponseDto = {
  id: number;
  url: string;
  parsedData: GenericDataList;
  selectors: SelectorRequestDto[];
  compositionIds?: number[];
  createdAt: string;
  updatedAt: string;
  labels: string[];
  userId: string;
};
