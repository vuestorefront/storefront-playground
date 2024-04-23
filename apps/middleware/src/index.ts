import { createServer } from "@vue-storefront/middleware";
import { integrations } from "../middleware.config";

const port = 8181;

runApp();

async function runApp() {
  const app = await createServer(
    { integrations },
    {
      cors: {
        origin: true,
        credentials: true,
      },
    }
  );

  app.listen(port, "", () => {
    console.log(`API server listening on port ${port}`);
  });
}
