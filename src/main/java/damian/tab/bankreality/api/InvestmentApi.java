package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.Credit;
import damian.tab.bankreality.database.model.Investment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/investment")
@RestController
public class InvestmentApi extends GenericRESTApi<Investment> {
    public InvestmentApi(JpaRepository<Investment, Integer> dao) {
        super(dao);
    }
}
