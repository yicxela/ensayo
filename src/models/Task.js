import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    titulo: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
    versionKey:false
  }
);

export default model("Task", taskSchema);
