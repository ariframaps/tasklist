export const Header = () => {
    return (
        <header className="row align-items-center my-3 border p-2 shadow w-100">
            <div className="col text-start fw-semibold fs-2">
                <img src="logo192.png" alt="logo" height="70px" className='pe-3' />
                Taskmate
            </div>
            <div className="col d-flex justify-content-end align-items-center gap-2">
                {
                    (() => {
                        for (let i = 0; i < 5; i++) (
                            <p>makanan</p>
                        )
                    })()
                }

                <i className="theme theme1"></i>
                <i className="theme theme2 theme-active"></i>
                <i className="theme theme3"></i>
                <i className="theme theme4"></i>
                <i className="theme theme5"></i>
            </div>
        </header>
    )
}
