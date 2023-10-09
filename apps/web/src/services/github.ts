export async function fetchFileFromRepo(
  repo: string,
  path: string
): Promise<string> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}`
  );
  const data = await response.json();
  if (data.content) {
    return atob(data.content); // Decoding from base64
  }
  throw new Error('Failed to fetch content');
}
