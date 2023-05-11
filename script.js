const access_key = 'FFPUStWiWo3Q8vWZJUz55Q8TE5CG2D3lgJAo4LJLj6E';

const random_photo_url = 'https://api.unsplash.com/photos/random?client_id=${access_key}&count=30'

const gallery = document.querySelector('.gallery');

let allImages; // this will store all the images

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    });
}

const makeImages = (data) => {
    data.forEach((item, index) => {
        
        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';
        
        gallery.appendChild(img);
    })
}

getImages();