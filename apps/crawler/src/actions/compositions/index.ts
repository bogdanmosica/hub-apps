import db from '@prisma/database';

export type CompositionData = {
  name: string;
  videoUrl: string;
  musicUrl: string;
  orientation?: string;
  animation?: string;
  volume?: number;
};

export async function getUserCompositions(userId: string) {
  return await db.composition.findMany({
    where: { userId },
  });
}

export async function createComposition(userId: string, data: CompositionData) {
  return await db.composition.create({
    data: {
      userId,
      ...data,
    },
  });
}

export async function getCompositionById(
  userId: string,
  compositionId: string
) {
  return await db.composition.findFirst({
    where: {
      id: compositionId,
      userId,
    },
  });
}

export async function updateComposition(
  userId: string,
  compositionId: string,
  data: CompositionData
) {
  const result = await db.composition.updateMany({
    where: {
      id: compositionId,
      userId,
    },
    data,
  });
  return result.count;
}

export async function deleteComposition(userId: string, compositionId: string) {
  const result = await db.composition.deleteMany({
    where: {
      id: compositionId,
      userId,
    },
  });
  return result.count;
}
