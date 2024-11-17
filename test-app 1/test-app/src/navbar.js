import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> My Blog </h1>
            <div className="links" style={{
                color: 'red',
                backgroundColor: '#43F32B',
                borderRadius: '8px'
            }}>
                {/* <a href="/"> Home </a>
                <a href="/create"> New blog </a>
                <a href="/contacts"> Contacts </a>  
                <a href="/about"> About us </a> */}

                <Link to="/"> Home </Link>
                <Link to="/create"> New blog </Link>
                <Link to="/contacts"> Contacts </Link>
                <Link to="/about"> About us </Link>
                <Link to="/dataFromDb"> Data from DB </Link>
                <Link to="/useFetch">Data from useFetch </Link>
            </div>
        </nav>
    );
}

export default Navbar;