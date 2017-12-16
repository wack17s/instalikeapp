import { types } from 'mobx-state-tree';

export type ITodoStore = {
    users: object,
    todos: {
        values: () => [ITodoValues],
        set: (id: string | number, todo: ITodoStore) => [ITodoStore]
    },
    addTodo: (id: string | number, name: string) => {}
};

export type ITodoValues = {
    name: string,
    done: boolean,
    toggle: () => {},
    setName: (e: string) => {}
};

const Todo = types.model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false)
}).actions(self => {
    function setName(newName: string) {
        self.name = newName;
    }

    function toggle() {
        self.done = !self.done;
    }

    return { setName, toggle};
});

const User = types.model({
    name: types.optional(types.string, '')
});

const RootStore = types.model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {})
}).actions(self => {
    function addTodo(id: string, name: string) {
        self.todos.set(id, Todo.create({ name }));
    }

    return { addTodo };
});

export default RootStore.create({
    users: {} // users is required here because it's not marked as optional
});
