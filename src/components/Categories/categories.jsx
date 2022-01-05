import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Header, Label, List, Segment } from 'semantic-ui-react';

import { getCategories } from '~/actions';

const Categories = () => {
    const categories = useSelector((store) => store.categories);  
    const dispatch = useDispatch();  
    let location = useLocation();  
    const content = useSelector((store) => store.content.data);  
  
    React.useEffect(() => {  
      dispatch(getCategories(location.pathname));  
    }, [dispatch, location]);

    return (
        <div>
     I am the MyContentTypeView component.
     {console.debug("content", content)},
  </div>
    )
  
};

export default Categories;