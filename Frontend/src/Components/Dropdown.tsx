import './Dropdown.css'


export const Dropdown = () =>{
    const UserCredential = JSON.parse(localStorage.getItem("UserCredential") || "");
    // console.log(UserCredential.userName);

    return(
    <div className='dropdown'>
        <button className='dropdown-button'>{UserCredential.userName} ▾</button>
        <div className="content">
            <div className='log-out-button' onClick={ () => {
                localStorage.clear();
                window.location.reload();
            }}>Log Out</div>
        </div>
    </div>
    )
}