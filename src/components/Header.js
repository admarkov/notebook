import React from "react"

export default function Header(props) {
    let userOrLogin
    if (props.user) {
        userOrLogin = <a className="headerUserLink" href="/cabinet">{props.user.displayName}</a>
    } else {
        userOrLogin = <a className="headerUserLink" href="/login">Войти</a>
    }
    return (
      <header>
          <h1 className="headerLogo"><a href="/">admarkov notebook</a></h1>
      </header>
    );
}