import { useQuery } from "@tanstack/react-query"
import { FactoryKeys } from "queries/factory";
import { CompositionDataResponseDto } from "types/compositions";

export const useCompositionsQuery = (initialData: CompositionDataResponseDto[] = []) => {
  return useQuery<CompositionDataResponseDto[]>({
    queryKey: FactoryKeys.compositions.lists(),
    queryFn: async () => {
      const response = await fetch("/api/compositions");
      const data = await response.json();
      return data;
    },
    initialData,
  });
}