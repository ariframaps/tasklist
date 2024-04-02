export const Header = () => {
    return (
        <header class="row align-items-center my-3 border p-2 shadow">
            <div class="col text-start fw-semibold fs-2">
                <img src="logo192.png" alt="logo" height="70px" className='pe-3' />
                Taskmate
            </div>
            <div class="col d-flex justify-content-end gap-2">
                <i class="bi bi-circle fs-2"></i>
                <i class="bi bi-circle fs-2"></i>
                <i class="bi bi-circle fs-2"></i>
                <i class="bi bi-circle fs-2"></i>
                <i class="bi bi-circle fs-2"></i>
            </div>
        </header>
    )
}
