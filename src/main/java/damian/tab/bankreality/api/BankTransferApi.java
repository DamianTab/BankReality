package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.BankTransfer;
import damian.tab.bankreality.database.model.Investment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/transfer")
@RestController
public class BankTransferApi extends GenericRESTApi<BankTransfer> {
    public BankTransferApi(JpaRepository<BankTransfer, Integer> dao) {
        super(dao);
    }
}
