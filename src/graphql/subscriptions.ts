/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      title
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      title
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      title
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      title
      skills
      numberOfParts
      time
      plot
      poster
      categoryID
      parts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      title
      skills
      numberOfParts
      time
      plot
      poster
      categoryID
      parts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      title
      skills
      numberOfParts
      time
      plot
      poster
      categoryID
      parts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePart = /* GraphQL */ `
  subscription OnCreatePart {
    onCreatePart {
      id
      name
      number
      duration
      desc
      video
      courseID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePart = /* GraphQL */ `
  subscription OnUpdatePart {
    onUpdatePart {
      id
      name
      number
      duration
      desc
      video
      courseID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePart = /* GraphQL */ `
  subscription OnDeletePart {
    onDeletePart {
      id
      name
      number
      duration
      desc
      video
      courseID
      createdAt
      updatedAt
    }
  }
`;
