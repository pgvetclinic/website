export async function fetcher(url: RequestInfo) {
  const res = await fetch(url);
  return await res.json();
}
