


import Directory from '../../components/directory/directory';
import Images from '../../assets/images';

const categories = [
    {
      "id": 1,
      "title": "macroons",
      "imageUrlStyle": Images.img1
    },
    {
      "id": 2,
      "title": "icecreams",
      "imageUrlStyle": Images.img2
    },
    {
      "id": 3,
      "title": "muffins",
      "imageUrlStyle": Images.img3
    },
    {
      "id": 4,
      "title": "cakes",
      "imageUrlStyle":Images.img4
    },
    {
      "id": 5,
      "title": "Chocolates",
      "imageUrlStyle": Images.img5
    }
  ]
  

function Home() {
    return (
        <Directory categories={categories} />
    )
}

export default Home;