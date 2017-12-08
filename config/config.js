module.exports = {
    mongoConfig: {
        host: 'localhost',
        port: 27017,
        user: '',
        pass: '',
        data: 'thanhquan'
    },
    bcrypt: {
        saltRounds: 10,
        myPlaintextPassword: 's0/\/\P4$$w0rD'
    },
    jwt: {
        secretOrKey: 'secret',
        issuer: 'localhost'
    },
    numberOfPage: {
        frontend: 10,
        backend: 10
    }
}
