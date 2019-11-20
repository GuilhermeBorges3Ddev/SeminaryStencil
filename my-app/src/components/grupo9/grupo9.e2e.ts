import { newE2EPage } from '@stencil/core/testing';

describe('app-grupo9', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-grupo9></app-grupo9>');

    const element = await page.find('app-grupo9');
    expect(element).toHaveClass('hydrated');
  });
});
