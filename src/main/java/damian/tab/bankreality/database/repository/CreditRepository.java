package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.Credit;
import damian.tab.bankreality.database.model.PrimaryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditRepository extends JpaRepository<Credit, Integer> {
}
