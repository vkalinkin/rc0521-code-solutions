select "a"."line1" as "Address Line",
"c"."name" as "City",
"a"."district" as "District"
from "addresses" as "a"
join "cities" as "c"
using ("cityId");
