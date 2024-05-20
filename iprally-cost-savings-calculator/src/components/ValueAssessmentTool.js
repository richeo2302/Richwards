import React, { useState } from 'react';

const initialData = {
  companyType: '',
  roleInCompany: '',
  searchFrequency: '',
  searchType: '',
  outsourcedSpend: '',
  timeForResults: '',
  litigations: '',
  ptabs: '',
  currentPerformance: '',
};

function ValueAssessmentTool() {
  const [formData, setFormData] = useState(initialData);
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults();
  };

  const calculateResults = () => {
    const timeSaved = formData.searchType === 'Patentability' ? '75%' : '50%';
    const costSaved = formData.searchType === 'FTO' ? '30%' : '20%';
    const riskReduced = parseInt(formData.litigations) > 5 ? '20%' : '10%';

    setResults({
      timeSaved,
      costSaved,
      riskReduced,
    });
  };

  return (
    <div>
      <h1>IPRally Value Assessment Tool</h1>
      {!results ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Type:</label>
            <input type="text" name="companyType" value={formData.companyType} onChange={handleChange} />
          </div>
          <div>
            <label>Role in Company:</label>
            <input type="text" name="roleInCompany" value={formData.roleInCompany} onChange={handleChange} />
          </div>
          <div>
            <label>Search Frequency:</label>
            <input type="text" name="searchFrequency" value={formData.searchFrequency} onChange={handleChange} />
          </div>
          <div>
            <label>Search Type:</label>
            <input type="text" name="searchType" value={formData.searchType} onChange={handleChange} />
          </div>
          <div>
            <label>Outsourced Search Spend:</label>
            <input type="text" name="outsourcedSpend" value={formData.outsourcedSpend} onChange={handleChange} />
          </div>
          <div>
            <label>Time Taken for Results:</label>
            <input type="text" name="timeForResults" value={formData.timeForResults} onChange={handleChange} />
          </div>
          <div>
            <label>Number of Litigations:</label>
            <input type="text" name="litigations" value={formData.litigations} onChange={handleChange} />
          </div>
          <div>
            <label>Number of PTABs/Oppositions:</label>
            <input type="text" name="ptabs" value={formData.ptabs} onChange={handleChange} />
          </div>
          <div>
            <label>Current Performance Metrics:</label>
            <input type="text" name="currentPerformance" value={formData.currentPerformance} onChange={handleChange} />
          </div>
          <button type="submit">Calculate Benefits</button>
        </form>
      ) : (
        <div>
          <h2>Results</h2>
          <p>Time Saved: {results.timeSaved}</p>
          <p>Cost Saved: {results.costSaved}</p>
          <p>Risk Reduced: {results.riskReduced}</p>
          <button onClick={() => setResults(null)}>Start Over</button>
        </div>
      )}
    </div>
  );
}

export default ValueAssessmentTool;
