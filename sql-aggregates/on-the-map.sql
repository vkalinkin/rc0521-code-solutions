select "co"."name" as "Name of Country", count("cityId") as "Cities per Country"
from "cities"
join "countries" as "co"
using ("countryId")
group by "countryId";
