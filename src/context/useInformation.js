import { useState } from 'react';
import db from '../db';

export default function useInformation() {
  const [state, setState] = useState({
    ...db,
    loginModal: false,
    username: localStorage.getItem('user') || '',
    error: null,
    loading: false,
    workModal: false,
    workElement: null,
  });

  const removeWork = id => {
    setState({
      ...state,
      works: state.works.filter(work => work.id !== id),
    });
  };

  const addWork = work => {
    const newWork = {
      id: Date.now(),
      ...work,
    };
    setState({ ...state, workModal: false, works: [...state.works, newWork] });
  };

  const openWorkModal = () => {
    setState({ ...state, workModal: true });
  };

  const clearWorkElement = () => {
    setState({ ...state, workElement: null });
  };

  const setWorkElement = payload => {
    setState({
      ...state,
      workModal: true,
      workElement: payload,
    });
  };

  const updateWork = work => {
    setState({
      ...state,
      works: state.works.map(item => (item.id === work.id ? work : item)),
      workModal: false,
    });
  };

  const removeProject = id => {
    setState({
      ...state,
      projects: state.projects.filter(project => project.id !== id),
    });
  };

  const removeSkill = id => {
    setState({
      ...state,
      skills: state.skills.filter(skill => skill.id !== id),
    });
  };
  return {
    state,
    setState,
    removeWork,
    addWork,
    setWorkElement,
    updateWork,
    clearWorkElement,
    openWorkModal,
    removeProject,
    removeSkill,
  };
}
