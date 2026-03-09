import { db } from "./connection.ts";
import { users, habits, entries, tags, habitsTags } from "./dbSchema.ts";
import { isProd } from "../../env.ts";

const seed = async () => {
    try {
        if(isProd()){
            throw new Error("❌ Seeding should not be run in production!");
        }

        console.log("🌱 Seeding the database...");

        await db.transaction(async (tx) => {

            // La db debe ser siempre una copia para dev/test, NUNCA la de producción
            await tx.delete(habitsTags);
            await tx.delete(entries);
            await tx.delete(tags);
            await tx.delete(habits);
            await tx.delete(users);

            console.log("✅ Database cleared!");

            const [demoUser] = await tx
            .insert(users)
            .values({
                email: "demo@example.com",
                username: "Zar",
                password: "miConstrasena", 
                firstName: "Zar",
                lastName: "LeFrance",
            })
            .returning(); // <- Esto permite obtener el usuario recién creado, incluyendo su ID generado automáticamente

            if (!demoUser) throw new Error("❌ Failed to create demoUser");
            console.log("✅ Demo user created");

            const [demoHabit] = await tx
            .insert(habits)
            .values({
                userId: demoUser.id, 
                name: "Morning Run",
                description: "Run 5km every morning",
                frequency: "daily",
                targetCount: 1,
            })
            .returning();

            if (!demoHabit) throw new Error("❌ Failed to create demoHabit");
            console.log("✅ Demo habit created");
            
            const today = new Date();
            today.setHours(0, 0, 0, 0); 

            const entriesData = [];

            for (let i = 0; i < 7; i++) {
            entriesData.push({
                habitId: demoHabit.id,
                completionDate: new Date(today.getTime() - i * 86400000)
            });
            }

            await tx.insert(entries).values(entriesData); // Antes hacía insert por cada loop, ahora hago un solo insert con todos los datos generados para ahorrar recursos.

            console.log("✅ Demo entries created");

            const [demoTag] = await tx
            .insert(tags)
            .values({
                name: "Health",
                color: "#10b981"
            })
            .returning();

            if (!demoTag) throw new Error("❌ Failed to create demoTag");
            console.log("✅ Demo tag created");

            await tx
            .insert(habitsTags)
            .values({
                habitId: demoHabit.id,
                tagId: demoTag.id
            });

            console.log("✅ Habit-Tag association created");

            console.log("✅ Database seeded successfully!");
            console.log("Demo credentials:");
            console.log(`Email: ${demoUser.email}`);
            console.log(`Username: ${demoUser.username}`);
            console.log(`Password: ${demoUser.password}`);
        });
    }catch (error) {
        console.error("❌ Error seeding the database:", error);
    }
}

if(import.meta.main) {
    seed()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

export default seed;