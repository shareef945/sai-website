export const DIRECTUS_URL = "https://cms.saitechnology.co";

export const getDirectusImageUrl = (fileId: string | null | undefined): string => {
  if (!fileId) return "/placeholder.svg?height=600&width=800";
  if (fileId.startsWith('http')) return fileId;
  return `${DIRECTUS_URL}/assets/${fileId}`;
};