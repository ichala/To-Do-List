import { add,DeleteItem } from "../modules/functions";


describe('Add and Delete Function', () => {
    test('add item to array', () => { 
        const localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn(),
            clear: jest.fn()
          };
          global.localStorage = localStorageMock;
        let array= []
        add(array, 'this is a test', false);
        console.log(array);
        expect(array).toEqual([{description: "this is a test", completed: false, index: 1}])
        expect(global.localStorage.setItem).toBeCalledWith("tasks",JSON.stringify(array))
     })
})