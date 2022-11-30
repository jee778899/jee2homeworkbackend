const admin = require("firebase-admin")
const config = require("./config")
const serviceAccount = require("./jee-001-firebase-adminsdk-njsbb-10f85f852c")
const firebaseConfig = config.firebaseConfig

const database = admin.initializeApp({
    firebaseConfig,
    credential: admin.credential.cert(serviceAccount)
})

module.exports = {
    database 
}