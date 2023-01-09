import React from 'react';

import './styles.less';

class Loading extends React.Component {
  render() {
    return (
      <div className="error-container">
        <h2>Oops!</h2>
        <p>We've got a problem!</p>
      </div>
    );
  }
}

export default Loading;
