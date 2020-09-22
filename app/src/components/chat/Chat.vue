<template>
  <div>
    <draggable-div class="col-11 drag-chat-container" v-for="room in rooms" v-bind:key="room">
      <template slot="header">{{room}}</template>
      <template slot="main">
        <ul>
          <li v-for="(entry, index) in chatHistory[room]" :key="index">{{entry}}</li>
        </ul>
      </template>
      <template slot="footer">
        <v-form action v-on:submit.prevent="sendMessage" class="input-container">
          <input v-model="message" placeholder="edit me" class="input-text" />
          <button class="input-button">Send</button>
        </v-form>
      </template>
    </draggable-div>
  </div>
</template>

<script>
import DraggableDiv from "../partials/DraggableDiv";
import moment from "moment";
export default {
  name: "Chat",
  components: {
    DraggableDiv,
  },
  data() {
    return {
      message: "",
      room: "lobby",
      rooms: ["first"],
      chatHistory: {},
      user: "",
    };
  },
  created() {
    this.$socket.on("nameResult", (result) => {
      let msg;
      if (result.success) {
        msg = `Name changed to ${result.name}.`;
      } else {
        msg = result.message;
      }
    });

    this.$socket.on("joinResult", (result) => {
      console.log("this is the result", result);
    });
    this.$socket.emit("rooms", (result) => {
      console.log("this is the result", result);
      this.rooms = result;
    });

    this.$socket.on("rooms", (rooms) => {
      console.log("this is the rooms", rooms);
      this.rooms = rooms;
    });
  },
  sockets: {
    connect() {
      console.log("sockets connected");
    },
    updateMessage(data) {
      this.chatHistory[data.room].push(`${data.user}  :   ${data.text}`);
    },
    joinResult(data) {
      console.log("this is data    ", data);
    },
    allRooms(rooms) {
      console.log("these are the rooms    ", rooms);
      this.rooms = rooms;
      this.chatHistory = Object.fromEntries(rooms.map((key) => [key, []]));
    },
  },
  methods: {
    sendMessage() {
      console.log("this    ", this);
      this.$socket.emit("new chat message", {
        text: this.message,
        room: this.room,
        user: this.user,
        time: moment().format("LLL"),
      });
      this.message = "";
    },
    changeRoom(room) {
      this.$socket.emit("join", {
        newRoom: this.room,
      });
    },
  },
  computed: {
    vueRooms() {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
<style>
.drag-chat-container {
  border: 1px solid black;
  resize: both;
  overflow: auto;
  position: relative;
}
.input-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 2px;
}
.input-text {
}
.input-button {
}
</style>