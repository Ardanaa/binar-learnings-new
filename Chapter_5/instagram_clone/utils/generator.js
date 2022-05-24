class Generator {
    static async generateID() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    // static async generateToken(generatedID, email) {
    //     const token =  `${generatedID}-${email}`
    //     return token;
    // }
}

module.exports = Generator;