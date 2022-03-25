/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API_URL;

// Client method to query documents from the Prismic repo
export const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req));

export const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    return `/page/${doc.uid}`;
  }

  // Backup for all other types
  return '/';
};

export const hrefResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    return `/page/[handle]`;
  }

  // Backup for all other types
  return '/';
};

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
  return {
    ...reqOption,
    ...accessTokenOption
  };
};
