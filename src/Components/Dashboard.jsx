import React from 'react'
import logo from '../assets/logo-img.png'


const Dashboard = () => {
    return (
        <>



            <div className="Sidebar">

                <div className="Logo"></div>
                <ul className="menu">


                   <img id='logo' src={logo} alt="" />

                    <h6 className="LogoName">The Original</h6>

                    <li className="active">
                        <a href="#" >
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-users"></i>
                            <span>Players</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-cog"></i>
                            <span>Setting</span>
                        </a>
                    </li>


                </ul>
                <ul>
                    {/* <Link to={"/Add-btn"}>Add-btn</Link> */}
                   
                </ul>




            </div>
            <div className='container'>

<nav class="navbar">
    <form class="container-fluid">
        <button class="Add-btn btn btn-outline-dark me-2" >Add New +</button>
    </form>
</nav>

<div className="box-1"><h5 className="balance">Main Balance</h5><h5 className="Statement">View Statement<i class="bi bi-arrow-right"></i></h5></div>
<div className="box-2"><h5 className="UpLine">Up Line<i class="bi bi-arrow-down-short"></i></h5><h5 className="view-1">View All<i class="bi bi-arrow-right"></i></h5></div>
<div className="box-3"><h5 className="Downline">Down Line<i class="bi bi-arrow-up"></i></h5><h5 className="view-2">View All<i class="bi bi-arrow-right"></i></h5></div>
<div className="box-4"><h5 className="Player">All Players</h5><h5 className="view-2">View All<i class="bi bi-arrow-right"></i></h5></div>


<h1 className="text">Recent Transection Details</h1>

<nav class="navbar">
    <form class="container-fluid justify-content-start">
        <button class="share btn btn-outline-success me-2" type="button">Share</button>
        <button class="Export btn btn-outline-success me-2" type="button">Export</button>

        <button className="Search-icon"><i class="bi bi-search"></i></button><button class="Search btn btn-white" type="submit">Search Transaction</button>
        <i class="setting-icon bi bi-gear-fill"></i>




    </form>

</nav>


</div>






        </>
    )
}

export default Dashboard