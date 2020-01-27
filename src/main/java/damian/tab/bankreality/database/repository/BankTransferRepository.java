package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.Account;
import damian.tab.bankreality.database.model.BankTransfer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankTransferRepository extends JpaRepository<BankTransfer, Integer> {
}
