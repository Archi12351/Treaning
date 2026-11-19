import { registerHooks } from "node:module";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
registerHooks({
  resolve(spec, ctx, next) {
    if ((spec.startsWith(".") || spec.startsWith("/")) && !/\.[a-z]+$/.test(spec)) {
      for (const ext of [".ts", ".tsx", "/index.ts"]) {
        try {
          const url = new URL(spec + ext, ctx.parentURL);
          if (fs.existsSync(fileURLToPath(url))) return next(url.href, ctx);
        } catch {}
      }
    }
    return next(spec, ctx);
  },
});
