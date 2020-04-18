import React, { Component } from 'react';
import withAuth from './../../hoc/withAuth';
import { Helmet } from 'react-helmet';

export class UnconnectedDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [
        { Name: 'Jane Doe', Tags: 'New client', Recovery_since: '01/14/20', Client_since: '02/29/20', Sober_since: '10 days ago', Last_meeting: '03/13/20', Activity_progress: '0/4'},
        { Name: 'John Smith', Tags: 'New client', Recovery_since: '06/09/19', Client_since: '01/13/20', Sober_since: '30 days ago', Last_meeting: '03/28/20', Activity_progress: '2/4'},
        { Name: 'Jane Doe', Tags: 'Low activity', Recovery_since: '10/23/19', Client_since: '11/25/19', Sober_since: '12 days ago', Last_meeting: '03/15/20', Activity_progress: '0/2'},
        { Name: 'John Smith', Tags: 'Low activity', Recovery_since: '04/20/19', Client_since: '11/04/19', Sober_since: '12 days ago', Last_meeting: '03/17/20', Activity_progress: '0/5'},
        { Name: 'Jane Doe', Tags: 'Upcoming meeting', Recovery_since: '08/05/19', Client_since: '12/11/19', Sober_since: '64 days ago', Last_meeting: '03/23/20', Activity_progress: '2/4'},
        { Name: 'John Smith', Tags: '', Recovery_since: '10/26/19', Client_since: '12/23/19', Sober_since: '42 days ago', Last_meeting: '03/29/20', Activity_progress: '3/3'},
        { Name: 'Jane Doe', Tags: '', Recovery_since: '06/06/19', Client_since: '09/24/19', Sober_since: '93 days ago', Last_meeting: '03/29/20', Activity_progress: '2/5'},
        { Name: 'John Smith', Tags: '', Recovery_since: '04/18/19', Client_since: '05/18/19', Sober_since: '5 days ago', Last_meeting: '03/27/20', Activity_progress: '3/5'},
        { Name: 'Jane Doe', Tags: '', Recovery_since: '04/05/19', Client_since: '05/19/19', Sober_since: '33 days ago', Last_meeting: '03/26/20', Activity_progress: '1/3'},
        { Name: 'John Smith', Tags: '', Recovery_since: '02/10/19', Client_since: '04/23/19', Sober_since: '2 days ago', Last_meeting: '03/29/20', Activity_progress: '4/4'}
      ]
   }
  }

  head() {
    return (
      <Helmet bodyAttributes={{ class: "dashboardPage" }}>
        <title>Dashboard</title>
      </Helmet>
    );
  }

  renderTableData() {
    return this.state.clients.map((client, index) => {
       const { Name, Tags, Recovery_since, Client_since, Sober_since, Last_meeting, Activity_progress } = client //destructuring
       return (
          <tr>
             <td>{Name}</td>
             <td>{Tags}</td>
             <td>{Recovery_since}</td>
             <td>{Client_since}</td>
             <td>{Sober_since}</td>
             <td>{Last_meeting}</td>
             <td>{Activity_progress}</td>
          </tr>
       )
    })
 }

  renderTableHeader() {
    let header = Object.keys(this.state.clients[0])
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  renderTableHeader() {
    let header = Object.keys(this.state.clients[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }


  render() {
    return (
      <div>
        <h2 id='title'>Current Clients:</h2>
          <table id='clients'>
            <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
            </tbody>
          </table>
      </div>
    )
  }
}

export default withAuth(session => session && session.getCurrentUser)(UnconnectedDashboard);