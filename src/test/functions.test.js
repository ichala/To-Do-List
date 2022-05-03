import { add, DeleteItem } from '../modules/functions.js';

describe('Add and Delete Function', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock;
  test('add item to array', () => {
    const array = [];
    add(array, 'this is a test', false);
    expect(array).toEqual([{ description: 'this is a test', completed: false, index: 1 }]);
    expect(global.localStorage.setItem).toBeCalledWith('tasks', JSON.stringify(array));
  });
  test('delete item from array', () => {
    const array = [];
    DeleteItem(array, 1);
    expect(array).toEqual([]);
    expect(global.localStorage.setItem).toBeCalledWith('tasks', JSON.stringify(array));
  });
});