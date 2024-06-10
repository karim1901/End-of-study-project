import { useState } from "react";
import { useProduct } from "../../../../../productContext/productContext";
import { useEffect } from "react";

function Categories() {
    const product = useProduct()
    const [activeCategory, setActiveCategory] = useState('All items')

    const handleClick = (e, category) => {

        setActiveCategory(category)


        if(category == "All items"){
            product.setSearchCategory("")
        }else{
            product.setSearchCategory(category)
        }
    };

    // useEffect(()=>{
    //     if(activeCategory == "All items"){
    //         product.setSearchCategory('');
    //     }
    // },[activeCategory])

    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul>
                <li
                    className={activeCategory === 'All items' ? 'active' : ''}
                    onClick={(e) => handleClick(e, 'All items')}
                >
                    All items
                </li>
                {[...new Set(product.productsCatalog.map(item => item.category))].map((category) => {
                    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
                    return (
                        <li
                            key={formattedCategory}
                            className={activeCategory === formattedCategory ? 'active' : ''}
                            onClick={(e) => handleClick(e, formattedCategory)}
                        >
                            {formattedCategory}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Categories;
