import React from 'react';
import { Container, Image, Segment } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getVocabulary, getVocabularyTokenTitle } from '@plone/volto/actions';
import { Categories } from '~/components';
import { flattenToAppURL } from '@plone/volto/helpers';

const TlprojectView = props => {
    
    const dispatch = useDispatch();
    const vocabulary = 'Templatecategories';
    const keywords = useSelector((state) => state.vocabularies[vocabulary]);
    let location = useLocation();
    const content = useSelector((store) => store.content.data);

    return (
      <>
      
      <Container id="view-wrapper project-view">
      <div class="ui two column very relaxed stackable grid">
        <div class="twelf wide column">
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
      <p>
      {content.file?.download && (
      <a href={flattenToAppURL(content.file.download)}>
        {content.file.filename}
      </a>
      )}
      <br />
      {content.file?.download && (
      <span>File size: {content.file.size} kb</span>
      )}
      </p>
      <p>
      {content.file1?.download && (
      <a href={flattenToAppURL(content.file1.download)}>
        {content.file1.filename}
      </a>
      )}
      {content.file1?.download && (      
      <span>File size: {content.file1.size} kb</span>
      )}
      </p>
      <p>
      {content.file2?.download && (
      <a href={flattenToAppURL(content.file2.download)}>
        {content.file2.filename}
      </a>
      )}
      {content.file2?.download && (      
      <span>File size: {content.file2.size} kb</span>
      )}
      </p>
      </div>
      <div class="four wide column">
        <h2>Project Ressources</h2>
        <h3>Screenshot</h3>
        <Image 
                    src={flattenToAppURL(content.screenshot.scales.preview.download)}
                    size="tile"
                    floated="left"
                    alt={content.image_caption}                
                  />
        <h3>Install Instructions</h3>
        <h3>Contact The Author</h3>
        <p>You can send a message to the author of the project and give him feedback 
          by following the link and fill in your information into the form:</p>
      </div>
      </div>
      
      </Container>
      </>
  )
};
  
  export default TlprojectView;