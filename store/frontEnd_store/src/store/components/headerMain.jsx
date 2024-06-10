import { useState } from "react";
import Header from "./header";
import Main from "./main";
import {useParams} from "react-router-dom"
import { useEffect } from "react";
import axios from "axios"

function HeaderMain({store,getdata}) {
    const [search, setSearch] = useState('')

    const [showForm, setShowForm] = useState(false);
    const [infoStore, setInfoStore] = useState({
        name: "",
        background: '',
        profile: ''
    });

    const [img, setImg] = useState({
        background: '',
        profile: ''
    });

    useEffect(()=>{

        setInfoStore({
            name: store.name ,
            background:  "",
            profile:  ""
        })

        setImg({
            background: !!store.background ? store.background : "",
            profile: !!store.profile ?  store.profile : ""
        })



    },[store])


    
    const handleEditClick = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const handleNameChange = (e) => {
        setInfoStore({
            ...infoStore,
            [e.target.name]: e.target.value
        });
    };

    const onSelectImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImg({
                ...img,
                [e.target.name]: URL.createObjectURL(file)
            });
            setInfoStore({
                ...infoStore,
                [e.target.name]: file
            });
        }
    };



    const handleSave = async () => {
        const formData = new FormData();
        formData.append("name", infoStore.name);
        if (infoStore.background) {
            formData.append("background", infoStore.background);
        }
        if (infoStore.profile) {
            formData.append("profile", infoStore.profile);
        }

        try {
            const response = await fetch(`http://localhost:8001/store/${store._id}`, {
                method: "PUT",
                body: formData
            });
            const result = await response.json();
            console.log(result);
            
            closeForm();
            getdata()
        } catch (error) {
            console.error("Error updating store:", error);
        }
    };

    return (
        <div className="headerMain">
            <Header onEditClick={handleEditClick} storeName={store.name} store={store} search={search} setSearch={setSearch} />
            <Main search={search} />

            {showForm && (
                <div className="bg">
                    <div className="editForm">
                        <div className="head">
                            <h2>Edit Store</h2>
                            <ion-icon name="close" onClick={closeForm}></ion-icon>
                        </div>
                        <div className="form">
                            <div className="nameStore">
                                <input type="text" name="name" value={infoStore.name} onChange={handleNameChange} />
                            </div>
                            <div className="imgStore">
                                <div className="img">
                                    <img src={img.background} alt="" />
                                </div>
                                <label>Choose background</label>
                                <input type="file" name="background" onChange={onSelectImg} />
                            </div>
                            <div className="imgStore">
                                <div className="img">
                                    <img src={img.profile} alt="" />
                                </div>
                                <label>Choose Profile</label>
                                <input type="file" name="profile" onChange={onSelectImg} />
                            </div>
                        </div>
                        <div className="btns">
                            <button onClick={handleSave}>Save</button>
                            <button onClick={closeForm}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderMain;
