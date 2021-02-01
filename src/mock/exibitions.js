import { Response } from "miragejs";
export const currentExibitions = (schema, request) => {
  return new Response(
    200,
    {},
    { result: "success", data: schema.db.currentExibit }
  );
};
export const exibitionsOnView = (schema, request) => {
  return new Response(
    200,
    {},
    { result: "success", data: schema.db.exibitionsOnView }
  );
};
