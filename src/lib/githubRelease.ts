// src/lib/githubRelease.ts
export type GitHubAsset = {
  name: string;
  browser_download_url: string;
};

export type GitHubRelease = {
  tagName: string;
  assets: GitHubAsset[];
};

let cachedRelease: GitHubRelease | null = null;
let inFlight: Promise<GitHubRelease> | null = null;

export async function getLatestRelease(): Promise<GitHubRelease> {
  if (cachedRelease) return cachedRelease;
  if (inFlight) return inFlight;

  inFlight = (async () => {
    const res = await fetch(
      'https://api.github.com/repos/mcgrizzz/Yomine/releases/latest'
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch latest release: ${res.status}`);
    }

    const data = await res.json();

    const release: GitHubRelease = {
      tagName: data.tag_name ?? '',
      assets: (data.assets ?? []) as GitHubAsset[],
    };

    cachedRelease = release;
    return release;
  })();

  return inFlight;
}
