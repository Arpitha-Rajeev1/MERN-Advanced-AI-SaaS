import app from './app.js';
import { connectToDatabase } from './db/connection.js';
// connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`Server open in the port ${PORT}`));
}).catch((error) => console.log(error));
//# sourceMappingURL=index.js.map