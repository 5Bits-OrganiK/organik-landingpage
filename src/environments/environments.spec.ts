/**
 * Development environment configuration for the application.
 *
 * This file contains settings and variables specific to the development environment.
 * It is used to configure the application during development and testing.
 */
export const environment = {
  production: false,
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewsEndpointPath: '/top-headlines',
  newsProviderSourcesEndpointPath: '/top-headlines/sources',
  newsProviderApiKey: 'YOUR_NEWS_PROVIDER_API_KEY',
  logoProviderApiBaseUrl: 'https://img.logo.dev',
  logoProviderPublishableKey: 'YOUR_LOGO_PROVIDER_PUBLISHABLE_KEY'
};
