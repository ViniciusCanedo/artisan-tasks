import { test, expect } from '@playwright/test'

test.describe('Atelier Design System Page', () => {
  test.beforeEach(async ({ page }) => {
    // Capture browser console errors
    page.on('pageerror', (err) => {
      console.log('BROWSER EXCEPTION:', err.message)
    })

    // Navigate to the design system showcase page
    await page.goto('/design-system')
  })

  test('should render headers, typography, and color palette tokens', async ({ page }) => {
    // Check main header
    const mainHeader = page.locator('header h2')
    await expect(mainHeader).toBeVisible()
    await expect(mainHeader).toContainText('Design System')

    // Check tokens section
    const tokensSection = page.locator('#tokens')
    await expect(tokensSection).toBeVisible()

    // Check typography section
    const typographyHeader = page.locator('#typography h1')
    await expect(typographyHeader).toContainText('Project Overview')

    // Verify background offwhite is loaded on the main container
    const contentWrapper = page.locator('.min-h-screen').first()
    await expect(contentWrapper).toHaveClass(/bg-offwhite/)
  })

  test('should open and close the New Task modal on desktop', async ({ page }) => {
    // Ensure modal is hidden initially
    const modal = page.locator('#task-modal')
    await expect(modal).not.toBeVisible()

    // Wait for hydration
    await page.waitForTimeout(1000)

    // Click desktop New Task button
    const newTaskBtn = page.locator('#btn-new-task-desktop')
    await expect(newTaskBtn).toBeVisible()
    await newTaskBtn.click()

    // Modal should become visible
    await expect(modal).toBeVisible()
    const modalTitle = modal.locator('h3')
    await expect(modalTitle).toContainText('New Task')

    // Verify task title input and focus
    const inputTitle = modal.locator('#input-task-title')
    await expect(inputTitle).toBeVisible()

    // Click Cancel to close modal
    const cancelBtn = modal.locator('#btn-cancel-modal')
    await cancelBtn.click()

    // Modal should be hidden again
    await expect(modal).not.toBeVisible()
  })

  test('should toggle mobile bottom navigation and open modal', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 })

    // Desktop sidebar should be hidden
    const sidebar = page.locator('aside')
    await expect(sidebar).not.toBeVisible()

    // Mobile nav should be visible
    const mobileNav = page.locator('nav.md\\:hidden')
    await expect(mobileNav).toBeVisible()

    // Wait for hydration
    await page.waitForTimeout(1000)

    // Click mobile floating button to open modal
    const mobileNewTaskBtn = page.locator('#btn-new-task-mobile')
    await expect(mobileNewTaskBtn).toBeVisible()
    await mobileNewTaskBtn.click()

    // Modal should open
    const modal = page.locator('#task-modal')
    await expect(modal).toBeVisible()

    // Close using close button
    const closeBtn = modal.locator('#btn-close-modal')
    await closeBtn.click()

    // Modal should close
    await expect(modal).not.toBeVisible()
  })
})
