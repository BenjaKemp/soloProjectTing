const request = require("supertest");
const app = require("../../app.js");
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
// const { UserClass } = require('../../controllers') 

let mongoServer;
const userData = {
    firstName: "Lord",
    lastName: "Wonky",
    email: "LordWonky@wonktowers.com",
    password: "ButteryTom",
    username: "Wonzilla"
};

// console.log('UserClass     ', UserClass)

beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    console.log('mongoUri    ', mongoUri)
    await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

    it('create & save user successfully', async () => {
        const {body} = await request(app)
            .post("/signup")
            .send(userData);

            expect(body._id).toBeDefined();
            expect(body.token).toBeDefined();
            expect(body.username).toBe("Wonzilla");
    });

    it('create user without required password should fail', async () => {
        const response = await request(app)
            .post("/signup")
            .send({
                firstName: "Breaky",
                lastName: "BreakBreak",
                email: "LordWonky@noWayJjasoe.com",
            });
            const error = JSON.parse(response.error.text)
            expect(response.statusCode).toBe(422);
            expect(response.clientError).toBe(true);
            expect(error.error).toBe("you must provide both a username and password ");
    });

    it('should find a user and update', async () => {

        // const UsertoUpdate = new UserClass()

    });

