import './NameCard.css'
import React from 'react';
import Row from './Row';
import { ThemeContext } from './ThemeContext';

export default class NameCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
    };
    this.handleNameChange = (e) => this.setState({name: e.target.value});
  }

  render() {
    const {
      name,
    } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className={"namecard " + theme}>
            <Row label="Name">
              <input
                className="input"
                value={name}
                onChange={this.handleNameChange}
              />
            </Row>
          </div>
        )}
      </ThemeContext.Consumer> 
    );
  }
}

// render() {
//   const {
//     name,
//   } = this.state;
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <div className={"namecard " + theme}>
//           <Row label="Name">
//             <input
//               className="input"
//               value={name}
//               onChange={this.handleNameChange}
//             />
//           </Row>
//         </div>
//       )}
//     </ThemeContext.Consumer>
//   );
// }

