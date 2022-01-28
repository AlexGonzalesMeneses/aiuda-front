import { useState } from 'react';

export default function useInformation() {
  const [state, setState] = useState({
    loginModal: false,
    username: localStorage.getItem('user') || '',
    works: [],
    error: null,
    loading: false,
    workModal: false,
  });

  const loadWorks = () => {
    fetch('http://localhost:4000/works')
      .then(res => res.json())
      .then(res => {
        setState({
          ...state,
          works: res,
          loading: false,
        });
      })
      .catch(error => {
        setState({
          ...state,
          error,
          loading: false,
        });
      });
  };

  const removeWork = id => {
    fetch(`http://localhost:4000/works/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(console.log);

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

    fetch('http://localhost:4000/works', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newWork),
    })
      .then(() => {
        setState({
          ...state,
          workModal: false,
          works: [newWork, ...state.works],
        });
      })
      .catch(console.log);
  };

  return {
    state,
    setState,
    loadWorks,
    removeWork,
    addWork,
  };
}
