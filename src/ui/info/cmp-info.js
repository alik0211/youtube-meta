import React from 'react';
import { keyIsIgnored, getHandlerFromKey } from '../../helpers/video';

import './info.css';

class Info extends React.Component {
  render() {
    const { video } = this.props;

    if (!video) {
      return null;
    }

    const { snippet } = video;

    return (
      <div className="info">
        <div className="info__inner">
          <table className="info__table">
            <tbody className="info__tbody">
              {Object.keys(snippet).map(key => {
                if (keyIsIgnored(key)) {
                  return null;
                }

                return (
                  <tr className="info__item" key={key}>
                    <td className="info__item-name">{key}</td>
                    <td className="info__item-value">
                      {getHandlerFromKey(key)(snippet[key])}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Info;
