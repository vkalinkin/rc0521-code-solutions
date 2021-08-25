select "cat"."name", count("categoryId")
from "castMembers"
join "filmCategory"
using ("filmId")

join "categories" as "cat"
using ("categoryId")
where "actorId" = 178
group by "categoryId"
