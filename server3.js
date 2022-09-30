const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", async (e) => {
  console.log(`${e.query} ${e.params}`);
});

async function main() {
  // ... you will write your Prisma Client queries here
  const all = await prisma.ice_creams.findMany({ include: { plants: true } });
  console.dir(all, { depth: null });

  const plants = await prisma.plants.findMany({ include: { flavour: true } });
  console.log(plants);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
