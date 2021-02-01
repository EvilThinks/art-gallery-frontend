import { Server, Model, Response, belongsTo } from "miragejs";
import { currentExibitions ,exibitionsOnView} from "./exibitions";
import { collectionsHome } from "./collections";
import { rootSeed } from "./seed";
const tmpFunc = (db, request) => {
  return new Response(503, {}, { response: "error", message: "fail" });
};

const RoutesHandlers = [
  {
    type: "get",
    url: "/exibitions/onview",
    handler: exibitionsOnView,
    response: { timing: 400 },
    auth: false,
  },
  {
    type: "get",
    url: "/exibitions/current",
    handler: currentExibitions,
    response: { timing: 2000 },
    auth: false,
  },
  {
    type: "get",
    url: "/collections",
    handler: collectionsHome,
    response: { timing: 2000 },
    auth: false,
  },
];
const mirageJS = new Server({
  models: {
    currentExibit: Model,
  },
  seeds(server) {
    server.db.loadData(rootSeed );
  },
  routes() {
    this.namespace = "api";
    RoutesHandlers.forEach(({ type, url, handler, response, auth }) => {
      this[type](url, handler, response);
    });
  },
});

export default mirageJS;
