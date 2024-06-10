import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"
import {useParams} from "react-router-dom"
import { svgStore } from "../../icon";






function Header({onEditClick, storeName,store,setSearch,search}){



    // const name = store.name.charAt(0).toUpperCase() + store.name.slice(1);
    const name = store?.name ? store.name.charAt(0).toUpperCase() + store.name.slice(1) : 'Store';



    const onHandlerSearch=(e)=>{
        setSearch(e.target.value)
    }

    return <div className="header">
        <div className="left">
            <div className="profile">
                {!!store.profile ? (
                    <div className="logo">
                        <img src={store.profile}  alt='' />
                    </div>
                ) : (
                    <div className="icon">
                        {svgStore}
                    </div>  
                )}
            </div>
        

            <div className="nameFollowers">
                <div className="name">
                    <div className="nameFollow">
                        <p>{name}</p> 
                        <p>{store.followors} Followers</p>                        
                    </div>
                    <div className="edit">
                        <ion-icon name="create-outline" onClick={onEditClick}></ion-icon>
                    </div>
                </div>
                <div className="follow">
                    <button>
                        <p>Follow</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div> 

        </div>

        <div className="right">
            <div className="search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.62398 14.9999C5.00872 16.3866 6.85275 17.2191 8.80868 17.3405C10.7646 17.4618 12.6974 16.8638 14.243 15.6589L19.561 20.9769C19.7496 21.1591 20.0022 21.2599 20.2644 21.2576C20.5266 21.2553 20.7774 21.1502 20.9628 20.9648C21.1482 20.7793 21.2534 20.5285 21.2557 20.2663C21.2579 20.0041 21.1571 19.7515 20.975 19.5629L15.657 14.2449C16.9153 12.6301 17.5102 10.5961 17.3204 8.5577C17.1305 6.51933 16.1703 4.63013 14.6355 3.2754C13.1006 1.92067 11.1068 1.20245 9.06065 1.26721C7.01448 1.33198 5.07007 2.17485 3.62398 3.62393C2.87678 4.37076 2.28405 5.25748 1.87964 6.23345C1.47524 7.20942 1.26709 8.2555 1.26709 9.31193C1.26709 10.3684 1.47524 11.4145 1.87964 12.3904C2.28405 13.3664 2.87678 14.2531 3.62398 14.9999ZM5.03798 5.03993C6.02656 4.05138 7.32731 3.43618 8.71861 3.29913C10.1099 3.16209 11.5057 3.51168 12.6681 4.28836C13.8306 5.06503 14.6878 6.22073 15.0937 7.55855C15.4996 8.89637 15.4291 10.3335 14.8941 11.6252C14.3592 12.9168 13.393 13.9831 12.1601 14.6422C10.9272 15.3014 9.50391 15.5126 8.13271 15.24C6.7615 14.9674 5.52723 14.2279 4.64018 13.1473C3.75313 12.0667 3.26819 10.712 3.26798 9.31393C3.26524 8.51951 3.42029 7.73245 3.72413 6.99842C4.02798 6.26439 4.47456 5.598 5.03798 5.03793V5.03993Z" fill="#808080"/>
                </svg>

                <input type="text" value={search} onChange={onHandlerSearch} placeholder="Search in this store..." />
            </div>
        </div>


    </div>
}

export default Header