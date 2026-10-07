import { test, expect } from '@playwright/test';

test('carga la Home con el carrusel', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav').getByRole('img', { name: 'Hunter Bar' }).first()).toBeVisible();
});

test('el link MENU del navbar abre la carta en una pestaña nueva', async ({ page }) => {
  await page.goto('/');
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'MENU' }).click(),
  ]);
  await expect.poll(() => popup.url()).toContain('1NfvrohXV2r_EUp1mX3RLSzp5cF1USX0H');
});

test('navega a Nosotros desde el navbar', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'NOSOTROS' }).click();
  await expect(page.getByText('cazar la noche')).toBeVisible();
});

test('el navbar ya no tiene el botón Cómo llegar', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav').getByText('Cómo llegar')).toHaveCount(0);
});

test('la dirección de Ubicación abre Google Maps', async ({ page }) => {
  await page.goto('/');
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#ubicacion').getByRole('link', { name: /Paz 497/ }).click(),
  ]);
  await expect.poll(() => decodeURIComponent(popup.url())).toContain('Paz 497');
});

test('la sección Las noches en Hunter muestra la grilla de fotos', async ({ page }) => {
  await page.goto('/');
  const ustedes = page.locator('#ustedes');
  await expect(ustedes.getByText('Las noches')).toBeVisible();
  await expect(ustedes.locator('img')).toHaveCount(3);
});

test('el botón Ver la Carta del carrusel abre la carta en una pestaña nueva', async ({ page }) => {
  await page.goto('/');
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Ver la Carta' }).first().click(),
  ]);
  await expect.poll(() => popup.url()).toContain('1NfvrohXV2r_EUp1mX3RLSzp5cF1USX0H');
});
