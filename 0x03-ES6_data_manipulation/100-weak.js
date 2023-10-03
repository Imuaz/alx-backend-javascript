export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const queryNo = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, queryNo);
    if (queryNo >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
