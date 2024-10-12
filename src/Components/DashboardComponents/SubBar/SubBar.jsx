import "./SubBar.css"

const SubBar = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white px-4 py-2">
            <p>Root </p>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-2">
                    <button className="btn btn-outline-dark">
                        <i className="fa-solid fa-cloud-arrow-up" style={{ marginRight: '8px' }}></i>
                        Upload File
                    </button>
                </li>

                <li className="nav-item mx-2">
                    <button className="btn btn-outline-dark">
                    <i className="fa-solid fa-file-lines"style={{ marginRight: '8px' }}></i>
                        Create File
                    </button>
                </li>

                <li className="nav-item mx-2">
                    <button className="btn btn-outline-dark">
                        <i className="fa-solid fa-folder-plus" style={{ marginRight: '8px' }}></i>
                        Create Folder
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default SubBar;