const io = require('socket.io')

let chat
let guestNumber = 1

const nickNames = {}
let namesUsed = []
const currentRoom = {}
const roomChatHistory = {}

const chatServer = {
    assignGuestName(socket, guestNumber, nickNames, namesUsed) {
        const name = `Guest_${guestNumber}`
        nickNames[socket.id] = name
        socket.emit('nameResult', {
            success: true,
            name
        })
        namesUsed.push(name)
        return guestNumber + 1
    },
    handleClientDisconnection(socket) {
        socket.on('disconnect', () => {
            const nameIdx = namesUsed.indexOf(nickNames[socket.id])
            delete nickNames[socket.id]
            namesUsed = [
                ...namesUsed.slice(0, nameIdx),
                ...namesUsed.slice(nameIdx + 1)
            ]
        })
    },
    listRooms(socket) {
        const rooms = Object.keys(socket.rooms)
        return rooms.filter(r => r !== socket.id)
    },
    handleMessageBroadcast(socket) {
        socket.on('new chat message', (message) => {
            roomChatHistory[message.room] ?
                roomChatHistory[message.room].push({
                    message: message.text
                }) :
                roomChatHistory[message.room] = [{
                    message: message.text
                }]

            console.log(roomChatHistory[message.room])
            console.log('this is message    ', message)

            chat.in(message.room).emit('updateMessage', {
                user: nickNames[socket.id],
                text: message.text,
                room: message.room,
                time: message.time
            })
        })
    },
    handleRoomJoining(socket) {
        socket.on('join', (room) => {
            socket.leave(currentRoom[socket.id])
            this.joinRoom(socket, room.newRoom)
        })
    },
    joinRoom(socket, room) {
        socket.join(room)
        currentRoom[socket.id] = room
        socket.emit('joinResult', {
            type: 'alert',
            text: 'new guest has joined',
            room
        })
        socket.to(room).emit('joinResult', {
            text: `${nickNames[socket.id]} has joined ${room}.`
        })

        chat.of('/').in(`${room}`).clients((err, sockets) => {
            if (err) return console.error(err)
            const usersInRoom = sockets.map(sId => nickNames[sId]).join(', ')
            const usersInRoomSummary = `Users currently in ${room}: ${usersInRoom}`
            socket.emit('message', {
                text: usersInRoomSummary
            })
        })
    },
    listen(server) {
        chat = io(server)

        chat.on('connection', (socket) => {

            guestNumber = this.assignGuestName(
                socket, guestNumber, nickNames, namesUsed
            )
            // joining the lobby room
            this.joinRoom(socket, 'lobby')
            // handling a new message being sent
            this.handleMessageBroadcast(socket, nickNames)
            // handles moving from one room to another
            this.handleRoomJoining(socket)
            socket.on('rooms', () => {
                let rooms = []
                for (let s in chat.sockets.sockets) {
                    rooms = rooms.concat(this.listRooms(chat.sockets.sockets[s]))
                }
                rooms = Array.from(new Set(rooms))
                socket.emit('allRooms', rooms)
            })

            this.handleClientDisconnection(socket)
        })
    }
}

module.exports = chatServer