export const FactoryKeys = {
  crawls: {
    all: ['crawls'] as const,
    lists: () => [...FactoryKeys.crawls.all, 'list'] as const,
    list: (filters: string) => [...FactoryKeys.crawls.lists(), { filters }] as const,
    details: () => [...FactoryKeys.crawls.all, 'detail'] as const,
    detail: (id: number) => [...FactoryKeys.crawls.details(), id] as const,
  },
  compositions: {
    all: ['compositions'] as const,
    lists: () => [...FactoryKeys.compositions.all, 'list'] as const,
    list: (filters: string) => [...FactoryKeys.compositions.lists(), { filters }] as const,
    details: () => [...FactoryKeys.compositions.all, 'detail'] as const,
    detail: (id: number) => [...FactoryKeys.compositions.details(), id] as const,
  }
};