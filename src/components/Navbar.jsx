const Navbar = () => {
  return (
    <nav class="border fixed split-nav background-secondary navbar">
      <div class="nav-brand">
        <h3>Astroteller</h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <label for="collapsible1">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
        <div class="collapsible-body">
          <ul class="inline">
            <li>Darkmode</li>
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
