// @ts-ignore
import { convertFromDirectory } from 'joi-to-typescript';


/**
 * Convert joi schema to typescripts
 * @see: https://github.com/mrjono1/joi-to-typescript
 */
convertFromDirectory({
  schemaDirectory: './nodes/Browserless/chemas',
  typeOutputDirectory: './nodes/Browserless/interfaces',
	schemaFileSuffix: '.schema',
  debug: true
});
