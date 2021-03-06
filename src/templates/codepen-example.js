/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @flow
 */

import React, {Component} from 'react';
import Container from 'components/Container';
import Layout from 'components/Layout';
import {colors} from 'theme';

type Props = {
  location: Location,
  pageContext: {|
    action: string,
    payload: string,
  |},
};

// Copied over styles from ButtonLink for the submit btn
const primaryStyle = {
  backgroundColor: colors.brand,
  color: colors.black,
  padding: '10px 25px',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease-out',
  outline: 0,
  border: 'none',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: colors.white,
  },

  display: 'inline-block',
  fontSize: 16,
};

class CodepenExample extends Component<Props> {
  _form: HTMLFormElement | null = null;

  componentDidMount() {
    ((this._form: any): HTMLFormElement).submit();
  }

  render() {
    const {location, pageContext} = this.props;
    const {action, payload} = pageContext;

    return (
      <Layout location={location}>
        <Container>
          <h1>إعادة توجيه نحو منصة Codepen...</h1>
          <form
            style={{paddingBottom: '50px'}}
            ref={form => {
              this._form = form;
            }}
            action={action}
            method="POST">
            <input type="hidden" name="data" value={payload} />

            <p>
              لا نقوم بإعادة توجيهك تلقائيا؟
              <br />
              <br />
              <input style={primaryStyle} type="submit" value="إضغط هنا" />
            </p>
          </form>
        </Container>
      </Layout>
    );
  }
}

export default CodepenExample;
