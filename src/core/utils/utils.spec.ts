import { Utils } from "./utils";

describe('Test Utils', () => {
    it('check password length', async () => {
        const password = 'my_password'
        const hash = Utils.hashPassword(password)
        console.log(hash)
        expect(hash.length).toBe(60)
    })
    it('should hash special characters', async () => {
        const password = '34@#%^5dsfg!~2><'
        const hash = Utils.hashPassword(password)
        expect(hash.length).toBe(60)
    })
    it('compare passwords', async () => {
        const password = 'my_password'
        const hash = Utils.hashPassword(password)
        const result = Utils.comparePassword(password, hash)
        expect(result).toBeTruthy()
    })
});