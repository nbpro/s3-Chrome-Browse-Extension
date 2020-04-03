/*
 *  Created on 1st April 2020,
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";
import Header from 'components/Header';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // keeping this method blank as may be needed in future
  }

  render() {
    const { loading, error } = this.props;
    return (
      <div>
        <Helmet>
          <title>S3 Assist</title>
          <meta name="description" content="S3 Assist | Manages all your s3" />
        </Helmet>
        <Header/>
      </div>
    );
  }
}
HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};
