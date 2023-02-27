// Define your data model
let data = [
    { id: 1, RecipeName: "Chicken" },
    { id: 2, RecipeName: "Mutton" },
    { id: 3, RecipeName: "Fish" },
  ];
  
  // Function to create new data
  function createRecord(record) {
    record.id = data.length + 1;
    data.push(record);
  }
  
  // Function to read data
  function readData(id) {
    if (id) {
      return data.find((record) => record.id === id);
    } else {
      return data;
    }
  }
  
  // Function to update data
  function updateRecord(id, newData) {
    const recordIndex = data.findIndex((record) => record.id === id);
    if (recordIndex !== -1) {
      data[recordIndex] = { ...data[recordIndex], ...newData };
    }
  }
  
  // Function to delete data
  function deleteRecord(id) {
    const recordIndex = data.findIndex((record) => record.id === id);
    if (recordIndex !== -1) {
      data.splice(recordIndex, 1);
    }
  }