import { fetchData } from './Api';

describe('fetchData', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Data fetched successfully' }),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('fetches data from the API', async () => {
    const data = await fetchData();

    expect(global.fetch).toHaveBeenCalledWith('https://data.cityofnewyork.us/resource/s3k6-pzi2.json');
    expect(data).toEqual({ message: 'Data fetched successfully'});});
});