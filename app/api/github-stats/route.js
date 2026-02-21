import { NextResponse } from "next/server";

const GITHUB_USERNAME = "themechbro";
const MAX_REPO_SCAN = 500;

function getHeaders() {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-github-stats",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function fetchGitHubJson(url) {
  const response = await fetch(url, {
    headers: getHeaders(),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return response.json();
}

async function getTotalStars(username, publicRepos) {
  const pages = Math.max(
    1,
    Math.ceil(Math.min(publicRepos, MAX_REPO_SCAN) / 100),
  );
  let totalStars = 0;

  for (let page = 1; page <= pages; page += 1) {
    const repos = await fetchGitHubJson(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated`,
    );

    repos.forEach((repo) => {
      if (!repo.fork) {
        totalStars += repo.stargazers_count || 0;
      }
    });

    if (repos.length < 100) {
      break;
    }
  }

  return totalStars;
}

export async function GET() {
  try {
    const user = await fetchGitHubJson(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
    );
    const stars = await getTotalStars(GITHUB_USERNAME, user.public_repos || 0);

    return NextResponse.json({
      username: user.login,
      profileUrl: user.html_url,
      repos: user.public_repos || 0,
      followers: user.followers || 0,
      stars,
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to load GitHub stats right now.",
      },
      { status: 502 },
    );
  }
}
