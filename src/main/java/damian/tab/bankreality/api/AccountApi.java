package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/account")
@RestController
public class AccountApi extends GenericRESTApi<Account> {
    public AccountApi(JpaRepository<Account, Integer> dao) {
        super(dao);
    }
}
