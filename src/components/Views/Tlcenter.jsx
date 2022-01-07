import React from 'react';
import { Container, Image, Segment } from 'semantic-ui-react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';

const TlcenterView = props => {
    const { content } = props;
    const tlprojects = useSelector(
        (state) => state.search.subrequests.templateprojects?.items,
    );
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(
        searchContent(
          '/',
          {
            portal_type: ['tlproject'],
            fullobjects: true,
            b_size: 5,
            sort_on: 'effective',
            sort_order: 'reverse',
          },
          'templateprojects',
        ),
      );
     }, [dispatch]);
    
  return (
      <Container id="view-wrapper talklist-view">
        <div class="ui two column very relaxed stackable grid">
        <div class="twelf wide column">
      <article id="content">
        <header>
          <h1 className="documentFirstHeading">{content.title}</h1>
          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
        </header>    
        <section id="content-core">
        <h2>Most Recent {content.title}</h2>
          {tlprojects &&
            tlprojects.map((item) => (
              <Segment padded clearing key={item.id}>
                <h3>
                  <Link to={item['@id']} >
                    {item.title}
                  </Link>
                </h3>
                {item.screenshot && (
                  <Image 
                    src={flattenToAppURL(item.screenshot.scales.preview.download)}
                    size="small"
                    floated="right"
                    alt={content.image_caption}                
                  />
                )}
                <p>{item.description}</p>
              </Segment>
            ))}
        </section>
      </article>
      </div>
      <div class="four wide column">
        <h2>{content.product_title}</h2>
      <p>
        {content.product_description && (
            <span>{content.product_description}</span>
          )}
          <br />
        <span>Currently there are </span>
        <span>[...] project(s) available.</span></p>
      <h3><Link to={'/add?type=tlproject'}>Submit Your Project</Link></h3>
      </div>
      </div>
    </Container>
  )
};

export default TlcenterView;
