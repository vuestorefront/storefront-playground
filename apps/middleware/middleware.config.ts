import dotenv from "dotenv";
dotenv.config();

import { config as fakestoreConfig } from "./integrations/fakestore";
import { config as storyblokConfig } from "./integrations/storyblok";

export const integrations = {
  fakestore: fakestoreConfig,
  storyblok: storyblokConfig,
};
