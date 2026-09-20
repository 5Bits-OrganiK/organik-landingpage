import {environment} from './environments';

describe('environment', () => {
  it('should expose production configuration', () => {
    expect(environment.production).toBe(true);
    expect(environment.newsProviderApiBaseUrl).toBeTruthy();
    expect(environment.logoProviderApiBaseUrl).toBeTruthy();
  });
});
