// import { Middleware } from "redux";
// import { RootState } from "./store";
// import { loginSuccess, loginFailure } from "./features/authenticationSlice";

// const authenticationMiddleware: Middleware<{}, RootState> =
//   (store) => (next) => async (action) => {
//     if (action.type === "auth/login") {
//       try {
//         // Simulate asynchronous login operation
//         const response = await fetch("http://localhost:8080/api/authenticate", {
//           method: "POST",
//           body: JSON.stringify(action.payload),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (response.ok) {
//           const user = await response.json();
//           store.dispatch(loginSuccess(user));
//         } else {
//           const error = await response.text();
//           store.dispatch(loginFailure(error));
//         }
//       } catch (error) {
//         store.dispatch(loginFailure("An error occurred."));
//       }
//     }

//     return next(action);
//   };
// export default authenticationMiddleware;
