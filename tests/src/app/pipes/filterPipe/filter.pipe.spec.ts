import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  test('create an instance', () => {
    expect(filterPipe).toBeTruthy();
  });

  test('filterPipe should filter', () => {
    const items = [];

    items.push({ id: 1, name: 'Hans' });
    items.push({ id: 2, name: 'Franz' });
    items.push({ id: 3, name: 'Kurt' });
    items.push({ id: 4, name: 'Gustav' });

    const filtered = filterPipe.transform(items, 'name', 'Hans');

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.length).toBe(1);
  });

  test('filterPipe should filter two items', () => {
    const items = [];

    items.push({ id: 1, name: 'Hans' });
    items.push({ id: 2, name: 'Hans' });
    items.push({ id: 3, name: 'Kurt' });
    items.push({ id: 4, name: 'Gustav' });

    const filtered = filterPipe.transform(items, 'name', 'Hans');

    expect(filtered.length).toBe(2);

    expect(filtered).toMatchSnapshot();
  });
});
