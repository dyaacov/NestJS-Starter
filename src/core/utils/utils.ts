const bcrypt = require('bcryptjs')
export class Utils {
    static hashPassword(password: String) {
        return bcrypt.hashSync(password, 10)
    }
    static comparePassword(password: String, hash: String) {
        return bcrypt.compareSync(password, hash)
    }
}