import moment from 'moment';

var greet = (who) => {
  console.log(`Hola, ${who}!`);
  console.log(`It's ${moment().format('h:mm:ss a')}!`);
}
export default greet;
