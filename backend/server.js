const express = require('express');
const dotenv = require('dotenv');
// const faker = require('faker');
const { faker } = require('@faker-js/faker');
const app = express();
dotenv.config();

const createUser= () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber(),
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        description: faker.company.catchPhrase()
    }
    return newCompany;
}
//routes bruh 
app.get('/', (req, res) => {
    res.send('Welcome to the world of APIs and we are not talking about beer');
});

app.get('/api/users/new', (req, res) => {
    res.json(createUser)
});

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany)
});
app.get('/api/user/company', (req, res) => {
    const user = createUser()
    const company = createCompany()
    res.json ({user : user, company : company})
});

const  PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Hi Pablo 10, your server's running on PORT ${PORT}`));