const users = {
    1: {
        id: "1",
        firstname: "Ben",
        lastname: "Kemp",
        messageIds: [1]
    },
    2: {
        id: "2",
        firstname: "Edgar",
        lastname: "Davids",
        messageIds: [2]
    },
    3: {
        id: "3",
        firstname: "Frank",
        lastname: "Lampard",
        messageIds: [3]
    }
};
const messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1'
    },
    2: {
        id: '2',
        text: 'Bye World',
        userId: '2'
    },
    3: {
        id: '3',
        text: 'Another World',
        userId: '3'
    },
};

module.exports = { users, messages}
