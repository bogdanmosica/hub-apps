export const FactoryKeys = {
  crawls: {
    all: ['crawls'] as const,
    lists: () => [...FactoryKeys.crawls.all, 'list'] as const,
    list: (filters: string) => [...FactoryKeys.crawls.lists(), { filters }] as const,
    details: () => [...FactoryKeys.crawls.all, 'detail'] as const,
    detail: (id: number) => [...FactoryKeys.crawls.details(), id] as const,
  }
};