export const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました");
  }
  const json = await response.json();
  return json;
};