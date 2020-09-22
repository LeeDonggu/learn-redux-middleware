const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본구조
  console.group(action && action.type); // 액션 타입으로 log를 그룹화함
  console.log("이전 상태", store.getState());
  console.log("이전 액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;

// 화살표 함수가 아닌 일반 함수로 구현한 경우
// const loggerMiddleware = function loggerMiddleware(stores) {
//   return function (next) {
//     return function (action) {
//       // 미들웨어 기본구조
//     };
//   };
// };
