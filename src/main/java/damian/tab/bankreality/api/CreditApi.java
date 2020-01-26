package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.Credit;
import damian.tab.bankreality.database.model.CreditKey;
import damian.tab.bankreality.database.model.PrimaryKey;
import damian.tab.bankreality.database.repository.CreditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/credit")
@RestController
public class CreditApi extends GenericRESTApi<Credit> {

    @Autowired
    public CreditApi(CreditRepository dao) {
        super(dao);
    }
}
