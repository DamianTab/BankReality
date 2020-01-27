package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.Credit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/credit")
@RestController
public class CreditApi extends GenericRESTApi<Credit> {
    public CreditApi(JpaRepository<Credit, Integer> dao) {
        super(dao);
    }
}
