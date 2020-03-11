import {createContext} from 'react';

const UserContext = createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},

})

export default UserContext;