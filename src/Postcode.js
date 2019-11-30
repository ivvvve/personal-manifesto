import React, { useState } from 'react';

function Postcode({policy, inc}) {
  const [error, setError] = useState('');

  const lookup = (e) => {
    e.preventDefault();
    const postcode = e.target[0].value;
    const districtMatch = postcode.match(/(^[a-zA-Z][a-zA-Z]?)/);
    if (!districtMatch) {
      setError('Postcode not found');
      return false;
    }
    const district = districtMatch[0];

    const region = policy.options.find(o => o.districts && o.districts.includes(district));

    if (!region) {
      setError('Postcode not found');
    }
    setError('');
    return inc(e, region.answer, region.text, policy.name);
  }

  return (
    <div>
      <h3>Enter your postcode to find policies about your region:</h3>
      {error &&
        <p className="postcode-error">{error}</p>
      }
      <form onSubmit={lookup}>
        <input type="text" name="postcode" />
        <input type="submit" value="Search"/>
      </form>
      <h3>Or select your region</h3>
    </div>
  );
}

export default Postcode;
