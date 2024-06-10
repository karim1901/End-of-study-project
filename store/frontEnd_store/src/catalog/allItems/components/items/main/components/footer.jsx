import { useEffect } from "react"
import { arrowLeft, arrowright } from "../../../../../../icon"
import { useProduct } from "../../../../../../productContext/productContext"
import { useState } from "react"






function Footer({setPage}) {
    const product = useProduct();

    const [pages, setPages] = useState(0);
    const [listItems, setListItems] = useState([]);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        setPages(Math.ceil(product.numberProduct / 20));
    }, [product.numberProduct]);

    useEffect(() => {
        const items = [];
        for (let i = 0; i < pages; i++) {
            items.push(i + 1);
        }
        setListItems(items);
    }, [pages]);

    const handlePageClick = (page) => {
        setActivePage(page);
        setPage(page)
    };




    return product.loading && (
        <div className="footerProduct">
            <div></div>
            <button>VIEW MORE</button>
            <div className="nextBack">
                {arrowLeft}
                <div className="page">
                    <ul>
                        {listItems.map(item => (
                            <li
                                key={item}
                                onClick={() => handlePageClick(item)}
                                className={item === activePage ? 'active' : ''}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {arrowright}
            </div>
        </div>
    );
}

export default Footer;