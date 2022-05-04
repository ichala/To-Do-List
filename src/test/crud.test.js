import { editItem } from '../modules/functions.js';
import Interactive from '../modules/Interactive.js';

describe('Delete All , Edit and Update', () => {
  test('Delete All Completed', () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;
    const InteractiveData = new Interactive();

    const array = [
      { description: 'this is a test', completed: true, index: 1 },
      { description: 'this is a test 2', completed: false, index: 2 },
    ];
    InteractiveData.DeleteCompleted(array);
    expect(global.localStorage.setItem).toBeCalledWith(
      'tasks',
      JSON.stringify([
        { description: 'this is a test 2', completed: false, index: 2 },
      ]),
    );
  });
  test('Update when Checked', () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;
    const InteractiveData = new Interactive();
    const array = [
      { description: 'this is a test', completed: true, index: 1 },
      { description: 'this is a test 2', completed: false, index: 2 },
    ];
    InteractiveData.UpdateCompleted(array, 2);
    expect(global.localStorage.setItem).toBeCalledWith(
      'tasks',
      JSON.stringify([
        { description: 'this is a test', completed: true, index: 1 },
        { description: 'this is a test 2', completed: true, index: 2 },
      ]),
    );
  });
  test('Edit item', () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;
    const array = [
      { description: 'this is a test', completed: true, index: 1 },
      { description: 'this is a test 2', completed: false, index: 2 },
    ];
    editItem(array, '1', 'THIS IS AN UPDATED TASK');
    expect(global.localStorage.setItem).toBeCalledWith(
      'tasks',
      JSON.stringify([
        { description: 'THIS IS AN UPDATED TASK', completed: true, index: 1 },
        { description: 'this is a test 2', completed: false, index: 2 },
      ]),
    );
  });
});
