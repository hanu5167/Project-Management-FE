// // src/mocks/handlers.js
// import { http, HttpResponse } from "msw";

// export const handlers = [
//   http.post("/api/login", async ({ request }) => {
//     const { email, password } = await request.json();

//     if (email === "user@example.com" && password === "password123") {
//       return HttpResponse.json(
//         { message: "Login successful" },
//         { status: 200 }
//       );
//     } else {
//       return HttpResponse.json(
//         { message: "Invalid credentials" },
//         { status: 401 }
//       );
//     }
//   }),
// ];
