if (!localStorage.getItem('data')) {
  const data = {
    general: {
      name: '',
      email: '',
      phone: ''
    },
    educational: {
      institution: '',
      title: '',
      start: '',
      finish: ''
    },
    practical: {
      company: '',
      position: '',
      mainTask: '',
      start: '',
      finish: ''
    }
  };

  localStorage.setItem('data', JSON.stringify(data));
}

function getData(key) {
  if (localStorage.getItem(key))
    return JSON.parse(localStorage.getItem(key));
}

function setData(key, data) {
  if (!key || !data) return;

  localStorage.setItem(key, JSON.stringify(data));
}

export { getData, setData };