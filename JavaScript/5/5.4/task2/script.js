const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[findMiddleIndex(styles)] = 'Классика';

console.log(styles.shift());

styles.unshift('Рэп', 'Регги');

console.log(styles);

function findMiddleIndex(arr) {
  return Math.floor(arr.length / 2);
}