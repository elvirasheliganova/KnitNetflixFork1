import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly courses?: (Course | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Course {
  readonly id: string;
  readonly title: string;
  readonly skills: number;
  readonly numberOfParts: number;
  readonly time: number;
  readonly plot: string;
  readonly poster: string;
  readonly categoryID: string;
  readonly parts?: (Part | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course, CourseMetaData>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course, CourseMetaData>) => MutableModel<Course, CourseMetaData> | void): Course;
}

export declare class Part {
  readonly id: string;
  readonly name: string;
  readonly number: number;
  readonly duration: string;
  readonly desc: string;
  readonly video: string;
  readonly courseID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Part, PartMetaData>);
  static copyOf(source: Part, mutator: (draft: MutableModel<Part, PartMetaData>) => MutableModel<Part, PartMetaData> | void): Part;
}