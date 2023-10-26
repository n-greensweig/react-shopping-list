-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "list" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80) NOT NULL,
"quantity" DECIMAL(10,2) NOT NULL,
"unit" VARCHAR(80) NOT NULL,
"purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "list" ("name", "quantity", "unit")
VALUES ('Milk', 2, 'Gallons'),
('Bread', 1, 'Loaf'),
('Eggs', 3, 'Cartons'),
('Cheese', 1, 'Wheel'),
('Cake', 5, 'Slices');