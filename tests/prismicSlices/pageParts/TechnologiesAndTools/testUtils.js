export const getFakePropsByParams = (primaryParams, params = {}) => ({
  slice: {
    primary: {
      ...primaryParams,
    },
    ...params,
  },
})
