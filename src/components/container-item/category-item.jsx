
import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {
        imageUrlStyle,
        title
    } = category;
    return (
        <div className="category-container">
                <div className="background-image" style={{
                  backgroundImage: `url(${imageUrlStyle})`
                }}/>
                <div className="category-body-container">
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
                </div>
    )
}

export default CategoryItem;
    
