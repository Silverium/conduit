import React from 'react';

function Header2 (props){
  return (
    <nav className="navbar navbar-light">
      <div className="container">

        <a className="navbar-brand">
          {props.appName.toLowerCase()}
        </a>
      </div>
    </nav>
  );
}

// class Header extends React.Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light">
//         <div className="container">

//           <a className="navbar-brand">
//             {this.props.appName.toLowerCase()}
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default Header2;