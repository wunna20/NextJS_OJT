-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    age NUMBER,
    gender TEXT,
    password TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

-- INSERT INTO Person (name, email, age, gender) values ('bruno', 'bruno@antunes.pt', 23, 'male');
-- INSERT INTO Person (name, email, age, gender) values ('jack', 'jack@antunes.pt', 25, 'female');

-- INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R8', 1);
-- INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R6', 1);
-- INSERT INTO Vehicle (brand, model, ownerId) values('mercedes', 'benz', 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;