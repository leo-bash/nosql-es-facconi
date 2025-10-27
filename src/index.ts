import "dotenv/config";
import { createOne } from "./mongo/crud.js";

console.log(
    await createOne("users", { name: "John Doe", email: "john.doe@example.com" })

)