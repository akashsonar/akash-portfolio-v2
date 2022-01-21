import React from 'react';
import "./productList.scss";
import Product from "../product/Product";
import {products} from '../../data';

export default function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Portfolio_V2</h1>
                <p className="pl-desc">
                    Portfolio V2 is a creative portfolio that your works has been wating for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((x) => (<Product key={x.id} img={x.img} link={x.link}/>))}

            </div>
        </div>
    )
}
