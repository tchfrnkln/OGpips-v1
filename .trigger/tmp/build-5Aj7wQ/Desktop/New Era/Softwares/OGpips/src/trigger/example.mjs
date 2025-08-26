import {
  logger,
  task,
  wait
} from "../../../../../../chunk-QNS4DHBF.mjs";
import "../../../../../../chunk-JAQFRGM5.mjs";
import {
  __name,
  init_esm
} from "../../../../../../chunk-OOYLPNSB.mjs";

// src/trigger/example.ts
init_esm();
var helloWorldTask = task({
  id: "hello-world",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300,
  // Stop executing after 300 secs (5 mins) of compute
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    logger.log("Hello, world!", { payload, ctx });
    await wait.for({ seconds: 5 });
    return {
      message: "Hello, world!"
    };
  }, "run")
});
export {
  helloWorldTask
};
//# sourceMappingURL=example.mjs.map
