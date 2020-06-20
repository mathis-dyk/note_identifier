import { notesCorrespondance, englishNotes } from 'data/notes'
// import { }

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomNoteFr = () => {
  return notesCorrespondance[englishNotes[Math.floor(Math.random() * englishNotes.length)]]
}

// export const noteFrToImg = {
//   "do": "do",
//   "do#": "do",
//   "re": "do",
//   "re#": "do",
//   "mi": "do",
//   "fa": "do",
//   "fa#": "do",
//   "sol": "do",
//   "sol#": "do",
//   "la": "do",
//   "la#": "do",
//   "si": "do",
// }

// export const handleErrors = (response) => {
//     if (!response.ok) {
//         throw Error(response);
//     }
//     return response;
// }
