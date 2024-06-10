import { useEffect } from "react";


function CustomersList({customers,setCustomers,delete_cus,getCustomer,search}){


    useEffect(()=>{
        getCustomer()
    },[]) 






    return(
        <div className="customersList">
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        customers
                        .filter(cus=>cus.client.fullName.toLowerCase().includes(search.toLowerCase()))
                        .map((cus)=>{
                                // console.log(cus.client.fullName)
                            return(
                                <tr key={cus._id}>
                                    <td>{cus.client.fullName}</td>
                                    <td>{cus.client.phone}</td>
                                    <td>{cus.client.adress}</td>
                                    <td>{cus.client.city}</td>
                                    <td>
                                        <ion-icon name="trash-outline" onClick={()=>{delete_cus(cus.id)}}></ion-icon>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomersList;