import { editItem } from "../modules/functions.js";
import Interactive from "../modules/Interactive.js";

describe('Delete All , Edit and Update', () => {
    test('Delete All Completed', () => { 
        const localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn(),
            clear: jest.fn()
          };
          global.localStorage = localStorageMock;
        let InteractiveData = new Interactive();

        let array= [{description: "this is a test", completed: true, index: 1},{description: "this is a test 2", completed: false, index: 2}]
        InteractiveData.DeleteCompleted(array);
        expect(global.localStorage.setItem).toBeCalledWith("tasks",JSON.stringify([{description: "this is a test 2", completed: false, index: 2}]))
     })
})
