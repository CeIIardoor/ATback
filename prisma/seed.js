const { PrismaClient } = require('@prisma/client')
var crypto = require('crypto');

const prisma = new PrismaClient()

const userData = [
  {
    name: 'Yassine',
    email: 'yassine@tls.io',
    password: crypto.createHash('md5').update('password').digest('hex'),
    posts: {
      create: [
        {
          title: 'Join the Tls Slack',
          content: 'https://slack.tls.io',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@tls.io',
    password: crypto.createHash('md5').update('password').digest('hex'),
    posts: {
      create: [
        {
          title: 'Follow Tls on Twitter',
          content: 'https://www.twitter.com/tls',
          published: true,
          viewCount: 42,
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@tls.io',
    password: crypto.createHash('md5').update('password').digest('hex'),
    posts: {
      create: [
        {
          title: 'Ask a question about Tls on GitHub',
          content: 'Test',
          published: true,
          viewCount: 128,
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
