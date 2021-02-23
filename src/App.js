import React, { useState } from 'react';
import Header from './header/Header';
import styles from './app.module.css';
import Person from './Person/Person';


const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Health and Welfare Council of Long Island (HWCLI)', description: 'The mission of the Health and Welfare Council of Long Island (HWCLI) is to serve...'},
      {name: 'Ellenville Regional Hospital', description: 'ERH is a non-profit, community focused hospital based in New York’s Hudson Valley. They support local community with health...'},
      {name: 'New York City Department of Transport (NYCDOT)', description: 'The Citywide Concrete Operation Management System (COM) was developed for NYC DOT to achieve the following business objectives:...'}
    ]
  });



  const descriptionHandler = () => {
    setPersonState({
      persons: [
        {name: 'Health and Welfare Council of Long Island (HWCLI)', description: 'The mission of the Health and Welfare Council of Long Island (HWCLI) is to serve the poor and vulnerable people on Long Island by convening, representing, and supporting the organizations that serve them; and through illuminating the issues that critically impact them; organizing community and regional responses to their needs; advocacy; research; policy analysis and providing services, information and education. Since 1947, HWCLI has served as the umbrella for health and human service agencies serving Long Island’s families. As a regional human service provider, convener and leader with a 200 organization network, HWCLI responds to needs through direct services and advocacy.'},
      {name: 'Ellenville Regional Hospital', description: 'ERH is a non-profit, community focused hospital based in New York’s Hudson Valley. They support local community with health, wellness, specialty services and readily available diagnostic testing. They are centrally located for residents in surrounding areas to access their subacute rehabilitation programs, specialists and ambulatory services.'},
      {name: 'New York City Department of Transport (NYCDOT)', description: 'The Citywide Concrete Operation Management System (COM) was developed for NYC DOT to achieve the following business objectives-a. paperless process for capturing gang sheet information that is generated by Citywide Construction (CWC) crews each day for Executive Level review, project deliverables, expenditures, and Freedom of Information Law requests      b. Streamlined workflow for managing projects such as pedestrian ramp construction and other related in house work pertaining to the ongoing litigation pertaining to the City of New York and Eastern Paralyzed Veterans Association as well as Mayoral Initiatives   c. Automated process for calculating project costs for reimbursements to streamline budgetary vouchering process reducing time while increasing preparedness and efficiency.'}
      ]
    }) 

  }

    return(
      <div className={`${styles.personWrap}`}>
        <Header />
        <Person name={personState.persons[0].name} description={personState.persons[0].description} />
        <Person name={personState.persons[1].name} description={personState.persons[1].description} />
        <Person name={personState.persons[2].name} description={personState.persons[2].description} />
        <button onClick={descriptionHandler} className={`${styles.buttonPrimary}`}>View Full Description</button>
      </div>
    );
  }


  


export default App;

