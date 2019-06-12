export const settings = {
    columnCreatorText: 'Add new column',
    cardCreatorText: 'Add new card',
    creator: {
        buttonOK: 'OK',
        buttonCancel: 'Cancel',
        defaultText: 'Add new item',
    },
    defaultListDescription: '<p>I can do all the things!!!</p>',
    defaultColumnIcon: 'list-alt',
    search: {
        defaultText: 'Search',
        icon: 'box',
    }
};

export const pageContents = {
    title: 'My first React app',
    subtitle: 'A simple to-do app, with lists, columns and cards',
};


const lists = [
    {
        id: 'list-1',
        title: 'Things to do <sup>soon!</sup>',
        description: 'Interesting things I want to check out!',
        image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    },
];

export const hero =
    {
        id: 'list-1',
        title: 'Things to do <sup>soon!</sup>',
        description: 'Interesting things I want to check out!',
        image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    }
;

const columns = [
    {
        id: 'column-1',
        listId: 'list-1',
        title: 'Books',
        icon: 'book',
    },
    {
        id: 'column-2',
        listId: 'list-1',
        title: 'Movies',
        icon: 'film',
    },
    {
        id: 'column-3',
        listId: 'list-1',
        title: 'Games',
        icon: 'gamepad',
    },
    {
        id: 'column-4',
        listId: 'list-2',
        title: 'Strange column',
        icon: 'question',
    },
];

const cards = [
    {
        id: 'card-1',
        columnId: 'column-1',
        title: 'This Is Going to Hurt',
    },
    {
        id: 'card-2',
        columnId: 'column-1',
        title: 'Interpreter of Maladies',
    },
    {
        id: 'card-3',
        columnId: 'column-2',
        title: 'Harry Potter',
    },
    {
        id: 'card-4',
        columnId: 'column-2',
        title: 'Star Wars',
    },
    {
        id: 'card-5',
        columnId: 'column-3',
        title: 'The Witcher',
    },
    {
        id: 'card-6',
        columnId: 'column-3',
        title: 'Skyrim',
    },
];

export const infos = {
    title: 'This is a placeholder for INFO',
    image: 'https://images.pexels.com/photos/929676/pexels-photo-929676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
        'culpa qui officia deserunt mollit anim id est laborum.',

}

export const FAQs = {
    title: 'This is a placeholder for FAQ',
    image: 'https://images.pexels.com/photos/36485/ladybug-flight-beetle-insect.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
        'culpa qui officia deserunt mollit anim id est laborum.',

}

const initialStoreData = {
    app: {...pageContents},
    lists: [...lists],
    columns: [...columns],
    cards: [...cards],
};

export default initialStoreData;