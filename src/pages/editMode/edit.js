/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch.js';
import './styleEdit.css';
function Edit() {
  var idSkill = 13;
  const {
    error,
    loading,
    data: skills,
  } = useFetch('http://localhost:4000/skills');
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  const skillList = skills.map(({ id, value, name }) => {
    idSkill = id;
  });
  idSkill++;
  fetch('http://localhost:4000/skills', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: idSkill,
      name: 'skill'+idSkill,
      value: idSkill,
    }),
  });

  console.log(idSkill);
  return <></>;
}

export default Edit;
