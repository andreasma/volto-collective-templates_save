import React from 'react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const OwnProjects = () => {
    const content = useSelector((store) => store.content.data);
    const dispatch = useDispatch();
    const ownprojects = useSelector(
        (state) => state.search.subrequests.ownproject?.items,
    );

  



    React.useEffect(() => {
        dispatch(
          searchContent(
            '/',
            {
              portal_type: ['tlproject'],
              review_state: 'published',
            },
            'ownproject',
          ),
        );
      }, [dispatch]);
 

    return (
        <>
        <div>
        <h2>Your Own Projects</h2>
        <p>These are your projects on this site:</p>
        {ownprojects &&
            ownprojects.map((item) => (
              <div padded clearing key={item.id}>
                <h3>
                  <Link to={item['@id']} >
                    {item.title}
                  </Link>
                </h3>
</div>))}
        <h3>Submit new {content.product_title}</h3>
        <p><span>If you already created a new </span>
        <span>{content.product_title} </span>
        <span>please submit your new </span><br />
        <span><Link to={'/add?type=tlproject'}>{content.product_title} Project</Link></span>
        </p>
        </div>
        </>

    )
};

export default OwnProjects;