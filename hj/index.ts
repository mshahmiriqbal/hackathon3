import { type SchemaTypeDefinition } from 'sanity'
import product from './src/sanity/schemaTypes/product'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
