import { Response } from "miragejs";

export const collectionsHome = (schema, request) => {
  const { queryParams } = request;
  const result = schema.db.collections.where({ ...queryParams });
  return new Response(200, {}, { result: "success", data: result });
};
