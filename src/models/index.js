// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Course, Part } = initSchema(schema);

export {
  Category,
  Course,
  Part
};