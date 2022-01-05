import { GET_CATEGORIES } from '../../constants/ActionTypes';

export function getCategories(url) {
    return {
      type: GET_CATEGORIES,
      request: {
        op: 'get',
        path: `${url}/@projectcategories`,
      },
    };
  }
  