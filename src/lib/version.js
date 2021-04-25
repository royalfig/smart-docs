const API = "https://api.github.com/repos/royalfig/smart/releases/latest";

export async function getLatestVersion() {
  const res = await fetch(API);
  const { tag_name, assets } = await res.json();
  return { version: tag_name, url: assets[0].browser_download_url };
}
