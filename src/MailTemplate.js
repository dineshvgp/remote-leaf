import React, {Component} from 'react';
import Oy from 'oy-vey';

const {Table, TBody, TR, TD} = Oy;

const container = {
  width: '575px',
  margin: '0 auto'
};

const headerStyle = {
  fontSize: '60px',
  textAlign: 'center',
  background: '-webkit-linear-gradient(right,#E58837,#D23A21)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold'
};

const listHashContainer = {
  margin: '-10px 0 0 10px'
};

const listHash = {
  color: 'gray',
  textDecoration: 'none'
};

const link = {
  color: '#d94c19',
  textDecoration: 'none'
};

const tableMarginTopStyle = {
  marginTop: '20px'
};

const verticalAlignTopStyle = {
  verticalAlign: 'top'
};

const descStyle = {
  fontSize: '16px',
  marginTop: '10px',
  marginLeft: '0',
  paddingLeft: '3px'
};

const jobListStyle = {
  ...tableMarginTopStyle,
  paddingLeft: '10px',
  paddingRight: '10px'
};

const jobIndexStyle = {
  marginRight: '10px',
  color: '#aaa',
  textAlign: 'right',
  marginTop: '1px'
};

const jobTitleStyle = {
  ...link,
  fontSize: '17px'
};

const jobMetaDataStyle = {
  textDecoration: 'none',
  color: 'inherit'
};

const footerStyle = {
  marginBottom: '16px',
  background: '#ebebeb',
  padding: '10px',
  marginTop: '30px',
  width: '100%',
  textAlign: 'center'
};

const noMarginTopStyle = {
  marginTop: '0'
}

const data = [{
  id: '1',
  title: 'Operations Engineer - Amazing Opportunity',
  link: 'http://www.redguava.com.au/jobs/operations_engineer/'
}, {
  id: '2',
  title: 'Tor Implementation Engineer @ Brave Software',
  link: 'https://www.wfh.io/jobs/3907-tor-implementation-engineer-brave-software'
}, {
  id: 3,
  title: 'Senior Backend Node.JS Engineer @ Formidable',
  link: 'https://www.wfh.io/jobs/3905-senior-backend-node-js-engineer-formidable'
}, {
  id: 4,
  title: 'Engineering Manager, JavaScript Team @ Mozilla',
  link: 'https://www.wfh.io/jobs/3900-engineering-manager-javascript-team-mozilla'
}, {
  id: 5,
  title: 'Entrepreneurial Sales Development Hacker in Utah',
  link: 'https://weworkremotely.com/jobs/5451-entrepreneurial-sales-development-hacker-in'
}, {
  id: 6,
  title: 'WANTED: Social Media Manager With Creative Eye + Superb Organisational Skills',
  link: 'https://weworkremotely.com/jobs/5445-wanted-social-media-manager-with'
}, {
  id: 7,
  title: 'Masterarbeit "Migration bestehender Applikation in eine Serverless Architektur"',
  link: 'https://stackoverflow.com/jobs/156248/masterarbeit-migration-bestehender-applikation-senacor-technologies-ag?a=QoQpWG6L1OU'
}, {
  id: 8,
  title: 'Abschlussarbeit zu Smart Contract-Plattformen in der Praxis',
  link: 'https://stackoverflow.com/jobs/156245/abschlussarbeit-zu-smart-contract-plattformen-in-senacor-technologies-ag'
}, {
  id: 9,
  title: 'Frontend developer to Swedish start-up in Connected Health',
  link: 'https://stackoverflow.com/jobs/155929/frontend-developer-to-swedish-start-up-in-cross-technology-solutions'
}, {
  id: 10,
  title: 'UI Engineering Manager- Leading Open Source Company',
  link: 'https://stackoverflow.com/jobs/156126/ui-engineering-manager-leading-open-source-elastic'
}]

class MailTemplate extends Component {

  header() {
    return (
      <Table>
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
      <Table style={tableMarginTopStyle}>
        <TBody>
          <TR>
            <TD>
              <p style={descStyle}>
                You receive this email because you are subscribed to <a style={link} href="https://www.remoteleaf.com/">Remote Leaf</a>.
              </p>
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

  jobIndex(job) {
    return (
      <Table>
        <TBody>
          <TR>
            <TD>
              <p style={jobIndexStyle}>{job.id}</p>
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

  jobDetails(job) {
    return (
      <Table>
        <TBody>
          <TR>
            <TD>
              <a style={jobTitleStyle} href={job.link} target='_blank'>{job.title}</a>
              <div>
                <a style={jobMetaDataStyle} href="https://news.ycombinator.com/item?id=15368353">techcrunch.com | points: 500 | comments: 255</a>
              </div>
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

  jobsList(job) {
    return (
      <Table style={jobListStyle} key={job.id}>
        <TBody>
          <TR>
            <TD style={verticalAlignTopStyle}>
              {this.jobIndex(job)}
            </TD>
            <TD>
              {this.jobDetails(job)}
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

  footer() {
    return (
      <Table style={footerStyle}>
        <TBody>
          <TR>
            <TD>
              <p>This mail was sent to <a href="mailto:leaf@remoteLeaf.com">leaf@remoteLeaf.com</a> </p>
            </TD>
          </TR>
          <TR>
            <TD>
              <Table width='100%'>
                <TBody>
                  <TR>
                    <TD>
                      <p style={noMarginTopStyle}>
                        <a style={link} href="https://www.remoteLeaf.com/privacy_policy">Privacy Policy</a> {` | `}
                        <a style={link} href="https://www.remoteLeaf.com/m/NrTYUcEKhRkw4iEkYaj-3Q==/unsubscribe">Instant Unsubscribe</a> {` | `}
                        <a style={link} href="mailto:hello@remoteLeaf.com">leaf@remoteLeaf.com</a>
                      </p>
                    </TD>
                  </TR>
                </TBody>
              </Table>
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

  render() {
    return(
      <Table style={container}>
        <TBody>
          <TR>
            <TD>
              {this.header()}
              {this.description()}
              {data.map(job => this.jobsList(job))}
              {this.footer()}
            </TD>
          </TR>
        </TBody>
      </Table>
    )
  }

}

export default MailTemplate;
