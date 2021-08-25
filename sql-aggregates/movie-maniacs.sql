select "firstName", "lastName", sum("amount") as "Total Rental Payments"
from "customers"
join "payments"
using ("customerId")
group by "customerId"
order by "Total Rental Payments" desc;
