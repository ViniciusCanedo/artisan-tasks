import { test, expect } from '@playwright/test'

test('homepage loads and displays core elements', async ({ page }) => {
  await page.goto('/')

  // Check if global components are loaded
  const button = page.locator('button')
  await expect(button).toHaveText('Scaffolded Component')
})
