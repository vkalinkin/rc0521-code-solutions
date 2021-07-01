select "releaseYear" as "Release Year",
"c"."name" as "Category Name"
from "films" as "f"
join "filmCategory" as "fc"
using ("filmId")
join "categories" as "c"
using ("categoryId")
where "title" = 'Boogie Amelie';
