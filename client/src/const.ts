export function getLoginUrl(): string {
  const appId = import.meta.env.VITE_APP_ID || '';
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || 'https://oauth.manus.im';
  const currentUrl = window.location.href;
  
  return `${oauthPortalUrl}/${appId}?redirect_uri=${encodeURIComponent(currentUrl)}`;
}
