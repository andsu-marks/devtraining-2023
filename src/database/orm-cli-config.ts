import 'dotenv/config';
import { DataSource, DataSourceOptions } from "typeorm";
import { CreateCourseTable1726519487687 } from "src/migrations/1726519487687-CreateCourseTable";
import { CreateTagsTable1726576341647 } from "src/migrations/1726576341647-CreateTagsTable";
import { CreateCoursesTagsTable1726577692562 } from "src/migrations/1726577692562-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1726578371421 } from "src/migrations/1726578371421-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1726579639006 } from "src/migrations/1726579639006-AddTagsIdToCoursesTagsTable";
import { Course } from "src/courses/entities/courses.entity";
import { Tag } from "src/courses/entities/tags.entity";

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false
}

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCourseTable1726519487687, 
    CreateTagsTable1726576341647, 
    CreateCoursesTagsTable1726577692562, 
    AddCoursesIdToCoursesTagsTable1726578371421,
    AddTagsIdToCoursesTagsTable1726579639006
  ]
})