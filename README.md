# Angular Testing

Example projects that show how to test Angular applications with [Vitest](https://vitest.dev/). Every spec follows the **Arrange – Act – Assert** pattern, so each test reads the same way.

The repository has two independent Angular 21 projects:

| Project | Test runner | Environment | What it shows |
| --- | --- | --- | --- |
| [`vitest/`](./vitest) | Angular CLI (`@angular/build:unit-test`) + Vitest | jsdom | Unit, shallow and integration tests for pipes, services, components, directives, forms and NgRx |
| [`vitest-browser/`](./vitest-browser) | Vitest via [`@analogjs/vitest-angular`](https://analogjs.org/docs/features/testing/vitest) | Real Chromium (Playwright) | Component tests in Vitest browser mode, using the `page` locator API |

## Prerequisites

- Node.js (a version supported by Angular 21)
- npm

## Getting started

Each project has its own dependencies. Install and run them separately:

```bash
cd vitest            # or: cd vitest-browser
npm install
npm start            # dev server at http://localhost:4200
```

## `vitest/` – unit and integration tests

Run the tests:

```bash
npm test                 # ng test
npm run test:coverage    # coverage report + Vitest UI
```

The examples live in numbered folders under `src/app`, roughly ordered from simple to advanced:

| Folder | Topic |
| --- | --- |
| `01_pipes` | Testing a pure pipe (`CapitalizePipe`) |
| `02_services/01_synchron` | Synchronous service tests, including snapshot testing |
| `02_services/02_asynchron` | Testing a service that uses `HttpClient`, with a mocked client |
| `03_components/01_unit` | Testing component classes in isolation |
| `03_components/02_shallow` | Shallow rendering: overriding child imports with `CUSTOM_ELEMENTS_SCHEMA`, inline templates |
| `03_components/03_integration` | Rendering parent and child components together |
| `03_components/04_signals` | Components and services built on signals |
| `04_directives` | Testing an attribute directive (`HighlightDirective`) through a host component |
| `05_forms` | Signal Forms: a custom validator schema and a debounced search form, tested through the DOM with fake timers |
| `06_state_management` | NgRx: reducers, selectors, effects and the related service |

### Auto-mocking helper

[`src/app/testing/auto-mock.ts`](./vitest/src/app/testing/auto-mock.ts) creates a mock from a class, replacing every method with `vi.fn()`. Use `provideMock(...)` to register it in `TestBed`:

```ts
TestBed.configureTestingModule({
  providers: [provideMock(HttpClient)],
});
```

## `vitest-browser/` – Vitest browser mode

These tests run in a real Chromium instance through Playwright instead of jsdom. Components are rendered with `TestBed` and driven through Vitest's `page` API:

```ts
TestBed.createComponent(TimeTracker);

await page.getByRole('button').click();

await expect.element(page.getByTestId('running-info')).toHaveTextContent('Running...');
```

Run the tests:

```bash
npx playwright install chromium   # first run only
npm test                          # npx vitest
npm run test:coverage             # with coverage
```

Configuration lives in [`vitest.config.ts`](./vitest-browser/vitest.config.ts) and [`src/test-setup.ts`](./vitest-browser/src/test-setup.ts). The browser runs with `headless: false` by default, so you can watch the tests run. Set it to `true` for CI.

## Tech stack

- Angular 21
- Vitest 4 (with `@vitest/coverage-v8`, `@vitest/ui`, `@vitest/browser-playwright`)
- NgRx 21
- Angular Material (in `vitest-browser`)
- TypeScript 5.9
