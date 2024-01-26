// import './Info.css';
// import * as React from 'react';
// import { useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
// import 'animate.css';

// function Info() {
//   const [expandedPanel, setExpandedPanel] = useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpandedPanel(isExpanded ? panel : null);
//   };
//   return (

//     <div className="App" role='main' >
//       <div className="App-header ">
//         <h2>
//          info
//         </h2>
//         <div className='infoTabla'>
//           <Accordion
//             expanded={expandedPanel === 'panel1'}
//             onChange={handleChange('panel1')}
//             aria-labelledby="panel1-header"
//             role="region"
//             aria-controls="panel1-content"
  
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon tabIndex={expandedPanel === 'panel1' ? 0 : -1} className='boton animate_animated'/>}
//               aria-expanded={expandedPanel === 'panel1'}
//               id="panel1-header"
              
//             >
//               <h3 className='animated_animate'>Full-Stack Developer</h3>
//             </AccordionSummary>
//             <AccordionDetails className='panelInfo' id="panel1-content" aria-describedby="panel1-header"  aria-hidden={expandedPanel !== 'panel1'} tabIndex={expandedPanel === 'panel1' ? 0 : -1}>
//          <p>Hi! I'm Mayra, Full-Stack Developer.Como desarrolladora busco aprender constantemente y mejorar mi desempeño. Mi stack es MERN, tengo conocimientos de big data,y un gran interes en la accesibilidad web, lo que me llevó a aprender al respecto, y en este portfolio he aplicado mucho de eso. Considero que entre lo mas importante de ser desarrollador, esta el poder crear cosas que faciliten y aporten a la vida diaria, entonces deben ser dirigido a la mayor cantidad de personas posible, mas alla de sus habilidades. </p>                                        
//             </AccordionDetails>
//           </Accordion>
//           <Accordion
//             expanded={expandedPanel === 'panel2'}
//             onChange={handleChange('panel1')}
//             aria-labelledby="panel1-header"
//             role="region"
//             aria-controls="panel-content"
  
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon tabIndex={expandedPanel === 'panel1' ? 0 : -1} className='boton animate_animated'/>}
//               aria-expanded={expandedPanel === 'panel1'}
//               id="panel1-header"
              
//             >
//               <h3 className='animated_animate'>Full-Stack Developer</h3>
//             </AccordionSummary>
//             <AccordionDetails className='panelInfo' id="panel1-content" aria-describedby="panel1-header"  aria-hidden={expandedPanel !== 'panel1'} tabIndex={expandedPanel === 'panel1' ? 0 : -1}>
//          <p>Hi! I'm Mayra, Full-Stack Developer.Como desarrolladora busco aprender constantemente y mejorar mi desempeño. Mi stack es MERN, tengo conocimientos de big data,y un gran interes en la accesibilidad web, lo que me llevó a aprender al respecto, y en este portfolio he aplicado mucho de eso. Considero que entre lo mas importante de ser desarrollador, esta el poder crear cosas que faciliten y aporten a la vida diaria, entonces deben ser dirigido a la mayor cantidad de personas posible, mas alla de sus habilidades. </p>                                        
//             </AccordionDetails>
//           </Accordion>
//           <Accordion
//             expanded={expandedPanel === 'panel1'}
//             onChange={handleChange('panel1')}
//             aria-labelledby="panel1-header"
//             role="region"
//             aria-controls="panel1-content"
  
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon tabIndex={expandedPanel === 'panel1' ? 0 : -1} className='boton animate_animated'/>}
//               aria-expanded={expandedPanel === 'panel1'}
//               id="panel1-header"
              
//             >
//               <h3 className='animated_animate'>Full-Stack Developer</h3>
//             </AccordionSummary>
//             <AccordionDetails className='panelInfo' id="panel1-content" aria-describedby="panel1-header"  aria-hidden={expandedPanel !== 'panel1'} tabIndex={expandedPanel === 'panel1' ? 0 : -1}>
//          <p>Hi! I'm Mayra, Full-Stack Developer.Como desarrolladora busco aprender constantemente y mejorar mi desempeño. Mi stack es MERN, tengo conocimientos de big data,y un gran interes en la accesibilidad web, lo que me llevó a aprender al respecto, y en este portfolio he aplicado mucho de eso. Considero que entre lo mas importante de ser desarrollador, esta el poder crear cosas que faciliten y aporten a la vida diaria, entonces deben ser dirigido a la mayor cantidad de personas posible, mas alla de sus habilidades. </p>                                        
//             </AccordionDetails>
//           </Accordion>
//         </div>
        
//       </div>
//     </div>
    
//   );
// }
// export default Info;
import './Info.css';
import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'animate.css';

function Info() {
  const [expandedPanels, setExpandedPanels] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanels((prevPanels) => {
      if (isExpanded) {
        return [...prevPanels, panel];
      } else {
        return prevPanels.filter((p) => p !== panel);
      }
    });
  };

  return (
    <div className="App" role='main'>
      <div className="App-header">
        <h2>info</h2>
        <div className='infoTabla'>
          <Accordion
            expanded={expandedPanels.includes('panel1')}
            onChange={handleChange('panel1')}
            aria-labelledby="panel1-header"
            role="region"
            aria-controls="panel1-content"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon tabIndex={expandedPanels.includes('panel1') ? 0 : -1} className='boton animate_animated'/>}
              aria-expanded={expandedPanels.includes('panel1')}
              id="panel1-header"
            >
              <h3 className='animated_animate'>Panel 1</h3>
            </AccordionSummary>
            <AccordionDetails className='panelInfo' id="panel1-content" aria-describedby="panel1-header"  aria-hidden={!expandedPanels.includes('panel1')} tabIndex={expandedPanels.includes('panel1') ? 0 : -1}>
              <p>Content for the first accordion panel.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedPanels.includes('panel2')}
            onChange={handleChange('panel2')}
            aria-labelledby="panel2-header"
            role="region"
            aria-controls="panel2-content"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon tabIndex={expandedPanels.includes('panel2') ? 0 : -1} className='boton animate_animated'/>}
              aria-expanded={expandedPanels.includes('panel2')}
               id="panel1-header"
            >
              <h3 className='animated_animate'>Panel 2</h3>
            </AccordionSummary>
            <AccordionDetails className='panelInfo' id="panel2-content" aria-describedby="panel2-header"  aria-hidden={!expandedPanels.includes('panel2')} tabIndex={expandedPanels.includes('panel2') ? 0 : -1}>
              <p>Content for the second accordion panel.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedPanels.includes('panel3')}
            onChange={handleChange('panel3')}
            aria-labelledby="panel3-header"
            role="region"
            aria-controls="panel3-content"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon tabIndex={expandedPanels.includes('panel3') ? 0 : -1} className='boton animate_animated'/>}
              aria-expanded={expandedPanels.includes('panel3')}
              id="panel1-header"
            >
              <h3 className='animated_animate'>Panel 3</h3>
            </AccordionSummary>
            <AccordionDetails className='panelInfo' id="panel3-content" aria-describedby="panel3-header"  aria-hidden={!expandedPanels.includes('panel3')} tabIndex={expandedPanels.includes('panel3') ? 0 : -1}>
              <p>Content for the third accordion panel.</p>
            </AccordionDetails>
          </Accordion>

          {/* Puedes agregar más accordions según sea necesario */}
        </div>
      </div>
    </div>
  );
}

export default Info;
