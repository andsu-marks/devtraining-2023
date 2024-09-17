import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCourseTable1726519487687 } from "src/migrations/1726519487687-CreateCourseTable";
import { CreateTagsTable1726576341647 } from "src/migrations/1726576341647-CreateTagsTable";

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCourseTable1726519487687, CreateTagsTable1726576341647]
})