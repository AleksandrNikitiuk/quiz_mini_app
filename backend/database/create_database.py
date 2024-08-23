import sqlite3


with open('queries_for_creating_database.sql', 'r') as queries_file:
    queries = queries_file.read()

connect = sqlite3.connect('database.db').cursor().executescript(queries)
connect.close()