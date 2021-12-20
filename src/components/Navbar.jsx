const Navbar = () => {
  return (
    <nav className="border fixed split-nav background-secondary navbar">
      <div className="nav-brand">
        <h3>Astroteller</h3>
      </div>
      <div className="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <label htmlFor="collapsible1">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>
        <div className="collapsible-body">
          <ul className="inline">
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
