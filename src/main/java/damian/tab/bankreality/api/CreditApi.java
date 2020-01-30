package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.Credit;
import damian.tab.bankreality.database.repository.CreditRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/credit")
@RestController
public class CreditApi extends GenericRESTApi<Credit> {
    public CreditApi(JpaRepository<Credit, Integer> dao) {
        super(dao);
    }

    @GetMapping("/emi")
    double estimateEMI(
            @RequestParam(value = "amount") Double amount,
            @RequestParam(value = "interest") Integer interest,
            @RequestParam(value = "time") Integer time
    ) {
        return ((CreditRepository) dao).estimateEMI(amount, interest, time);
    }
}
