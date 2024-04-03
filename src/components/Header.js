import { useEffect } from "react"

export const Header = ({ theme, setTheme }) => {
    useEffect(() => {
        document.documentElement.removeAttribute('class');
        document.documentElement.classList.add(theme);
        document.body.removeAttribute('class');
        document.body.classList.add(theme);
    }, [theme])

    return (
        <header className="row align-items-center my-5 rounded border p-2 shadow w-100 bg-white">
            <div className="col text-start fw-semibold fs-2">
                <img src="logo192.png" alt="logo" height="70px" className='pe-3' />
                Taskmate
            </div>
            <div className="col d-flex justify-content-end align-items-center gap-2">
                <i onClick={() => setTheme('theme1')} className={`theme theme1 ${theme === 'theme1' ? 'theme-active' : ''}`}></i>
                <i onClick={() => setTheme('theme2')} className={`theme theme2 ${theme === 'theme2' ? 'theme-active' : ''}`}></i>
                <i onClick={() => setTheme('theme3')} className={`theme theme3 ${theme === 'theme3' ? 'theme-active' : ''}`}></i>
                <i onClick={() => setTheme('theme4')} className={`theme theme4 ${theme === 'theme4' ? 'theme-active' : ''}`}></i>
                <i onClick={() => setTheme('theme5')} className={`theme theme5 ${theme === 'theme5' ? 'theme-active' : ''}`}></i>
            </div>
        </header>
    )
}
