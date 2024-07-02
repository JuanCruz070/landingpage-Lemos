
export function NavBar() {
    return (
        <div className="menu">
              <a href="#" className="logo">logo</a>
              <input type="checkbox" id="menu" />
              <label for="menu">
                  <img src="images/menu.png" className="menu-icono" alt=""/>
              </label>

              <nav className="navbar">
                  <ul>
                      <li><a href="#">Inicio</a></li>
                      <li><a href="#">Nosotros</a></li>
                      <li><a href="#">Servicios</a></li>
                      <li><a href="#">Contacto</a></li>
                      
                  </ul>
              </nav>
          </div>
    )
}