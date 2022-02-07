import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Header, Label, List, Segment } from 'semantic-ui-react';
import { PersonalInformation} from '@plone/volto/components';
import { getUser, updateUser } from '@plone/volto/actions';
import jwtDecode from 'jwt-decode';

import { getCategories } from '~/actions';

const Categories = () => {
    const projectcategories = useSelector((store) => store.categories);  
    const dispatch = useDispatch();  
    let location = useLocation();  
    const content = useSelector((store) => store.content.data);
    
  
  
    React.useEffect(() => {  
      dispatch(getCategories(location.pathname));  
    }, [dispatch, location]);

    return (
        <div>
          {console.debug("content", content)},
          {console.debug('categories', content.category_choice)},
          {console.debug('size', projectcategories)},
       </div>
    )
  
};

export default Categories;