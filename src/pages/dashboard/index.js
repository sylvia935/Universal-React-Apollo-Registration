import React, { Component } from 'react';
import withAuth from './../../hoc/withAuth';
import { Helmet } from 'react-helmet';

export class UnconnectedDashboard extends Component {

  constructor(props) {
    super(props);
  }

  head() {
    return (
      <Helmet bodyAttributes={{ class: "dashboardPage" }}>
        <title>Dashboard - React Starter Kit</title>
      </Helmet>
    );
  }

  render() {

    return (
      <section className="content_block dashboard" data-test="dashboardComponent">
        {this.head()}

        <div className="grid">

<div className="column column_16_16">
<div className="content_wrap noBoarder">
  <div className="title">Welcome to Volition Dashboard, Neha!</div>
  <p className="desc">
   {'Current Clients:'}
  </p>
</div>
</div>
</div>
 

        <div className="grid">
{/* 
        <div className="column column_16_16">
        <div className="content_wrap noBoarder">
          <div className="title">Welcome to Volition Dashboard, Neha!</div>
          <p className="desc">
           {'Current Clients:'}
          </p>
        </div>
      </div> */}

           {/* <div className="title">Welcome to the Volition Dashboard, Neha!</div>
              <p className="desc">
              {'Current Clients'}
              </p>
            </div>
  */}

          {/* <div className="column column_18_18">
            <div className="content_wrap">
              <div className="title">Welcome to the Volition Dashboard, Neha!</div>
              <p className="desc">
              {'Current Clients'}
              </p>
            </div>
          </div> */}

          <div className="column column_2_14">
            <div className="content_wrap">
              <div className="title">Name</div>
              <p className="desc">
                {`Jane Doe`} 
            
              </p>
              <p className="desc">
                {'John Smith'}
              </p>
            </div>
          </div>

          {/* <div className="column column_2_14">
            <div className="content_wrap">
              <div className="title">Tags</div>
              <p className="desc">
                {`New Client`} 
            
              </p>
              <p className="desc">
                {'Low Engagement'}
              </p>
            </div>
          </div> */}

          <div className="column column_2_14">
            <div className="content_wrap">
              <div className="title">Recovery Since</div>
              <p className="desc">
                {`Jan-14-2020`} 
            
              </p>
              <p className="desc">
                {'Jun-09-2019'}
              </p>
            </div>
          </div>

          <div className="column column_2_14">
            <div className="content_wrap">
              <div className="title">Client Since</div>
              <p className="desc">
                {`Feb-29-2020`} 
            
              </p>
              <p className="desc">
                {'Jan-13-2020'}
              </p>
            </div>
          </div>

          <div className="column column_2_14">
            <div className="content_wrap">
              <div className="title">Sober Since</div>
              <p className="desc">
                {`10 Days Ago`} 
            
              </p>
              <p className="desc">
                {'30 Days Ago'}
              </p>
            </div>
          </div>

          <div className="column column_2_14">
            <div className="content_wrap">
              <div className="title">Last Meeting</div>
              <p className="desc">
                {`Feb-19-2020`} 
            
              </p>
              <p className="desc">
                {'Feb-28-2020'}
              </p>
            </div>
          </div>


          <div className="column column_2_14">
            <div className="content_wrap">
              <div className="title">Activity</div>
              <p className="desc">
                {`0/4`} 
            
              </p>
              <p className="desc">
                {'2/4'}
              </p>
            </div>
          </div>

        </div>

      </section>
    );

  }

}

export default withAuth(session => session && session.getCurrentUser)(UnconnectedDashboard);


// // import React, { Component } from 'react';
// // import withAuth from './../../hoc/withAuth';
// // import { Helmet } from 'react-helmet';

// // export class UnconnectedDashboard extends Component {

// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       clients: [
// //          { Name: 'Jane Doe', Tags: 'New client', Recovery_since: '01/14/20', Client_since: '02/29/20', Sober_since: '10 days ago', Last_meeting: '03/13/20', Activity_progress: '0/4'},
// //          { Name: 'John Smith', Tags: 'New client', Recovery_since: '06/09/19', Client_since: '01/13/20', Sober_since: '30 days ago', Last_meeting: '03/28/20', Activity_progress: '2/4'},
// //          { Name: 'Jane Doe', Tags: 'Low activity', Recovery_since: '10/23/19', Client_since: '11/25/19', Sober_since: '12 days ago', Last_meeting: '03/15/20', Activity_progress: '0/2'},
// //          { Name: 'John Smith', Tags: 'Low activity', Recovery_since: '04/20/19', Client_since: '11/04/19', Sober_since: '12 days ago', Last_meeting: '03/17/20', Activity_progress: '0/5'},
// //          { Name: 'Jane Doe', Tags: 'Upcoming meeting', Recovery_since: '08/05/19', Client_since: '12/11/19', Sober_since: '64 days ago', Last_meeting: '03/23/20', Activity_progress: '2/4'},
// //          { Name: 'John Smith', Tags: '', Recovery_since: '10/26/19', Client_since: '12/23/19', Sober_since: '42 days ago', Last_meeting: '03/29/20', Activity_progress: '3/3'},
// //          { Name: 'Jane Doe', Tags: '', Recovery_since: '06/06/19', Client_since: '09/24/19', Sober_since: '93 days ago', Last_meeting: '03/29/20', Activity_progress: '2/5'},
// //          { Name: 'John Smith', Tags: '', Recovery_since: '04/18/19', Client_since: '05/18/19', Sober_since: '5 days ago', Last_meeting: '03/27/20', Activity_progress: '3/5'},
// //          { Name: 'Jane Doe', Tags: '', Recovery_since: '04/05/19', Client_since: '05/19/19', Sober_since: '33 days ago', Last_meeting: '03/26/20', Activity_progress: '1/3'},
// //          { Name: 'John Smith', Tags: '', Recovery_since: '02/10/19', Client_since: '04/23/19', Sober_since: '2 days ago', Last_meeting: '03/29/20', Activity_progress: '4/4'}
// //       ]
// //    }
// // }


// //   head() {
// //     return (
// //       <Helmet bodyAttributes={{ class: "dashboardPage" }}>
// //         <title>Dashboard - React Starter Kit</title>
// //       </Helmet>
// //     );
// //   }

// //   renderTableData() {
// //     return this.state.clients.map((client, index) => {
// //        const { Name, Tags, Recovery_since, Client_since, Sober_since, Last_meeting, Activity_progress } = client //destructuring
// //        return (
// //           <tr>
// //              <td>{Name}</td>
// //              <td>{Tags}</td>
// //              <td>{Recovery_since}</td>
// //              <td>{Client_since}</td>
// //              <td>{Sober_since}</td>
// //              <td>{Last_meeting}</td>
// //              <td>{Activity_progress}</td>
// //           </tr>
// //        )
// //     })
// //  }

// // renderTableHeader() {
// //     let header = Object.keys(this.state.clients[0])
// //     return header.map((key, index) => {
// //        return <th key={index}>{key}</th>
// //     })
// //  }

// //   render() {

// //     return (
// //       <div>
// //          <table id='clients'>
// //             <tbody>
// //                <tr>{this.renderTableHeader()}</tr>
// //                {this.renderTableData()}
// //             </tbody>
// //          </table>
// //       </div>
// //    )

// //   //   return (
// //   //     <section className="content_block dashboard" data-test="dashboardComponent">
// //   //       {this.head()}
// //   //       <div className="grid">

// //   //         <div className="column column_12_12">
// //   //           <div className="content_wrap">
// //   //             <div className="title">What is Lorem Ipsum?</div>
// //   //             <p className="desc">
// //   //               ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
// //   //             </p>
// //   //           </div>
// //   //         </div>

// //   //         <div className="column column_4_12">
// //   //           <div className="content_wrap">
// //   //             <div className="title">What is Lorem Ipsum?</div>
// //   //             <p className="desc">
// //   //               ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
// //   //             </p>
// //   //           </div>
// //   //         </div>

// //   //         <div className="column column_4_12">
// //   //           <div className="content_wrap">
// //   //             <div className="title">What is Lorem Ipsum?</div>
// //   //             <p className="desc">
// //   //               ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
// //   //             </p>
// //   //           </div>
// //   //         </div>

// //   //         <div className="column column_4_12">
// //   //           <div className="content_wrap">
// //   //             <div className="title">What is Lorem Ipsum?</div>
// //   //             <p className="desc">
// //   //               ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
// //   //             </p>
// //   //           </div>
// //   //         </div>

// //   //       </div>

// //   //     </section>
// //   //   );

// //   // }

// // }

// // export default withAuth(session => session && session.getCurrentUser)(UnconnectedDashboard);

// import React, { Component } from 'react';
// import withAuth from './../../hoc/withAuth';
// import { Helmet } from 'react-helmet';

// export class UnconnectedDashboard extends Component {

//   constructor(props) {
//     super(props);
//   }

//   head() {
//     return (
//       <Helmet bodyAttributes={{ class: "dashboardPage" }}>
//         <title>Dashboard - React Starter Kit</title>
//       </Helmet>
//     );
//   }

//   render() {

//     return (
//       <section className="content_block dashboard" data-test="dashboardComponent">
//         {this.head()}
//         <div className="grid">

//           <div className="column column_12_12">
//             <div className="content_wrap">
//               <div className="title">What is Lorem Ipsum?</div>
//               <p className="desc">
//                 ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
//               </p>
//             </div>
//           </div>

//           <div className="column column_4_12">
//             <div className="content_wrap">
//               <div className="title">What is Lorem Ipsum?</div>
//               <p className="desc">
//                 ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
//               </p>
//             </div>
//           </div>

//           <div className="column column_4_12">
//             <div className="content_wrap">
//               <div className="title">What is Lorem Ipsum?</div>
//               <p className="desc">
//                 ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
//               </p>
//             </div>
//           </div>

//           <div className="column column_4_12">
//             <div className="content_wrap">
//               <div className="title">What is Lorem Ipsum?</div>
//               <p className="desc">
//                 ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
//               </p>
//             </div>
//           </div>

//         </div>

//       </section>
//     );

//   }

// }

// export default withAuth(session => session && session.getCurrentUser)(UnconnectedDashboard);