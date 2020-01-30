package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.BankTransfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

public interface BankTransferRepository extends JpaRepository<BankTransfer, Integer> {
    @Procedure(name = "makeTransfer")
    void makeTransfer(@Param("pAmount") Double pAmount,
                    @Param("pSender") Integer pSender,
                    @Param("pReceiver") Integer pReceiver);
}
