import Photo from "./Photo";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Photowall = (props) => {
  return (
    <>
      <Link className="add-button" to="/AddPhoto"> + </Link>
      <div className='photo-grid'>
        {props.posts
        .sort((x,y) => {
          return y.id - x.id
        })
        .map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </>
  );
};

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall;
