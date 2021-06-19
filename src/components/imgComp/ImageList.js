import React from 'react'
import "./ImageList.css";
import Image from "./Image";
const ImageList = ({ images }) => {

    const preparedImageList = images.map(i => { return (<Image key={i.id} i={i} />) })

    return (
        <div className="image-list-container">
            {preparedImageList}
        </div>
    )
}
export default ImageList;