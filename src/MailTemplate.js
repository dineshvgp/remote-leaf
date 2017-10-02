import React, {Component} from 'react';
import Oy from 'oy-vey';

const {Table, TBody, TR, TD} = Oy;

const headerStyle = {
  fontSize: '60px',
  textAlign: 'center',
  background: '-webkit-linear-gradient(right,#E58837,#D23A21)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  fontWeight: 'bold'
};

const listHashContainer = {
  margin: '-10px 0 0 10px'
};

const listHash = {
  color: 'gray',
  textDecoration: 'none'
};

class MailTemplate extends Component {

  header() {
    return (
      <Table width='575'>
        <TBody>
          <TR>
            <TD>
              <span style={headerStyle}>Remote Leaf</span>
              <p style={listHashContainer}>
                <span style={listHash}>Issue #37 — September 30, 2017</span>
              </p>
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

  description() {
    return (
      <Table width='575'>
        <TBody>
          <TR>
            <TD>
              <p>
                You receive this email because you are subscribed to <a href="https://www.hndigest.com/">Remote Leaf</a>.
              </p>
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

  render() {
    return[
      this.header(),
      this.description()
    ]
  }

}

export default MailTemplate;
