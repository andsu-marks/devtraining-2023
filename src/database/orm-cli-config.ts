import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCourseTable1726519487687 } from "src/migrations/1726519487687-CreateCourseTable";
import { CreateTagsTable1726576341647 } from "src/migrations/1726576341647-CreateTagsTable";
import { CreateCoursesTagsTable1726577692562 } from "src/migrations/1726577692562-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1726578371421 } from "src/migrations/1726578371421-AddCoursesIdToCoursesTagsTable";

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCourseTable1726519487687, CreateTagsTable1726576341647, CreateCoursesTagsTable1726577692562, AddCoursesIdToCoursesTagsTable1726578371421]
})