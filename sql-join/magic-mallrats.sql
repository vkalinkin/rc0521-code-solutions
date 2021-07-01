select "c"."firstName",
"c"."lastName",
"f"."title"
from "films" as "f"

join "inventory" as "i"
using ("filmId")

join "rentals" as "r"
using ("inventoryId")

join "customers" as "c"
using ("customerId")

where "f"."filmId" = 547
