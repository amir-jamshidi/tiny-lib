function e(o) {
  console.log(`Message => ${o}`, "TEST");
}
const n = "production";
export {
  n as ENV,
  e as advanceLogger
};
