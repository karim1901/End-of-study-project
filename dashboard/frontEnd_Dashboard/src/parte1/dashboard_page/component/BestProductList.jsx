import { useEffect, useState } from "react";
import { star } from "../../icon";
import axios from "axios";
import { useAuth } from "../../../auth/authContext";

function BestProductList({bestProduct}){

    return(
        <div className="bestProductList">
            <table>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Orders</th>
                        <th>Order Confirmed</th>
                        <th>Review</th>
                        <th>Earnings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bestProduct.map((prod,index)=>{
                        

                            const stars = [];
                            if (prod.reviews[0] !== 0) {
                                const numStars = Math.round((prod.reviews[0] / prod.reviews[1]) * 5)
                                for (let i = 0; i < numStars; i++) {
                                    stars.push(<span key={i} className="star">{star}</span>)
                                }
                            }

                            return prod.number_confirmed != 0 && <tr key={index}>
                                <td>
                                    <div className="imgProd">
                                        <img src={prod.thumbnail}  />
                                        <p>{prod.title}</p>
                                    </div>
                                </td>
                                <td>{prod.number_orders}</td>
                                <td>{prod.number_confirmed}</td>
                                <td> {prod.reviews[0] !== 0 ? stars : null}</td>
                                <td>{prod.number_confirmed*prod.price} DH</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BestProductList;