import BlueButton from "../../../components/BlueButton/BlueButton"
import Card from "../Card/Card"
import styles from "./Catalog.module.css"
import { products } from "../../../products"
import { typeProduct } from "../../../products"
import Search from "../../../components/Search/Search"
import { useState } from "react"

export default function Catalog() {
	
	const [search, setSearch] = useState('');
    function handleChange(e){
        setSearch(e.target.value);
    }
    const filterProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
	return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__title}>Каталог товаров</h2>
			<Search handleChange={handleChange}/>
			<div className={styles.catalog__line}>
				<p>Категории:</p>
				<div className={styles.category}>
					{typeProduct.map((product) => (
						<BlueButton text={product.text} type={product.type} />
					))}
				</div>
			</div>
			<div className={styles.wrap}>
				{
					filterProducts.length
					?
                    filterProducts.map(products=><Card id={products.id} name={products.name} price={products.price} imagePath={products.imagePath}/>)
					:
					<p>По запросу "{search}" ничего не найдено</p>
                }
			</div>
            <div className={styles.catalog__footer}>
                <BlueButton text={"Загрузить еще товары"} type='btnGrayBig'/>
            </div>
		</div>
	)
}
