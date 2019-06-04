import React from 'react';
import './Gallery.css'
import gallery_1 from './gallery_1.jpg';
import gallery_2 from './gallery_2.jpg';
import gallery_3 from './gallery_3.jpg';
import gallery_4 from './gallery_4.jpg';
import gallery_5 from './gallery_5.jpg';
import gallery_6 from './gallery_6.jpg';

const Gallery = () => {
    return (
        <section id="gallery">
		<div className="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div className="masonry">
				<img src={gallery_1} alt="image gallery 1" />
				<img src={gallery_3} alt="image gallery 2" />
				<img src={gallery_4} alt="image gallery 3" />
				<img src={gallery_2} alt="image gallery 4" />
				<img src={gallery_5} alt="image gallery 5" />
				<img src={gallery_6} alt="image gallery 6" />
			</div>
		</div>
	</section>
    )
}

export default Gallery;