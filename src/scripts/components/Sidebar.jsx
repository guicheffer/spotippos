import React from 'react'
import { Link } from 'react-router';

import getText from '../helpers/i18n'

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar spotippos-sidebar col-xs-2 col-sm-1">
          <nav className="nav nav-vertical nav-sidebar">
              <ul className="options">
                  <li
                    className={ "item " + (this.props.itemSelected === "announcements" ?
                    "selected" : "") }
                  >
                    <Link to="/announcements" title="Anúncios">
                      <span className="icon sprt sprt-building"></span>
                      {getText('announcements')}
                    </Link>
                  </li>
                  <li
                    className={ "item " + (this.props.itemSelected === "new" ?
                    "selected" : "") }
                  >
                    <Link to="/announcements/new" title="Novo anúncio" onClick={e => {
                      e.preventDefault();
                      alert(getText('default-sorryNewAnn'));
                    }}>
                      <span className="icon sprt sprt-plus"></span>
                      {getText('newAnnouncement')}
                    </Link>
                  </li>
              </ul>
          </nav>
      </aside>
    )
  }
}

export default Sidebar;
