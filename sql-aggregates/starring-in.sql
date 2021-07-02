select "cat"."name", count("categoryId")
-- select "cat"."name","categoryId", count("categoryId")
from "castMembers"
join "filmCategory"
using ("filmId")

join "categories" as "cat"
using ("categoryId")
where "actorId" = 178
group by "categoryId"

-- from "actors"
-- where "firstName" = 'Lisa' and "lastName" = 'Monroe';

-- id = 178
