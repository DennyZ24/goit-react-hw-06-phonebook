export const findAndAddContact = (state, payload) => {
  if (state.find(contact=> contact.name.includes(payload.name))) {
    window.alert(`${payload.name} уже есть в списке контактов`)
    return 
  } 

  return [...state, payload];
};