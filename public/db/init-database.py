import sqlite3

conn = sqlite3.connect("database.db")

queries = [
	"DROP TABLE IF EXISTS TEST",
	"""CREATE TABLE TEST(
		ID INT PRIMARY KEY NOT NULL,
		VALUE VARCHAR(255)
	)""",
	"INSERT INTO TEST VALUES(1, 'THE FUCKING FIRST VALUE')",
	"INSERT INTO TEST VALUES(2, 'THE GODAMN SECOND VALUE')",
	"INSERT INTO TEST VALUES(3, 'THE SHITTY THIRD VALUE')",
]

select_query = "SELECT * FROM TEST;"

cursor = conn.cursor()

for query in queries:
	cursor.execute(query)

cursor.execute( select_query )
result = cursor.fetchall()
print(result)
conn.commit()