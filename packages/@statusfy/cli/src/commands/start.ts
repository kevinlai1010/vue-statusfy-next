import { logger } from "@statusfy/common/src";

export default function start(sourceDir: string, options?: { port?: string }): Promise<Function> {
  let start: Function;

  try {
    start = require('@statusfy/core/src/start').start
  } catch (error) {
    logger.error(error)

    start = require('@statusfy/core/lib/start').start
  }

  return start(sourceDir, options || {})
}
