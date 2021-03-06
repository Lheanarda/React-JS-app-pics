import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = ({images})=>{

    const renderImages = images.map((image)=>{
        return <ImageCard key={image.id} image = {image} />
    })
    return(
        <div className="image-list">
            {renderImages}
        </div>
    )
}

export default ImageList;