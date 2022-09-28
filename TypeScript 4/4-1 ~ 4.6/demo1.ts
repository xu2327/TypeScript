/**
 *todo  枚举泛型
 */
enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}

// enum Status {
//   OFFLINE,
//   ONLINE = 4,  // 给默认值 后面回依次加一
//   DELETED,
// }

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// };

console.log(Status.OFFLINE, Status.ONLINE, Status.DELETED); // 0 1 2
console.log(Status[0], Status[1], Status[2]); // OFFLINE ONLINE DELETED

function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}

const result = getResult(Status.OFFLINE);
console.log(result);
