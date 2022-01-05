import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getVocabulary, getVocabularyTokenTitle } from '@plone/volto/actions';
import { Categories } from '~/components';

const TlprojectView = props => {
    
    const dispatch = useDispatch();
    const vocabulary = 'Templatecategories';
    const keywords = useSelector((state) => state.vocabularies[vocabulary]);
    let location = useLocation();
    const content = useSelector((store) => store.content.data);

  



    return (
      <>
      
      <Container id="view-wrapper project-view">
      <Helmet title={content.title} />
      <h1 className="documentFirstHeading">
        {content.title}
      </h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      <h2>Project Description</h2>
      <div dangerouslySetInnerHTML={{ __html: content.details.data }} />
      <h3>Release Number</h3>
      <p>{content.releasenumber}</p>
      <h3>Category/Categories</h3>
      <p>Test: keywords: {JSON.stringify(keywords)}</p>
      <Categories />

      <h4>License(s)</h4>
      <h4>Compatibility</h4>
      <h2>Available Downloads</h2>
      
      </Container>
      </>
  )
};
  
  export default TlprojectView;