package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Integer> {
}
