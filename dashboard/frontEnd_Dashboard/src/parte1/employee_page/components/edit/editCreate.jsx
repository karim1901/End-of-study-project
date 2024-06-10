import InputItem from "./InputItem";
import Header from "./header";

function EditCreate({type,focus,setFocus,full_view,infoEmployee,setInfoEmployee,confirm}){



    return(
        <div className="editCreate">
            <Header type={type} full_view={full_view}/>

            <div className="inputForm">
                <InputItem setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} value={infoEmployee.FirstName} placeholder={'FirstName'}  focus={focus} setFocus={setFocus} title={focus.FirstName}/>
                <InputItem setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} value={infoEmployee.LastName} placeholder={'LastName'}  focus={focus} setFocus={setFocus} title={focus.LastName}/>
                <InputItem setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} value={infoEmployee.Phone} placeholder={'Phone'}  focus={focus} setFocus={setFocus} title={focus.Phone}/>
                <InputItem setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} value={infoEmployee.AdressMail} placeholder={'AdressMail'}  focus={focus} setFocus={setFocus} title={focus.AdressMail}/>
                <InputItem setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} value={infoEmployee.UserName} placeholder={'UserName'}  focus={focus} setFocus={setFocus} title={focus.UserName}/>
                <InputItem setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} value={infoEmployee.Password} placeholder={'Password'}  focus={focus} setFocus={setFocus} title={focus.Password}/>
            </div>




            <div className="btns">
                <button onClick={full_view}>
                    <p>Cancel</p>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <button onClick={confirm}>
                    <p>Confirm</p>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </button>
            </div>
        </div>
    )
}

export default EditCreate;