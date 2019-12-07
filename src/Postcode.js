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
    const district = districtMatch[0].toUpperCase();

    const region = policy.options.find(o => o.districts && o.districts.includes(district));

    if (!region) {
      setError('Postcode not found');
      return false;
    }
    setError('');
    return inc(e, region.answer, region.text, policy.name);
  }

  return (
    <div className="postcode-wrap">
      <h3>Enter the first half of your postcode:</h3>
      <form onSubmit={lookup}>
        <input type="text" name="postcode" />
        <input type="submit" value="SHOW ME MY MANIFESTO"/>
      </form>
      {error &&
        <p className="postcode-error">{error}</p>
      }
    </div>
  );
}

export default Postcode;
