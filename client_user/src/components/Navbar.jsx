function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success-subtle" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4" href="#">Bookio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb- mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fs-4" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-4" href="#">shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-4" aria-current="page" href="#">blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-4" href="#">page</a>
                            </li>
                           
                        </ul>
                        <button className="btn btn-danger me-3">signup</button>
                        <button className="btn btn-danger">login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;