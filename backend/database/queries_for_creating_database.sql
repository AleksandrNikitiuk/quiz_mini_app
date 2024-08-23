CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT
);

CREATE TABLE answers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    answer TEXT
);

CREATE TABLE questions_with_answers (
    question_id INTEGER,
    answer_id INTEGER,
    is_correct BOOLEAN,
    FOREIGN KEY(question_id) REFERENCES questions(id),
    FOREIGN KEY(answer_id) REFERENCES answers(id)
);