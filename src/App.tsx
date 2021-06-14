import React, { useState } from 'react';
import Heading from './components/Heading';
import Select from './components/Select';
import Chart from './components/Chart';
import { strings } from './resources/strings';
import './App.scss';

const mockData = [
  { uv: 345, name: 'tested' },
  { uv: 74, name: 'infected' },
  { uv: 745, name: 'hospitalized' },
];

function App() {
  const [chartType, setChartType] = useState('area');

  return (
    <div className="container-fluid mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-3">
          <Heading text={strings.heading} className="text-center text-uppercase" />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-2 mt-4">
            <Select
              defaultText={strings.deafultSelect}
              optionArea={strings.optionArea}
              optionBar={strings.optionBar}
              optionLine={strings.optionLine}
            />
          </div>
        </div>
      </div>
      <div className=" row d-flex justify-content-center mt-5">
        <Chart color="orange" width={400} height={300} data={mockData} chartType={'area'} />
      </div>
    </div>
  );
}

export default App;
