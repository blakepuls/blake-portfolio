import { pbkdf2Sync } from 'crypto'
import { PrismaClient } from '@prisma/client'
import { verify, sign } from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function verifyToken(token: string) {
    //Verify the token, if it's valid return true, if not return false
    try {
        const decoded = verify(token, process.env.JWT_SECRET)
        return decoded
    } catch (err) {
        return null
    }
}

export async function loginUser(username: string, password: string) {
    const user = await prisma.user.findFirst()
    const hashedPassword = pbkdf2Sync(password, process.env.SALT, 100000, 64, 'sha512').toString('hex')

    if (!user || user.username != username || user.password != hashedPassword)
        return null

    const token = sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' })
    return token
}

export async function createUser(username: string, password: string) {
    const hashedPassword = pbkdf2Sync(password, process.env.SALT, 100000, 64, 'sha512').toString('hex')

    const user = await prisma.user.create({
        data: {
            username: username,
            password: hashedPassword
        }
    })
    
    return user
}

export async function getUser() {
    const user = await prisma.user.findFirst()
    return user
}