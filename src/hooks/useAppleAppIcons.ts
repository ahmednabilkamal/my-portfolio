import { useEffect, useState } from 'react';
import type { Project } from '../data/portfolio';

type IconMap = Record<string, string>;

type LookupResponse = {
  resultCount?: number;
  results?: Array<{
    artworkUrl100?: string;
    artworkUrl512?: string;
    artworkUrl60?: string;
  }>;
};

function getIosStoreLink(project: Project) {
  return project.storeLinks?.find((link) => link.label === 'iOS')?.href;
}

function getAppIdFromUrl(url: string) {
  const match = url.match(/\/id(\d+)/);
  return match?.[1] ?? null;
}

function loadArtwork(appId: string) {
  return new Promise<string | null>((resolve) => {
    const callbackName = `__appleLookup_${appId}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement('script');
    const callbackStore = window as unknown as typeof window & Record<string, unknown>;

    const cleanup = () => {
      delete callbackStore[callbackName];
      script.remove();
    };

    // Apple documents script-tag requests for the Search API, which avoids
    // the browser CORS issue on static hosting.
    callbackStore[callbackName] = (response: LookupResponse) => {
      const result = response.results?.[0];
      cleanup();
      resolve(result?.artworkUrl512 ?? result?.artworkUrl100 ?? result?.artworkUrl60 ?? null);
    };

    script.src = `https://itunes.apple.com/lookup?id=${appId}&country=us&entity=software&callback=${callbackName}`;
    script.async = true;
    script.onerror = () => {
      cleanup();
      resolve(null);
    };

    document.body.appendChild(script);
  });
}

export function useAppleAppIcons(projects: Project[]) {
  const [iconMap, setIconMap] = useState<IconMap>({});

  useEffect(() => {
    let cancelled = false;

    const projectsWithIosLinks = projects
      .filter((project) => !project.logoUrl)
      .map((project) => {
        const iosLink = getIosStoreLink(project);
        const appId = iosLink ? getAppIdFromUrl(iosLink) : null;

        return appId ? { appId, projectName: project.name } : null;
      })
      .filter((item): item is { appId: string; projectName: string } => item !== null);

    if (!projectsWithIosLinks.length) {
      return;
    }

    void Promise.all(
      projectsWithIosLinks.map(async ({ appId, projectName }) => {
        const iconUrl = await loadArtwork(appId);
        return iconUrl ? { iconUrl, projectName } : null;
      })
    ).then((results) => {
      if (cancelled) {
        return;
      }

      const nextMap = results.reduce<IconMap>((accumulator, item) => {
        if (item) {
          accumulator[item.projectName] = item.iconUrl;
        }

        return accumulator;
      }, {});

      setIconMap(nextMap);
    });

    return () => {
      cancelled = true;
    };
  }, [projects]);

  return iconMap;
}
