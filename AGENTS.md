# AGENTS.md

This is a Playwright + TypeScript QA repo (manual cases + UI automation), not a product application.

## Layout

- `pages/` — Page Object classes (`BasePage`, `LoginPage`). Locators and UI actions live here only.
- `tests/` — `*.spec.ts` files. Specs orchestrate page objects and assert outcomes.
- `.cursor/rules/` — standards (test-case format, Playwright locators/POM, PractiTest/Jira MCP).
- `Playwright-Test-Automation/` — older copy of the same stack. Prefer the **repo root** (`pages/`, `tests/`, `playwright.config.ts`) unless the user says otherwise.

## How to run tests

```bash
npx playwright test
npx playwright test tests/login.spec.ts
npx playwright test --grep @smoke
npx playwright show-report
```

Default `baseURL` is set in `playwright.config.ts` (practice-test-login).

## Working agreements

- Manual test cases: Markdown with `TC-[STORY]-[N]`, Type, Priority, Preconditions, Steps, Expected Result. Follow `.cursor/rules/test-case-generation.mdc`.
- Automation: follow `.cursor/rules/playwright-standards.mdc` (and `.cursorrules`). No locators, XPath, CSS-class selectors, or `waitForTimeout` in specs.
- Prefer `getByRole` / `getByLabel` / `getByPlaceholder` / `getByText`, then `getByTestId`.
- Use web-first `expect` (`toBeVisible`, `toHaveText`). Do not wrap `isVisible()` in a boolean `expect`.
- When publishing cases, follow `.cursor/rules/mcp-integrations.mdc` (PractiTest IDs + Jira comment). Do not invent ticket or tool IDs.

## Out of scope unless asked

- Do not commit, push, or open PRs unless the user asks.
- Do not guess missing acceptance criteria; list gaps instead.
