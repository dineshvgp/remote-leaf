import React, {Component} from 'react';
import Oy from 'oy-vey';
import logo from './logo.png'

const {Table, TBody, TR, TD} = Oy;


const container = {
  width: '575px',
  margin: '0 auto',
  border: '1px solid #E4E7E9',
  padding: '20px 50px',
  borderRadius: '0 0 4px 4px',
  borderTop: 'none'
};

const containerTop = {
  width: '573px',
  margin: '0px auto',
  border: '1px solid #E4E7E9',
  borderRadius: '4px 4px 0 0',
  height: '24px',
  position: 'relative',
  backgroundColor: '#F1F4F7'
}

const logoStyle = {
  width: '330px'
}

const headerStyle = {
  fontSize: '60px',
  textAlign: 'center',
  background: '-webkit-linear-gradient(right, #3dca72, #228004)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
  fontFamily: '"IM Fell DW Pica SC", serif'
};

const listHashContainer = {
  margin: '0 0 0 10px'
};

const listHash = {
  color: 'gray',
  textDecoration: 'none'
};

const link = {
  color: '#228004',
  textDecoration: 'none',
  fontWeight: '400'
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
  marginTop: '3px',
  width: '15px'
};

const jobTitleStyle = {
  ...link,
  fontSize: '17px'
};

const jobMetaDataStyle = {
  ...link
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
  title: 'Sr. Javascript Developer',
  link: 'https://kodify.recruitee.com/o/senior-frontend-developer-react-architect',
  company: 'Sticker Mule',
  salary: '$90k - 115k',
  location: 'Anywhere',
  category: 'Javascript'
}, {
  id: 2,
  title: 'Software Engineer, Front End',
  link: 'https://stackoverflow.com/jobs/154079/senior-machine-learning-software-engineer-stardog-union?so=p&pg=2&offset=24&r=true',
  company: 'YouEarnedIt',
  salary: '£45k - 50k',
  location: 'US',
  category: 'Frontend'
}, {
  id: 3,
  title: 'Full Stack Developer',
  link: 'https://stackoverflow.com/jobs/154331/cloud-solution-engineer-dito?so=p&pg=1&offset=4&r=true',
  company: 'Countly',
  salary: '$24K – $36K',
  location: 'Europe',
  category: 'Fullstack, Javascript'
}, {
  id: 4,
  title: 'Project Manager',
  link: 'https://stackoverflow.com/jobs/157141/drupal-php-developer-with-mobile-experience-accella?so=p&pg=1&offset=15&r=true',
  company: 'Cornershop Creative',
  salary: '$50,000 - $70,000',
  location: 'US',
  category: 'Product'
}, {
  id: 5,
  title: 'Senior Product Engineer',
  link: 'https://stackoverflow.com/jobs/apply/158507?reset=False',
  company: 'Buffer',
  location: 'Anywhere',
  category: 'Product, Php, Javascript'
}, {
  id: 6,
  title: 'Senior Developer / Full-Stack / Rails',
  link: 'https://stackoverflow.com/jobs/159428/mid-senior-front-end-web-developer-react-redux-seven-hills-consulting-inc?med=clc',
  company: 'Panda Strike',
  salary: '$100k - 145k',
  location: 'US',
  category: 'Fullstack, Ruby, Javascript'
}, {
  id: 7,
  title: 'Product Manager',
  link: 'https://stackoverflow.com/jobs/128492/security-engineer-java-elastic-leading-open-elastic?so=p&pg=2&offset=10&r=true',
  company: 'OpenLaw',
  salary: '$100k - 120k | Equity',
  location: 'Anywhere',
  category: 'Product'
}, {
  id: 8,
  title: 'Front end lead developer for transportation analytics software startup',
  link: 'https://stackoverflow.com/jobs/41305/front-end-engineer-at-successful-edtech-startup-homer-learning',
  company: 'Alar software llc',
  location: 'US',
  category: 'Frontend'
}, {
  id: 9,
  title: 'Senior Product Designer ',
  link: 'https://stackoverflow.com/jobs/156126/ui-engineering-manager-leading-open-source-elastic',
  company: 'Kindrid',
  location: 'US',
  category: 'Product, Frontend'
}, {
  id: '10',
  title: 'Fullstack Engineer',
  link: 'https://stackoverflow.com/jobs/107608/senior-lead-qa-test-engineer-compucorp?so=p&pg=1&offset=14&r=true',
  company: 'Pomello',
  salary: '$100K – $150K',
  location: 'US',
  category: 'Fullstack, Javascript'
}]

class MailTemplate extends Component {

  header() {
    return (
      <Table>
        <TBody>
          <TR>
            <TD>
              <img style={logoStyle} src={logo} />
              <p style={listHashContainer}>
                <span style={listHash}>May 02, 2018</span>
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
                Here are the few companies hiring for the fullstack, frontend, product categories and accepting applications from The United States.
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
                <a style={jobMetaDataStyle} href={job.link}>{job.company} </a>
                | {job.salary && <span>Salary: {job.salary} |</span>} Location: {job.location} | {job.category}
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
              <p>This mail was sent to <a href="mailto:leaf@remoteLeaf.com">hello@remoteleaf.com</a> </p>
            </TD>
          </TR>
          <TR>
            <TD>
              <Table width='100%'>
                <TBody>
                  <TR>
                    <TD>
                      <p style={noMarginTopStyle}>
                        Please reply to this email if you have any questions.
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
    const circle = {
      width: '10px',
      height: '10px',
      WebkitBorderRadius: '25px',
      MozBorderRadius: '25px',
      borderRadius: '25px',
      backgroundColor: '#E5E9EC',
      marginLeft: '5px',
      top: '7px',
      position: 'absolute'
    }

    const circle2 = {
      ...circle,

      marginLeft: '20px'
    }
    const circle3 = {
      ...circle,
      marginLeft: '35px'
    }
    return(
      [
        <div style={containerTop} key='titleBar'>
          <div style={circle}></div>
          <div style={circle2}></div>
          <div style={circle3}></div>
        </div>,
        <Table style={container} key='body'>
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
]    )
  }

}

export default MailTemplate;
