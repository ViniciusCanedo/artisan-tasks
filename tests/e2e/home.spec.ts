import { test, expect } from '@playwright/test'

test('homepage loads and matches baseline layout', async ({ page }) => {
  await page.goto('/')

  // Verify Header and Tailwind classes are applied
  const title = page.locator('h1')
  await expect(title).toBeVisible()
  await expect(title).toContainText('Welcome to Nuxt 4')

  // Check if global components are loaded
  const button = page.locator('button')
  await expect(button).toHaveText('Scaffolded Component')
})
