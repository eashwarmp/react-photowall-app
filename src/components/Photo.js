import React from "react";
import PropTypes from 'prop-types';

const Photo = (props) => {
  const post = props.post;
  return (
    <figure className='figure'>
      <img className='photo' alt={post.description} src={post.imageLink} />
      <figcaption>
        {" "}
        <p>{post.description}</p>{" "}
      </figcaption>
      <div className='button-container'>
        <button
          className='remove-button'
          onClick={() => props.onRemovePhoto(post)}
        >
          Remove
        </button>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;
