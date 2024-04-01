// capitalize the first letter of all words in a given string
export default function captitalizeString(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}