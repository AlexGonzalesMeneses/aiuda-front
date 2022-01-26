/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch.js';
import './styleEdit.css';
function Edit() {
  const {
    error,
    loading,
    data: skills,
   } = useFetch('http://localhost:4000/skills');
   var id = 13;
   fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  });
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const skillList = skills.map(({ id, value, name }) => {
    return (
      <li key={id} className="editItem">
        <input className="inputText" type="text" placeholder={name} />
        <input className="inputText" type="text" placeholder={value} />
      </li>
    );
  });

  return (
    <>
      <div className="editSkill">
        <form>
          <h1 className="h1-Text">Dev skills</h1>
          <ul className="skillList">{skillList}</ul>
        </form>
      </div>
    </>
  );
}

export default Edit;
