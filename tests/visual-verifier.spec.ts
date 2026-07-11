import { test, expect } from '@playwright/test'

test('UI Component Library Visual Verification', async ({ page }) => {
  // Navigate to the visual verifier page
  await page.goto('/ui-verifier')

  // Wait for fonts/rendering to stabilize
  await page.waitForLoadState('networkidle')

  // Take a full page screenshot and expect it to match the visual baseline
  await expect(page).toHaveScreenshot('component-catalog.png', {
    fullPage: true,
    animations: 'disabled',
    maxDiffPixelRatio: 0.05
  })
})
