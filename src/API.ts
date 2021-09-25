/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  courses?: ModelCourseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items?:  Array<Course | null > | null,
  nextToken?: string | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  title: string,
  skills: number,
  numberOfParts: number,
  time: number,
  plot: string,
  poster: string,
  categoryID: string,
  parts?: ModelPartConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPartConnection = {
  __typename: "ModelPartConnection",
  items?:  Array<Part | null > | null,
  nextToken?: string | null,
};

export type Part = {
  __typename: "Part",
  id: string,
  name: string,
  number: number,
  duration: string,
  desc: string,
  video: string,
  courseID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  title: string,
  skills: number,
  numberOfParts: number,
  time: number,
  plot: string,
  poster: string,
  categoryID: string,
};

export type ModelCourseConditionInput = {
  title?: ModelStringInput | null,
  skills?: ModelIntInput | null,
  numberOfParts?: ModelIntInput | null,
  time?: ModelIntInput | null,
  plot?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCourseInput = {
  id: string,
  title?: string | null,
  skills?: number | null,
  numberOfParts?: number | null,
  time?: number | null,
  plot?: string | null,
  poster?: string | null,
  categoryID?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreatePartInput = {
  id?: string | null,
  name: string,
  number: number,
  duration: string,
  desc: string,
  video: string,
  courseID: string,
};

export type ModelPartConditionInput = {
  name?: ModelStringInput | null,
  number?: ModelIntInput | null,
  duration?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  video?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelPartConditionInput | null > | null,
  or?: Array< ModelPartConditionInput | null > | null,
  not?: ModelPartConditionInput | null,
};

export type UpdatePartInput = {
  id: string,
  name?: string | null,
  number?: number | null,
  duration?: string | null,
  desc?: string | null,
  video?: string | null,
  courseID?: string | null,
};

export type DeletePartInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  skills?: ModelIntInput | null,
  numberOfParts?: ModelIntInput | null,
  time?: ModelIntInput | null,
  plot?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelPartFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  number?: ModelIntInput | null,
  duration?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  video?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelPartFilterInput | null > | null,
  or?: Array< ModelPartFilterInput | null > | null,
  not?: ModelPartFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    skills: number,
    numberOfParts: number,
    time: number,
    plot: string,
    poster: string,
    categoryID: string,
    parts?:  {
      __typename: "ModelPartConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    skills: number,
    numberOfParts: number,
    time: number,
    plot: string,
    poster: string,
    categoryID: string,
    parts?:  {
      __typename: "ModelPartConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    skills: number,
    numberOfParts: number,
    time: number,
    plot: string,
    poster: string,
    categoryID: string,
    parts?:  {
      __typename: "ModelPartConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePartMutationVariables = {
  input: CreatePartInput,
  condition?: ModelPartConditionInput | null,
};

export type CreatePartMutation = {
  createPart?:  {
    __typename: "Part",
    id: string,
    name: string,
    number: number,
    duration: string,
    desc: string,
    video: string,
    courseID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePartMutationVariables = {
  input: UpdatePartInput,
  condition?: ModelPartConditionInput | null,
};

export type UpdatePartMutation = {
  updatePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    number: number,
    duration: string,
    desc: string,
    video: string,
    courseID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePartMutationVariables = {
  input: DeletePartInput,
  condition?: ModelPartConditionInput | null,
};

export type DeletePartMutation = {
  deletePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    number: number,
    duration: string,
    desc: string,
    video: string,
    courseID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    skills: number,
    numberOfParts: number,
    time: number,
    plot: string,
    poster: string,
    categoryID: string,
    parts?:  {
      __typename: "ModelPartConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items?:  Array< {
      __typename: "Course",
      id: string,
      title: string,
      skills: number,
      numberOfParts: number,
      time: number,
      plot: string,
      poster: string,
      categoryID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPartQueryVariables = {
  id: string,
};

export type GetPartQuery = {
  getPart?:  {
    __typename: "Part",
    id: string,
    name: string,
    number: number,
    duration: string,
    desc: string,
    video: string,
    courseID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPartsQueryVariables = {
  filter?: ModelPartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartsQuery = {
  listParts?:  {
    __typename: "ModelPartConnection",
    items?:  Array< {
      __typename: "Part",
      id: string,
      name: string,
      number: number,
      duration: string,
      desc: string,
      video: string,
      courseID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    skills: number,
    numberOfParts: number,
    time: number,
    plot: string,
    poster: string,
    categoryID: string,
    parts?:  {
      __typename: "ModelPartConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    skills: number,
    numberOfParts: number,
    time: number,
    plot: string,
    poster: string,
    categoryID: string,
    parts?:  {
      __typename: "ModelPartConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    skills: number,
    numberOfParts: number,
    time: number,
    plot: string,
    poster: string,
    categoryID: string,
    parts?:  {
      __typename: "ModelPartConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePartSubscription = {
  onCreatePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    number: number,
    duration: string,
    desc: string,
    video: string,
    courseID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePartSubscription = {
  onUpdatePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    number: number,
    duration: string,
    desc: string,
    video: string,
    courseID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePartSubscription = {
  onDeletePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    number: number,
    duration: string,
    desc: string,
    video: string,
    courseID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
