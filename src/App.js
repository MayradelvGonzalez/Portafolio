import LogoB from './assets/logoGifGris.gif';
import './App.css';
import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


function App() {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };
  return (

    <div className="App" role='main'>
      <div className="App-header">
        <h2>
          Mayra del Valle González
        </h2>
        <div className='InfoTitulo'>
          <Accordion
            expanded={expandedPanel === 'panel1'}
            onChange={handleChange('panel1')}
            aria-labelledby="panel1-header"
            role="region"
            aria-controls="panel1-content"
  
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon tabIndex={expandedPanel === 'panel1' ? 0 : -1} className='boton'/>}
              aria-expanded={expandedPanel === 'panel1'}
              id="panel1-header"
            >
              <h3>Full-Stack Developer</h3>
            </AccordionSummary>
            <AccordionDetails className='panelInfo' id="panel1-content" aria-describedby="panel1-header"  aria-hidden={expandedPanel !== 'panel1'} tabIndex={expandedPanel === 'panel1' ? 0 : -1}>
          Hi! I'm Mayra, Full-Stack Developer.Como desarrolladora busco aprender constantemente y mejorar mi desempeño. Mi stack es MERN, tengo conocimientos de big data,y un gran interes en la accesibilidad web, lo que me llevó a aprender al respecto, y en este portfolio he aplicado mucho de eso. Considero que entre lo mas importante de ser desarrollador, esta el poder crear cosas que faciliten y aporten a la vida diaria, entonces deben ser dirigido a la mayor cantidad de personas posible, mas alla de sus habilidades.                                                
            </AccordionDetails>
          </Accordion>
        </div>
        <img src={LogoB} className="App-logo" alt="logo de la página" aria-label='Logo de la página' />
      </div>
    </div>
  );
}
export default App;
