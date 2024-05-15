import { Router } from "express";
import {
  renderTask,
  registrar,
  editar,
  editardatos,
  eliminar,
  seleccionar,
} from "../controllers/tasks.controller";

const router = Router();
 
router.get("/", renderTask);

router.post("/tasks/add", registrar);

router.get("/edit/:id/editar", editar);
router.post("/edit/:id/editar", editardatos);

router.get("/delete/:id/eliminar", eliminar);

router.get("/done/:id/seleccionar", seleccionar);

export default router;
