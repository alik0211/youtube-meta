import React from 'react';

class Info extends React.Component {
  render() {
    const { video } = this.props;

    if (!video) {
      return null;
    }

    const { snippet } = video;

    return (
      <div className="info">
        <table className="info__table">
          <tbody className="info__tbody">
            <tr className="info__item">
              <td className="info__item-name">Title</td>
              <td className="info__item-value">{snippet.title}</td>
            </tr>
            <tr className="info__item">
              <td className="info__item-name">Published at</td>
              <td className="info__item-value">
                {new Date(snippet.publishedAt).toLocaleString()}
              </td>
            </tr>
            <tr className="info__item">
              <td className="info__item-name">Audio language</td>
              <td className="info__item-value">
                {snippet.defaultAudioLanguage}
              </td>
            </tr>
            <tr className="info__item">
              <td className="info__item-name">Tags</td>
              <td className="info__item-value">{snippet.tags.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Info;
