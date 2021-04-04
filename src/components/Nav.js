import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import nav from '../classes/Nav';

const Nav = () => {
  const [navigation, setNavigation] = useState([]);
  useEffect(() => {
    setNavigation(nav());
  }, []);
  return (
    <div className="navigation">
      <div className="navigation__wrapper nav__container">
        <div className="site__logo">
          <h2>VESTY.BOT</h2>
        </div>
        <div className="navigation__items">
          {navigation.map((n) => (
            <div key={n.id} className="navigation_item">
              <Link to={n.link}>
                <h4>{n.name}</h4>
              </Link>
            </div>
          ))}
        </div>
        <div className="auth">
          <div className="login">
            <button className="btn auth-btn login-btn">
              <h4>Login</h4>
            </button>
          </div>
          <div className="register">
            <button className="btn auth-btn register-btn">
              <h4>Register</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// import React from 'react';

// class Nav extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       navigation: [],
//       darkmode: false,
//       user: null,
//     };
//   }

//   componentDidMount() {
//     console.log(this.state);
//     this.setState({ darkmode: true, navigation: nav(), user: 'Femi' });
//     console.log(this.state);
//   }
//   render() {
//     return (
//       <div className="navigation">
//         <div className="navigation__wrapper">
//           <div className="navigation__items">
//             {this.state.navigation.map((n) => (
//               <div className="navigation_item">
//                 <h3>{n}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Nav;
