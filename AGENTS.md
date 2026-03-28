# AGENTS.md
Guidance for agentic coding tools in `D:\CodeThue\Landing-page-fun-bug`.

## Cursor/Copilot Rule Files
Checked paths requested by user:
- `.cursor/rules/`: not present
- `.cursorrules`: not present
- `.github/copilot-instructions.md`: not present
If these appear later, treat them as higher-priority local rules and merge them here.

## Project Snapshot
- React 19 + Vite 6 + Tailwind CSS 4
- JavaScript/JSX codebase (no strict TS pipeline)
- ESLint flat config
- Jest + Testing Library + jsdom
- Playwright e2e + GitHub Actions CI

## Install and Run
Install deps:
```bash
npm install
```
Run dev server:
```bash
npm run dev
```
Build production output:
```bash
npm run build
```
Preview build locally:
```bash
npm run preview
```
Run linter:
```bash
npm run lint
```

## Test Commands (Important)
Run all Jest tests:
```bash
npm run test
```
Run a single Jest file:
```bash
npm run test -- tests/unit/Hero.test.jsx
```
Run a single Jest test by name:
```bash
npm run test -- -t "renders call-to-action buttons"
```
Run one file + one name filter:
```bash
npm run test -- tests/unit/Hero.test.jsx -t "changes background image automatically over time"
```
Common Jest debug flags:
```bash
npm run test -- --watch
npm run test -- --runInBand
npm run test -- --coverage
```
Run all Playwright tests:
```bash
npm run test:e2e
```
Run a single Playwright spec:
```bash
npx playwright test tests/e2e/testProjectList.spec.js
```
Run Playwright by test title:
```bash
npx playwright test -g "Dự án"
```
Playwright interactive/debug:
```bash
npx playwright test --headed
npx playwright test --debug
```
Note: `playwright.config.js` sets `baseURL` to `https://www.funbug.xyz/`.
E2E suite currently validates deployed-site behavior, not local Vite by default.

## CI and Done Criteria
Workflow in `.github/workflows/deploy.yml`:
- Non-`main`: unit tests, e2e tests, lint, and build
- `main`: build then deploy `dist/` to S3
Minimum local gate before PR:
```bash
npm run lint && npm run test && npm run build
```
Also run e2e when navigation or integrated UX behavior changes:
```bash
npm run test:e2e
```

## Repository Map
- `src/main.jsx`: bootstrap
- `src/App.jsx`: page composition
- `src/components/*.jsx`: components/sections
- `src/data/*.js`: content/data models
- `src/test/setup.js`: Jest setup and polyfills
- `tests/unit/`: unit tests
- `tests/e2e/`: e2e specs
- `dist/`: generated artifacts; do not hand-edit

## Code Style Guidelines

### Imports
- Keep imports at file top.
- Prefer grouping order:
  1) external packages,
  2) internal modules,
  3) side-effect imports (CSS).
- Keep one module per import statement.
- Follow existing relative-path patterns in nearby files.

### Formatting
- Match local style when editing existing files.
- For new files, prefer: single quotes, semicolons, 2-space indentation, trailing commas.
- Keep JSX readable; wrap long prop lists and nested expressions.
- Prefer utility classes/CSS files over large inline style blocks.

### Types and Contracts
- No strict TypeScript setup exists; code is JS-first.
- Treat structures in `src/data/*.js` as contracts.
- If data shape changes, update all component consumers and tests in same change.
- Add light JSDoc when function input/output is not obvious.

### Naming
- Variables/functions: camelCase.
- Components and component files: PascalCase.
- True constants only: UPPER_SNAKE_CASE.
- Data modules: camelCase with `Data` suffix.
- Unit tests: `*.test.jsx`; e2e tests: `*.spec.js`.

### React Patterns
- Use function components with hooks.
- Keep state local unless shared behavior requires lifting.
- Cleanup required for effects (timers, listeners, subscriptions).
- Avoid side effects during render.
- Keep render logic deterministic and resilient to missing optional data.

### Error Handling
- Guard before reading deep or optional properties.
- In UI flows, prefer graceful fallback states over throwing in render.
- Wrap async logic with `try/catch`; return safe user-facing behavior on failure.
- Do not silently swallow errors; preserve context for debugging.

### Testing Practices
- Prefer Testing Library queries by role/name/text.
- Test user-visible behavior instead of implementation details.
- Keep tests focused and independent.
- Use fake timers only for time-based behavior and clean up when needed.
- If changing anchors/labels/IDs, update both unit and e2e coverage.

### Lint Notes
- ESLint includes `@eslint/js` recommended rules.
- ESLint includes `react-hooks` recommended rules.
- `no-unused-vars` is enforced (ignore pattern `^[A-Z_]`).
- `react-refresh/only-export-components` is warning-level.
- Run `npm run lint` after meaningful edits.

## Agent Checklist
- Make minimal, targeted edits; avoid broad refactors unless requested.
- Do not manually edit generated output in `dist/`.
- Preserve Vietnamese product copy unless task explicitly requires copy change.
- Validate with `npm run lint`, relevant tests, and `npm run build`.
- Keep this file up to date if scripts/conventions change.
