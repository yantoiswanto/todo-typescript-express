
# todo-typescript-express
Source code for the example REST API with Express, Typescript, Sequelize and postgresql 

1. Clone The Repo
    
    ```sh
   git clone git@github.com:yantoiswanto/todo-typescript-express.git
   cd todo-typescript-express
   ```
2. Install pnpm
   
   ```sh
   npm i pnpm
   ```
   
3. Install dependencies

   ```sh
   pnpm install
   ```
   
4. Create Database PostgreSQL
   
   ```sh
   CREATE DATABASE db_todolist;
   ```

5. Setup .env.example to .env
   
   ```sh
   PORT=3000

   NODE_ENV=devepolment

   DB_HOST=localhost
   DB_USERNAME=postgres
   DB_PASSWORD=#setup password
   DB_PORT=5432
   DB_NAME=db_todolist
   ```
6. Migration Database with Sequelize
   
   ```sh
   npx sequelize-cli db:migrate
   ```
   
7. Build ts to js
   
   ```sh
   pnpm run ts
   ```

8. Run dev

   ```sh
   pnpm run dev
   ```
   
