import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category); 

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando...</p>}

            <div className="card-grid">
                <ol>
                    {
                        images.map( image => 
                            <GifGridItem    
                                key={ image.id } 
                                { ...image }
                            />
                        )
                    }
                </ol> 
            </div>
        </>
    )
}

export default GifGrid
