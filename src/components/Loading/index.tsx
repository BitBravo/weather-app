import React from 'react';
import ReactLoading from 'react-loading';

import './styles.less';

type PropsType = {
  color?: string;
  type?:
    | 'blank'
    | 'balls'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes';
  width?: string;
  height?: string;
};

class Loading extends React.Component<PropsType> {
  static defaultProps = {
    color: '#357edd',
    type: 'spinningBubbles',
    width: '60px',
    height: '60px',
  };

  render() {
    const { color, type, width, height } = this.props;
    return (
      <div className="loading-container">
        <ReactLoading type={type} color={color} height={height} width={width} />
      </div>
    );
  }
}

export default Loading;
