// Declarate Function
const InitialData = () => (
  JSON.parse(localStorage.getItem('NOTES_APP')) ? JSON.parse(localStorage.getItem('NOTES_APP')) : []
);

// Export Function
export default InitialData;
  