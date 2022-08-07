import React from "react";



const AddPhoto = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description,
            imageLink
        }
        if (description && imageLink) {
            props.onAddPhoto(post)
        }
    }
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Link' name="link" />
          <input type='text' placeholder='Description' name="description" />
          <button> Post </button>
        </form>
      </div>
    </>
  );
};

export default AddPhoto;
