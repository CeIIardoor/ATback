import prisma from '../../../lib/prisma'

// POST /api/user/signin
// Required fields in body: name, email
export default async function handle(req, res) {
    const { name, email } = req.body
    const user = await prisma.user.findOne({
        where: {
            name,
            email,
        },
    })
    if (!user) {
        return res.status(401).json({
            error: 'Invalid name or email',
        })
    }
    const token = await prisma.user.createToken({
        userId: user.id,
    })
    res.json({
        token,
    })
}
