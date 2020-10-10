const request = require("supertest");
const app = require("../../index.js");
import mongoose from 'mongoose';
import {
    MongoMemoryServer
} from 'mongodb-memory-server';

let mongoServer;
const userData = {
    firstName: "Lord",
    lastName: "Wonky",
    email: "LordWonky@wonktowers.com",
    password: "ButteryTom",
    username: "Wonzilla"
};

beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri);
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

